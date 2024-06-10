import { Button } from "@/components/ui/button";
import InputWithLabel from "@/src/components/ui/InputWithLabel";
import { socket } from "@/src/services/socket";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import SocketActions from "../../../../SocketActions.mjs";
import PlayerActions from "@/src/store/actions/PlayerActions";
import useActorContext from "@/src/store/hooks/useActorContext";
import RoomContext from "@/src/store/context/RoomContext";
import RoomActions from "@/src/store/actions/RoomActions";
import PlayerContext from "@/src/store/context/PlayerContext";

const NicknameConfiguration = ({ dispatch }) => {
	const { roomId } = useParams();
	const [nickname, setNickname] = useState("");

	const handleJoinRoom = () => {
		socket.emit(SocketActions.JOIN_ROOM, roomId, nickname, () => {
			console.log("Adding player to room " + roomId);
			dispatch({
				type: PlayerActions.SET_NICKNAME,
				payload: {
					nickname,
					roomId,
				},
			});
		});
	};

	return (
		<div className="flex flex-col gap-y-2">
			<InputWithLabel
				label={"Set a nickname"}
				placeholder={"JamesBond"}
				disabled={false}
				value={nickname}
				onChange={setNickname}
			/>
			<InputWithLabel
				label={"Room ID"}
				placeholder={""}
				disabled={true}
				value={roomId}
			/>
			<Button
				type="submit"
				disabled={nickname === ""}
				onClick={handleJoinRoom}
			>
				Join Room
			</Button>
		</div>
	);
};

const PlayerControls = () => {
	return <div>WHOOP WHOOP! GAME STARTED!</div>;
};

const PlayerLobby = () => {
	const { state, dispatch } = useActorContext(RoomContext);

	const startGameEvent = () => {
		dispatch({
			type: RoomActions.START_GAME,
		});
	};

	useEffect(() => {
		socket.on(SocketActions.START_GAME, startGameEvent);
		return () => {
			socket.off(SocketActions.START_GAME, startGameEvent);
		};
	});

	return (
		<Fragment>
			{state.hasGameStarted ? (
				<PlayerControls />
			) : (
				<p>Waiting for players to join and host to start the game.</p>
			)}
		</Fragment>
	);
};

// Define the expected type for dispatch
NicknameConfiguration.propTypes = {
	dispatch: PropTypes.node.isRequired,
};

export default function PlayerPage() {
	const { state, dispatch } = useActorContext(PlayerContext);

	return (
		<Fragment>
			{state.nickname === "" ? (
				<NicknameConfiguration dispatch={dispatch} />
			) : (
				<PlayerLobby />
			)}
		</Fragment>
	);
}
