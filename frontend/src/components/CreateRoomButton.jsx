import { useNavigate } from "react-router-dom";
import { socket } from "../services/socket";
import { Button } from "@/components/ui/button";
import { RoomActions } from "../store/reducers/RoomReducer";
import { SocketActions } from "../services/socket";
import RoomContext from "../store/context/RoomContext";
import useActorContext from "../store/hooks/useActorContext";

export default function CreateRoomButton() {
	// Navigate Hook for React Router.
	const navigate = useNavigate();
	// useActorContext Hook for accessing the RoomContext.
	const { dispatch } = useActorContext(RoomContext);

	// Create Room Event. Call the dispatch function with the CREATE_ROOM action type and the roomId as payload.
	const createRoomEvent = (roomId) => {
		console.log(roomId);
		dispatch({
			type: RoomActions.CREATE_ROOM,
			payload: {
				roomId,
			},
		});
		// TODO: Fix does not set Host as player in the room.
		navigate(`/room/${roomId}`);
	};

	// Handle Create Room. Emit the CREATE_ROOM event with the createRoomEvent as the callback.
	const handleCreateRoom = () => {
		socket.emit(SocketActions.CREATE_ROOM, createRoomEvent);
	};

	return <Button onClick={handleCreateRoom}>Create Room</Button>;
}
