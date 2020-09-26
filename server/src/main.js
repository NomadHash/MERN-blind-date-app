require('dotenv').config(); // env 환경 설정할 수 있도록 설정
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';
import morgan from 'morgan';
import http from 'http';

const { PORT, MONGO_URI } = process.env; // .env 내부 값 비구조화 할당

// MongoDB 접속
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.log(e);
  });

const app = express(); // app은 express 프레임워크 수행
const server = http.createServer(app); // express로 서버 설정

app.use(bodyParser.json()); // bodyParser 를 JSON 으로 parse
app.use(bodyParser.urlencoded({ extended: true })); // url 을 인코딩함
app.use(morgan('dev'));
app.use(cookieParser());
app.use(jwtMiddleware);

app.use('/api', api); // api 라우터 적용

const port = PORT || 4000;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
