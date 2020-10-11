import io from 'socket.io-client';
import { Observable, fromEvent } from 'rxjs';

export const socket = io('http://127.0.0.1:4000');

socket.on('connect', () => console.log('connection established'));

// export const gameTimer = fromEvent(socket, 'intrval');
export const gameTimer = fromEvent(socket, 'sync-time');

export function emitHello() {
  socket.emit('start-timer', {});
}

// socket.on('sync-time', (data) => console.log('clock time ', data.elapsedTime));
