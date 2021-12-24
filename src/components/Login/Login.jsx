import {useForm} from "react-hook-form";
import styles from "./Login.module.css";
import AuthContext from "context/AuthContext";
import {useContext} from "react";
import {ReactComponent as LogoSvg} from "assets/images/logo.svg";
import SmartSVG from "../common/SmartSVG/SmartSVG";

const Login = () => {
    const {register, handleSubmit} = useForm();
    const {loginUser} = useContext(AuthContext);
    const onSubmit = (values) => {
        loginUser(values.username, values.password)
            .then(resp=>console.log(resp));
    }
    
    return <form onSubmit={handleSubmit((...args) => {
        onSubmit(...args);
    })}>
        <div className={styles.container}>
            <div className={styles.usernameContainer}>
                <input type="text" className={styles.username}
                          placeholder='Username'
                          {...register("username", {required: true, maxLength: 15})}/>
            </div>
            <div className={styles.passwordContainer}>
                <input type="password" className={styles.password}
                       placeholder='Password'
                       {...register("password", {required: true, maxLength: 30})}/>
            </div>
            <div className={styles.submitContainer}>
                <button className={styles.submit} type="submit">
                    <span>Login</span>
                    <SmartSVG SvgComponent={LogoSvg} color={'var(--color2)'}/>
                </button>
            </div>
        </div>
    </form>
}



export default Login;