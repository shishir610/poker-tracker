const AdminReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_PLAYER":
            return {
                ...state,
                players: [...state.players, { ...payload, amount: 500 }],
            }
        default:
            return state
    }
}

export default AdminReducer
