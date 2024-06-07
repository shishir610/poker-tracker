import { useReducer } from "react"
import AdminReducer from "../reducers/AdminReducer"
import AdminContext from "../context/AdminContext"

const initialState = {
    players: [],
}

const AdminProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AdminReducer, initialState)

    return (
        <AdminContext.Provider value={{ state, dispatch }}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminProvider
