import styles from "./Logout.module.css";
import {memo, useContext, useState} from "react";
import AuthContext from "context/AuthContext";
import SmartSVG from "../../common/SmartSVG/SmartSVG";
import {ReactComponent as burger} from "assets/images/burger.svg";

const Logout = ({name, avatar_src}) => {
    let [isOpened, setIsOpened] = useState(false);
    let {logoutUser} = useContext(AuthContext);
    return <div className={styles.container}>
        <img className={styles.avatar} src={avatar_src} alt="avatar"/>
        <div className={styles.name}>
            {name}
        </div>
        <div className={styles.burger + ' ' + (isOpened ? styles.opened : '')} onClick={()=>{setIsOpened(!isOpened)}}>
            <SmartSVG SvgComponent={burger} color={'var(--color2)'}/>
        </div>
        <div className={styles.dropdownContainer}>
            <div className={styles.dropdownBody}>
                <button className={styles.logout} onClick={logoutUser}>Logout</button>
            </div>
        </div>
    </div>
}


const LogoutContainer = () => {
    let {user: {username, image_src: avatar_src}} = useContext(AuthContext);
    return <Logout name={username} avatar_src={avatar_src}/>
}
export default memo(LogoutContainer);