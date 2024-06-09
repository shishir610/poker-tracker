import { Button } from "@/components/ui/button";
import { socket } from "../services/socket";
import { Socket } from "socket.io-client";
import useActorContext from "../store/hooks/useActorContext";
import RoomContext from "../store/context/RoomContext";
import RoomActions from "../store/actions/RoomActions";

const Table = () => {
	return <div>Table</div>;
};

export default function PokerTable() {
	const { state, dispatch } = useActorContext(RoomContext);

	const handleStartGame = () => {
		socket.emit(Socket.START_GAME);
		dispatch({
			type: RoomActions.START_GAME,
		});
	};

	return (
		<div className="flex w-full h-full justify-center items-center">
			{state.hasGameStarted ? (
				<Table />
			) : (
				<Button onClick={handleStartGame}>Start Game</Button>
			)}
		</div>
	);
}
