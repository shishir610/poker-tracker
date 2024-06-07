import { useReducer } from "react"
import RoomReducer from "../reducers/RoomReducer"
import RoomContext from "../context/RoomContext"

const initialState = {
    roomId: null,
    isHost: false,
}

const RoomProvider = ({ children }) => {
    const [state, dispatch] = useReducer(RoomReducer, initialState)

    return (
        <RoomContext.Provider value={{ state, dispatch }}>
            {children}
        </RoomContext.Provider>
    )
}

export default RoomProvider
