const RoomReducer = (state, { type, payload }) => {
    switch (type) {
        case "CREATE_ROOM":
            return {
                ...state,
                isHost: true,
                roomId: payload.roomId,
            }
        default:
            return state
    }
}

export default RoomReducer
