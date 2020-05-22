package ru.fax1ty.tabris.socket_io

import com.eclipsesource.tabris.android.Scope
import io.socket.emitter.Emitter

class OnListener(private val event: String, private val scope: Scope, private val socketIO: SocketIO)
    : Emitter.Listener {

    override fun call(vararg args: Any?) {
        scope.remoteObject(socketIO)?.notify(event, "args", args)
    }
}