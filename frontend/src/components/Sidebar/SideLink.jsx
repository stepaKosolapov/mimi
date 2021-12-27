import styles from "./SideLink.module.css";
import {NavLink} from "react-router-dom";

const SideLink = ({IconComponent, text, href}) => {
    return <div className={styles.container}>
        <NavLink to={`/${href}`} className={({isActive}) => isActive ? styles.active : ""}>
            <div className={styles.body}>
                <div className={styles.icon}>
                    {IconComponent}
                </div>
                <span className={styles.text}>{text}</span>
            </div>
        </NavLink>
    </div>
}

export default SideLink;