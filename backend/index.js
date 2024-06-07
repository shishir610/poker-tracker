const ShortUniqueId = require("short-unique-id")

const { randomUUID } = new ShortUniqueId({ length: 10 })

let hostSocketId
let socketIdNicknameMap = {}
let playerSocketIds = []
let roundNumber = 0

const io = require("socket.io")(3000, {
    cors: {
        origin: ["http://localhost:5173"],
    },
})

console.log("Serving running on port 3000")

io.on("connection", (socket) => {
    console.log(socket.id)

    socket.on("create-room", (cb) => {
        const roomId = randomUUID()
        hostSocketId = socket.id
        socket.join(roomId)
        cb(roomId)
    })

    socket.on("join-room", (roomId, nickname, cb) => {
        socket.join(roomId)
        socketIdNicknameMap[socket.id] = nickname
        playerSocketIds.push(socket.id)
        io.to(hostSocketId).emit("add-player", { nickname })
        cb()
    })

    socket.on("start-game", () => {
        socket.broadcast.emit("start-game")
    })
})
