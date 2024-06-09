import { useContext } from "react";

const useActorContext = (actorContext) => {
	const context = useContext(actorContext);
	if (!context) {
		throw new Error("The Context must be used within the correct Provider");
	}
	return context;
};

export default useActorContext;
