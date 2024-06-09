import { useEffect } from "react";
import { socket } from "./services/socket";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoomProvider from "./store/providers/RoomProvider";
import RoomPage from "./pages/Room/RoomPage";
import SocketActions from "../../SocketActions";

function App() {
	// Connects on the first render and disconnects on unmount.
	useEffect(() => {
		socket.on(SocketActions.CONNECT, () => console.log(socket.id));
		return () => {
			socket.off(SocketActions.CONNECT, () => console.log(socket.id));
		};
	}, []);

	return (
		<RoomProvider>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/room">
					<Route path=":roomId" element={<RoomPage />} />
				</Route>
			</Routes>
		</RoomProvider>
	);
}

export default App;
