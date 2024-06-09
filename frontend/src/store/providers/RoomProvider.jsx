import { useReducer } from "react";
import RoomReducer from "../reducers/RoomReducer";
import RoomContext from "../context/RoomContext";
import PropTypes from "prop-types";

const initialState = {
	roomId: null,
	isHost: false,
	hasGameStarted: false,
};

const RoomProvider = ({ children }) => {
	const [state, dispatch] = useReducer(RoomReducer, initialState);

	return (
		<RoomContext.Provider value={{ state, dispatch }}>
			{children}
		</RoomContext.Provider>
	);
};

// Define the expected type for children
RoomProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default RoomProvider;
