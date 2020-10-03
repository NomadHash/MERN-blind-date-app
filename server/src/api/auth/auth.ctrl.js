import Joi from 'joi';
import User from '../../models/user';

export const register = async (req, res, next) => {
  // Request Body 검증
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
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

  const { email, username, password } = req.body;
  try {
    const exists = await User.findByEmail(email); // username 이 존재하는지 검사
    if (exists) {
      res.status(409).send();
      return;
    }

    const user = new User({
      email,
      username,
    });

    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

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
  const { email, password } = req.body;

  // email, password 가 없으면 에러
  if (!email || !password) {
    res.status(401).send();
    return;
  }

  try {
    const user = await User.findByEmail(email);
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
