import PropTypes from "prop-types";

export default function SubHeading({ title }) {
	return <small className="text-sm font-medium leading-none">{title}</small>;
}

// Define the expected type for props.
SubHeading.propTypes = {
	title: PropTypes.string.isRequired,
};
