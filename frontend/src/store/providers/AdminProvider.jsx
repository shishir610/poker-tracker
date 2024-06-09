import { useReducer } from "react";
import AdminReducer from "../reducers/AdminReducer";
import AdminContext from "../context/AdminContext";
import PropTypes from "prop-types";

const initialState = {
	hasGameStarted: false,
	players: [],
};

const AdminProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AdminReducer, initialState);

	return (
		<AdminContext.Provider value={{ state, dispatch }}>
			{children}
		</AdminContext.Provider>
	);
};

// Define the expected type for children
AdminProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AdminProvider;
