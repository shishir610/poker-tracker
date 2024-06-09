import PropTypes from "prop-types";

// Creates a div with full screen height and width
export default function PageWrapper({ children }) {
	return (
		<div className="flex justify-center items-center h-screen w-screen">
			{children}
		</div>
	);
}

// Define the expected type for children
PageWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};
