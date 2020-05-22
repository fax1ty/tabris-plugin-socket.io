var PLUGIN_ID = 'tabris-plugin-socket.io';

var SocketIO = tabris.NativeObject.extend('ru.fax1ty.tabris.socket_io.SocketIO');

SocketIO.prototype._listen = function (name, listening) {
  this._nativeListen(name, listening);
};

SocketIO.prototype._trigger = function (name, event) {
  tabris.Widget.prototype._trigger.call(this, name, event);
};

Object.assign(SocketIO.prototype, {
  _nativeCreate: function () {
    tabris.NativeObject.prototype._nativeCreate.apply(this, arguments);
    return this;
  },

  emit: function (event, ...args) {
    if (typeof event != 'string') throw new Error('Invoking "emit" requires a string parameter "event" but received ' + event);
    if (args === null) this._nativeCall('emit', { event: event });
    else {
      if (!Array.isArray(args)) throw new Error('Invoking "emit" requires an array parameter "args" but received ' + args);
      this._nativeCall('emit', { event: event, args: args });
    }
  },

  disconnect: function () {
    thus._nativeCall('disconnect');
  },

  dispose: function () {
    this._nativeCall('disconnect');
    this._dispose();
  }
});

module.exports = SocketIO;
