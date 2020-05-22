import { NativeObject } from 'tabris';

declare global {
    class SocketIO extends NativeObject {
        emit(event: string, ...args: Array<any>): void;
        disconnect(): void;

        constructor(values: { url: string });
    }
}