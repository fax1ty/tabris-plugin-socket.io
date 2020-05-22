# Tabris.JS Socket.IO Plugin

## Example

```ts
let socket = new SocketIO('http://localhost:3000');

socket.on('connect', () => {
    socket.emit('hello');
    socket.on('world', (data: String) => console.log(data));
});
```

## Android

Android version uses this library: https://github.com/socketio/socket.io-client-java

## iOS

iOS maintainer is needed. You can use this library https://github.com/socketio/socket.io-client-swift