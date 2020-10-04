import socketIo from 'socket.io';

/**
 * socket.io 라이브러리 및 동작 수행
 * @param {http.Server} server - socket.io에 장착할 서버
 */
const useSocketIo = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('connect');

    io.emit('chat', {
      msg: 'msg',
    });
  });
};

export default useSocketIo;
