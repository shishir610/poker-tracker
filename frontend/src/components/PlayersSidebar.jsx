import { useEffect } from "react";
import Heading from "./ui/Heading";
import useActorContext from "../store/hooks/useActorContext";
import SubHeading from "./ui/SubHeading";
import LinkToCopy from "./ui/LinkToCopy";
import { socket } from "../services/socket";
import PropTypes from "prop-types";
import AdminContext from "../store/context/AdminContext";
import { RoomActions } from "../store/reducers/AdminReducer";
import SocketActions from "../store/actions/SocketActions";

// Display a message when there are no players in the lobby.
const NoPlayersContent = () => {
	return (
		<div className="flex flex-col gap-y-2 w-full h-full justify-center items-center">
			<SubHeading title={"Share below link to add players to lobby."} />
			<LinkToCopy link={window.location.href} />
		</div>
	);
};

// Display a player in the lobby.
const PlayerTile = ({ nickname, amount }) => {
	return (
		<div className="py-2 flex justify-between items-center border-b-2 border-gray">
			<SubHeading title={nickname} />${amount}
		</div>
	);
};

// Display a list of players in the lobby.
const PlayersList = ({ players }) => {
	console.log(players);
	return (
		<div>
			<Heading title="Players" className="mb-4" />
			{players.map((player, index) => (
				<PlayerTile key={index} {...player} />
			))}
		</div>
	);
};

// Display a list of players in the lobby.
export default function PlayersSidebar() {
	const { state, dispatch } = useActorContext(AdminContext);

	const addPlayerEvent = (player) => {
		dispatch({
			type: RoomActions.ADD_PLAYER,
			payload: player,
		});
	};

	//TODO: Fix Joining of players with different room ids.
	//TODO: Fix Warning with useEffect.
	useEffect(() => {
		socket.on(SocketActions.ADD_PLAYER, addPlayerEvent);
		return () => {
			socket.off(SocketActions.ADD_PLAYER, addPlayerEvent);
		};
	}, []);

	return (
		<div className="w-1/4 border-r-2 shadow-sm p-5">
			{state.players.length === 0 ? (
				<NoPlayersContent />
			) : (
				<PlayersList players={state.players} />
			)}
		</div>
	);
}

// Define the expected type for props.
PlayerTile.propTypes = {
	nickname: PropTypes.string,
	amount: PropTypes.number,
};
PlayersList.propTypes = {
	players: PropTypes.array,
};
