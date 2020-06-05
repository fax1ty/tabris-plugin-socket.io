package ru.fax1ty.tabris.socket_io

import android.app.Activity
import io.socket.client.IO

class SocketIO(activity: Activity, url: String) {

    private val socket = IO.socket(url)

    fun emit(event: String) {
        socket.emit(event)
    }

    fun emit(event: String, args: List<Any>?) {
        socket.emit(event, args)
    }

    fun on(event: String, listener: OnListener) {
        socket.on(event, listener)
    }

    fun off(event: String) {
        socket.off(event)
    }

    fun disconnect() {
        socket.disconnect()
    }
}