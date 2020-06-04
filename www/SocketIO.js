class MediaPlayer extends tabris.NativeObject {
  constructor(properties) {
    super(properties);
  }

  get _nativeType() {
    return 'ru.fax1ty.tabris.socket_io.SocketIO';
  }

  emit(event, ...args) {
    if (typeof event != 'string') throw new Error('Event argument must be a string!');
    else {
      if (!args) this._nativeCall('emit', { event: event });
      else this._nativeCall('emit', { event: event, args: args });
    }
  }

  disconnect() {
    this._nativeCall('disconnect');
  }

  _trigger(name, event) {
    return super._trigger(name, event);
  }

  _listen(name, listening) {
    this._nativeListen(name, listening);
  }
}

tabris.NativeObject.defineProperties(MediaPlayer.prototype, {
  'url': {
    type: 'string',
    default: ''
  }
});

module.exports = MediaPlayer;