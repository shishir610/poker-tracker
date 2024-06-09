import RoomActions from "../actions/AdminActions";

const RoomReducer = (state, { type, payload }) => {
	switch (type) {
		case RoomActions.CREATE_ROOM:
			return {
				...state,
				isHost: true,
				roomId: payload.roomId,
			};
		case RoomActions.START_GAME:
			return {
				...state,
				hasGameStarted: true,
			};
		default:
			return state;
	}
};

export default RoomReducer;
