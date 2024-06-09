import { ShortUniqueId } from "short-unique-id";
import { Server } from "socket.io";
import SocketActions from "../SocketActions";

// UUID Generator.
const { randomUUID } = new ShortUniqueId({ length: 10 });

let hostSocketId;
let socketIdNicknameMap = {};
let playerSocketIds = [];
let roundNumber = 0;

const io = Server(3000, {
	cors: {
		origin: ["http://localhost:5173"],
	},
});

console.log("Serving running on port 3000");

io.on(SocketActions.CONNECTION, (socket) => {
	console.log(socket.id);

	socket.on(SocketActions.CREATE_ROOM, (cb) => {
		const roomId = randomUUID();
		hostSocketId = socket.id;
		socket.join(roomId);
		cb(roomId);
	});

	socket.on(SocketActions.JOIN_ROOM, (roomId, nickname, cb) => {
		socket.join(roomId);
		socketIdNicknameMap[socket.id] = nickname;
		playerSocketIds.push(socket.id);
		io.to(hostSocketId).emit(SocketActions.ADD_PLAYER, {
			nickname,
		});
		cb();
	});

	socket.on(SocketActions.START_GAME, () => {
		socket.broadcast.emit(SocketActions.START_GAME);
	});
});
