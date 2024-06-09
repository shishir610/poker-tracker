import { Button } from "@/components/ui/button";
import InputWithLabel from "@/src/components/ui/InputWithLabel";
import { socket } from "@/src/services/socket";
import usePlayerContext from "@/src/store/hooks/usePlayerContext";
import useRoomContext from "@/src/store/hooks/useRoomContext";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const NicknameConfiguration = ({ dispatch }) => {
	const { roomId } = useParams();
	const [nickname, setNickname] = useState("");

	const handleJoinRoom = () => {
		socket.emit("join-room", roomId, nickname, () => {
			dispatch({ type: "SET_NICKNAME", payload: { nickname, roomId } });
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
	const { state, dispatch } = useRoomContext();

	const startGameEvent = () => {
		dispatch({ type: "START_GAME" });
	};

	useEffect(() => {
		socket.on("start-game", startGameEvent);
		return () => {
			socket.off("start-game", startGameEvent);
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
	const { state, dispatch } = usePlayerContext();

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
