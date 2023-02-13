import socketIO from 'socket.io-client';
// Initialize Socket IO:
const SOCKET_URL = 'http://127.0.0.1:4000';
// const SOCKET_URL = 'http://192.168.32.1:5000';

class Websocket {
  InitializeSocket = async () => {
    console.log(socketIO);
    try {
      this.socket = socketIO(SOCKET_URL, {
        transports: ['websocket'],
        jsonp: false,
      });

      this.socket.on('connect', () => {
        console.log('connected');
      });

      this.socket.on('disconnect', () => {
        console.log('disconnected');
      });

      this.socket.on('error', err => {
        console.log('socket error' + err);
      });
    } catch (error) {
      console.log('socket is not Initialize');
    }
  };

  emit(event, data = {}) {
    this.socket.emit(event, data);
  }
  on(event, cb) {
    this.socket.on(event, cb);
  }

  // removeListener(event, listenerName) {
  //   this.socket.removeListener(event, listenerName);
  // }
}

const websocket = new Websocket();
export default websocket;
