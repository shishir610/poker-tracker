const AdminReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_PLAYER":
            return {
                ...state,
                players: [...state.players, payload],
            }
        default:
            return state
    }
}

export default AdminReducer
