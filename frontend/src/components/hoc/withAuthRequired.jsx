import {useContext} from "react";
import AuthContext from "context/AuthContext";
import { Navigate } from "react-router-dom";

const withAuthRequired = (Component) => {
    const Wrapper = (...props) => {
        const {user} = useContext(AuthContext);
        return user ? <Component {...props}/> : <Navigate to="/login/" replace />;
    }
    return Wrapper;
}

export default withAuthRequired;