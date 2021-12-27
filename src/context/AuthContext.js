import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {authAPI} from "api/api";
import jwtDecode from "jwt-decode";

const AuthContext = createContext(undefined);

export default AuthContext;

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(() => authTokens ? jwtDecode(authTokens.access) : null);
    let navigate = useNavigate();
    
    // const login
    
    const loginUser = async (login, password) => {
        let response = await authAPI.loginUser(login, password);
        if (response?.status === 200) {
            setAuthTokens(response.data);
            setUser(jwtDecode(response.data.access));
            localStorage.setItem('authTokens', JSON.stringify(response.data));
            navigate('/home');
        }
    }
    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
    }
    
    
    const refreshToken = async () => {
        if (!authTokens?.refresh) {
            return;
        }
        
        let response = await authAPI.refreshToken(authTokens?.refresh);
        if (response?.status === 200) {
            setAuthTokens(response.data);
            setUser(jwtDecode(response.data.access));
            console.log('updated user:', response.data.refresh)
            localStorage.setItem('authTokens', JSON.stringify(response.data));
        } else if(response?.status === 401) {
            console.log('Failed', response)
            logoutUser();
        } else{
            console.log('response:', response)
        }
    }
    
    const contextData = {
        loginUser,
        logoutUser,
        user
    }
    useEffect(()=>{
        refreshToken()
    },[]);
    useEffect(() => {
        const fourMinutes =   60 * 4 * 1000;
        let interval = setInterval(() => {
            if (authTokens) {
                refreshToken();
            }
        }, fourMinutes);
        return () => clearInterval(interval);
    }, [refreshToken, authTokens]);
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}