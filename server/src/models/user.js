import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  email: String,
  username: String,
  hashedPassword: String,
});

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // return true or false
};

// Static method
UserSchema.statics.findByEmail = function (email) {
  return this.findOne({ email }); // static 함수의 this 는 모델(데이터베이스)을 가리킴
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON(); // 스키마의 데이터를 JSON 타입으로 변환
  delete data.hashedPassword; // JSON 으로 넘겨줄 때 비밀번호는 제외하고 넘겨줌
  return data;
};

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    // sign: 토큰을 발급하는 함수
    // 첫 번째 파라미터에는 토큰 안에 넣을 데이터를 넣음
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET, // 두 번째 파라미터에는 JWT 암호를 넣음
    {
      expiresIn: '7d', // 7일 동안 유효
    },
  );

  return token;
};

const User = mongoose.model('User', UserSchema);
export default User;
