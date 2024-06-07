const PlayerReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_NICKNAME":
            return {
                ...state,
                nickname: payload.nickname,
            }
        default:
            return state
    }
}

export default PlayerReducer
