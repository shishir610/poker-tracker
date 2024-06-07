const RoomReducer = (state, { type, payload }) => {
    switch (type) {
        case "CREATE_ROOM":
            return {
                ...state,
                isHost: true,
                roomId: payload.roomId,
            }
        case "START_GAME":
            return {
                ...state,
                hasGameStarted: true,
            }
        default:
            return state
    }
}

export default RoomReducer
