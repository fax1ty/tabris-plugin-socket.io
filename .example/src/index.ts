import { } from 'tabris';

let socket = new SocketIO({ url: 'http://192.168.31.214:3000' });
socket.emit('test', 'data');
socket.on('testAnswer', data => {
    console.log(data);
});
