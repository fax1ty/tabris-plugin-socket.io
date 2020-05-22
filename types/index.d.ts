import { NativeObject } from 'tabris';

declare global {
    class SocketIO extends NativeObject {
        emit: (event: string, ...args: any) => void;
        disconnect: () => void;

        constructor(url: string);
    }
}