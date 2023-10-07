'use client'

import { apiLogin, apiLogout } from "@/actions/user";
import { useRouter } from "next/navigation";

const { createContext, useState } = require("react");

export const AuthContext = createContext({})


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const { push } = useRouter()

    const login = async (credenciais) => {
        const { usuario } = await apiLogin(credenciais)
        setUser({
            nome: "Jaelson",
            login: "jaelson@jow.com",
            foto: "foto.jpg"
        })
        push("/home")
    }
    const logout = () => {
        apiLogout()
        setUser(null);
        push("/login")
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider