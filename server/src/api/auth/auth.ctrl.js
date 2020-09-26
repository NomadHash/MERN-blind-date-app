import Joi from 'joi';
import User from '../../models/user';

export const register = async (req, res, next) => {
  // Request Body 검증
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).json({
      message: result.error,
    });

    return;
  }

  const { username, password } = req.body;
  try {
    const exists = await User.findByUsername(username); // username 이 존재하는지 검사
    if (exists) {
      res.status(409).send();
      return;
    }

    const user = new User({
      username,
    });

    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

    // res.json(user.serialize()); // 보낼 데이터에서 비밀번호 제거

    const token = user.generateToken(); // 토큰 생성
    res
      .cookie('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
        httpOnly: true,
      })
      .json(user.serialize());
  } catch (e) {
    return next(e);
  }
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;

  // username, password 가 없으면 에러
  if (!username || !password) {
    res.status(401).send();
    return;
  }

  try {
    const user = await User.findByUsername(username);
    // 계정이 존재하지 않으면 에러
    if (!user) {
      res.status(401).send();
      return;
    }

    const valid = await user.checkPassword(password);
    // 비밀번호가 틀리면
    if (!valid) {
      res.status(401).send();
      return;
    }

    // res.json(user.serialize()); // 클라이언트에 user 정보 넘겨줌

    const token = user.generateToken(); // 토큰 생성

    res
      .cookie('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
        httpOnly: true,
      })
      .json(user.serialize());
  } catch (e) {
    res.status(500).send();
    return next(e);
  }
};

export const check = async (req, res) => {
  const { user } = res.locals;
  if (!user) {
    // 로그인 중이 아님
    res.status(401).send();
    return;
  }

  res.json(user);
};

export const logout = async (req, res) => {
  res.cookie('access_token');
  res.status(204).send();
};
