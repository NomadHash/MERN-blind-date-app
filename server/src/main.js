require('dotenv').config(); // env 환경 설정할 수 있도록 설정
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';
import morgan from 'morgan';
import http from 'http';
import useSocketIo from './lib/useSocketIo';

// dptenv 내부 값 비구조화 할당
const { PORT, MONGO_URI } = process.env;

// mongoose 라이브러리 db 연결
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.log(e);
  });

// 서버 설정
const app = express(); // express 실행
const server = http.createServer(app); // express 서버 설정

// 미들웨어 설정
app.use(bodyParser.json()); // bodyParser 를 JSON 으로 파싱
app.use(bodyParser.urlencoded({ extended: true })); // url 인코딩
app.use(morgan('dev')); // 개발 모니터링을 위한 morgan 라이브러리 사용
app.use(cookieParser()); // 쿠키를 파싱하기 위한 cookieParser 사용
app.use(jwtMiddleware); // jwt토큰 미들웨어 사용
app.use('/api', api); // api 라우터 적용

// socket.io
useSocketIo(server);

// 서버 수행
const port = PORT || 4000;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
