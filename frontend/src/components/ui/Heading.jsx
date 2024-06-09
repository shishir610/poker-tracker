import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

export default function Heading({ title, className }) {
	return (
		<h3
			className={cn(
				"scroll-m-20 text-2xl font-semibold tracking-tight",
				className
			)}
		>
			{title}
		</h3>
	);
}

// Define the expected type for children
Heading.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
};
