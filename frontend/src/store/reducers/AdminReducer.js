import AdminActions from "../actions/AdminActions";

//TODO: Fix the amount.
const AdminReducer = (state, { type, payload }) => {
	switch (type) {
		case AdminActions.ADD_PLAYER:
			return {
				...state,
				players: [...state.players, { ...payload, amount: 500 }],
			};
		default:
			return state;
	}
};

export default AdminReducer;
