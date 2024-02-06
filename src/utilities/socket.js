import { io } from "socket.io-client";

// const URL = 'https://cbot-server-17dbe4c52b7f.herokuapp.com';
const URL = 'http://localhost:4000'

export const socket = io(URL, {
    transports: ['websocket', 'polling', 'flashsocket']
});