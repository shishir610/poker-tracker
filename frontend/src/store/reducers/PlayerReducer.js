import PlayerActions from "../actions/PlayerActions";

const PlayerReducer = (state, { type, payload }) => {
	switch (type) {
		case PlayerActions.SET_NICKNAME:
			return {
				...state,
				nickname: payload.nickname,
			};
		default:
			return state;
	}
};

export default PlayerReducer;
