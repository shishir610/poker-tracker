import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import PropTypes from "prop-types";

export default function LinkToCopy({ link }) {
	const [isCopied, setIsCopied] = useState(false);

	const copyLink = async () => {
		navigator.clipboard.writeText(link);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 1000);
	};

	return (
		<Button
			size={3}
			className="p-2 text-xs"
			variant="outline"
			onClick={copyLink}
		>
			{link}{" "}
			<div className="ml-2 h-4 w-4">
				{isCopied ? <CheckIcon color="green" /> : <CopyIcon />}
			</div>
		</Button>
	);
}

// Define the expected type for props.
LinkToCopy.propTypes = {
	link: PropTypes.string.isRequired,
};
