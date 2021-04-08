import React, { useContext, useState } from "react";
import { useGoogleLogout } from 'react-google-login'

export const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const clientId = "722555313958-ctam9forb3nnsjdl18293nhrum1j57oe.apps.googleusercontent.com";

    function loggedOut() {
        alert("Logout")
    }
    function Failed() {
        alert("Failed")
    }


    const [user, setUser] = useState()
    const { signOut } = useGoogleLogout({
        clientId,
        loggedOut,
        Failed
    })


    const login = (data) => {
        setUser(data)
    }

    const value = {
        login, user, signOut
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}