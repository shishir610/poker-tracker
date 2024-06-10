import SocketActions from "../SocketActions.mjs";
import { nanoid } from "nanoid";
import { Server } from "socket.io";

// // Generate a random UUID for the room ID
// const ShortUniqueId = require("short-unique-id");
// const { randomUUID } = new ShortUniqueId({ length: 10 });

let hostSocketId;
let socketIdNicknameMap = {};
let playerSocketIds = [];
let roundNumber = 0;

const io = new Server(3000, {
	cors: {
		origin: ["http://localhost:5173"],
	},
});

console.log("Serving running on port 3000");

io.on(SocketActions.CONNECTION, (socket) => {
	console.log(socket.id);

	socket.on(SocketActions.CREATE_ROOM, (cb) => {
		const roomId = nanoid();
		hostSocketId = socket.id;
		socket.join(roomId);
		cb(roomId);
	});

	socket.on(SocketActions.JOIN_ROOM, (roomId, nickname, cb) => {
		console.log("Player has joined room " + roomId);
		socket.join(roomId);
		socketIdNicknameMap[socket.id] = nickname;
		playerSocketIds.push(socket.id);
		io.to(hostSocketId).emit(SocketActions.ADD_PLAYER, { nickname });
		cb();
	});

	socket.on(SocketActions.START_GAME, () => {
		socket.broadcast.emit(SocketActions.START_GAME);
	});
});
