import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import io from 'socket.io-client';

const App = () => {
  const socket = io();

  socket.on('chat', (msg) => {
    console.log(msg);
  });

  return (
    <>
      <Route component={MainPage} path="/" exact />
      <Route component={LoginPage} path="/login/" />
      <Route component={RegisterPage} path="/register/" />
    </>
  );
};

export default App;
