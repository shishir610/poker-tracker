import SubHeading from "./SubHeading";
import { Input } from "@/components/ui/input";
import PropTypes from "prop-types";

export default function InputWithLabel({
	label,
	placeholder,
	disabled,
	value,
	onChange,
}) {
	return (
		<div>
			<SubHeading title={label} />
			<Input
				type="text"
				className="border border-black"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				disabled={disabled}
			/>
		</div>
	);
}

// Define the expected type for props.
InputWithLabel.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	value: PropTypes.node,
	onChange: PropTypes.func,
};
