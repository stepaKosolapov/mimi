import {createContext, useState} from "react";
import {authAPI} from "api/api";

const AuthContext = createContext(undefined);

export default AuthContext;

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(null);
    let [user, setUser] = useState(null);
    
    // const login
    
    const loginUser = async (login, password) => {
        let response = await authAPI.loginUser(login, password);
        if (response?.status === 200) {
            setAuthTokens(response.data)
        }
    }
    
    const contextData = {
        loginUser: authAPI.loginUser,
        user:user
    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}