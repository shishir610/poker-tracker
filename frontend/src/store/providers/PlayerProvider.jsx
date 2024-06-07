import { useReducer } from "react"
import PlayerReducer from "../reducers/PlayerReducer"
import PlayerContext from "../context/PlayerContext"

const initialState = {
    nickname: "",
}

const PlayerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PlayerReducer, initialState)

    return (
        <PlayerContext.Provider value={{ state, dispatch }}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerProvider
