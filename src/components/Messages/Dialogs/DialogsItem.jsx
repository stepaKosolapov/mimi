import styles from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = ({dialogInfo:{name, avatarSrc, dialogId, lastMessageText, lastMessageTime, unreadMessagesCount},
                         isLastItem}) => {
    return <NavLink to={`${dialogId}`} className={({isActive}) => isActive ? styles.active : ""}>
        <div className={styles.container}
             style={isLastItem ? {border: 'none'} : {}}>
            <div className={styles.avatarContainer}>
                <img src={avatarSrc} alt='avatar'/>
            </div>
            <div className={styles.nameContainer}>
                <div className={styles.name}>
                    {name}
                </div>
            </div>
            <div className={styles.timeContainer}>
                {lastMessageTime}
            </div>
            <div className={styles.lastMessageContainer}>
                {lastMessageText.slice(0, 30) + (lastMessageText.length > 30 ? '...' : '')}
            </div>
            {
                unreadMessagesCount
                    ?
                    <div className={styles.unreadMessagesContainer}>
                        <div className={styles.unreadMessages}>
                            {unreadMessagesCount}
                        </div>
                    </div>
                    : <></>
            }
        </div>
    </NavLink>
}

export default DialogsItem;