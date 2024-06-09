import { useReducer } from "react";
import PlayerReducer from "../reducers/PlayerReducer";
import PropTypes from "prop-types";
import PlayerContext from "../context/PlayerContext";

const initialState = {
	nickname: "",
};

const PlayerProvider = ({ children }) => {
	const [state, dispatch] = useReducer(PlayerReducer, initialState);

	return (
		<PlayerContext.Provider value={{ state, dispatch }}>
			{children}
		</PlayerContext.Provider>
	);
};

// Define the expected type for children
PlayerProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PlayerProvider;
