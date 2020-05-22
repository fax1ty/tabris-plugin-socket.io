package ru.fax1ty.tabris.socket_io

import com.eclipsesource.tabris.android.ActivityScope
import com.eclipsesource.tabris.android.ObjectHandler
import com.eclipsesource.tabris.android.internal.ktx.getArrayOrNull
import com.eclipsesource.tabris.android.internal.ktx.toList
import com.eclipsesource.v8.V8Object

@Suppress("PARAMETER_NAME_CHANGED_ON_OVERRIDE")
class SocketIOHandler(private val scope: ActivityScope) : ObjectHandler<SocketIO> {

    override val type = "ru.fax1ty.tabris.socket_io.SocketIO"

    override fun create(id: String, properties: V8Object) = SocketIO(scope.activity, properties.getString("url"))

    override fun call(socket_io: SocketIO, method: String, properties: V8Object) = when (method) {
        "emit" -> {
            val args = properties.getArrayOrNull("args")
            if (args == null) socket_io.emit(properties.getString("event"))
            else socket_io.emit(properties.getString("event"), properties.getArray("args").toList())
        }
        "disconnect" -> socket_io.disconnect()
        else -> null
    }

    override fun listen(id: String, socket_io: SocketIO, event: String, listen: Boolean) {
        super.listen(id, socket_io, event, listen)
        if (listen) socket_io.on(event, OnListener(event, scope, socket_io))
        else socket_io.off(event)
    }

}