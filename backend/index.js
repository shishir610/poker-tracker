const ShortUniqueId = require("short-unique-id")

const { randomUUID } = new ShortUniqueId({ length: 10 })

let hostSocketID

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
        hostSocketID = socket.id
        cb(roomId)
    })
})
