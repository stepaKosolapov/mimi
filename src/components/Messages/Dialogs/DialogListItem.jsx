import styles from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogListItem = ({
                            dialogInfo:
                            {
                                id: dialogId,
                                lastMessage: {
                                    sender,
                                    body: lastMessageText,
                                    created: lastMessageTime,
                                },
                                person: {
                                    username:name,
                                    image_src:avatar,
                                    id:personId,
                                }
                            },
                            unreadMessagesCount,
                            isLastItem,
                            hostId}) => {
    return <NavLink to={`/message/${personId}`} className={({isActive}) => isActive ? styles.active : ""}>
        <div className={styles.container}
             style={isLastItem ? {border: 'none'} : {}}>
            <div className={styles.avatarContainer}>
                <img src={avatar} alt='avatar'/>
            </div>
            <div className={styles.nameContainer}>
                <div className={styles.name}>
                    {name}
                </div>
            </div>
            <div className={styles.timeContainer}>
                {(new Date(lastMessageTime)).toLocaleTimeString('en-Us', {
                    hour12: false,
                    hour: "numeric",
                    minute: "numeric"
                })}
            </div>
            <div className={styles.lastMessageContainer}>
                {+sender === +hostId && 'You: '}
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

export default DialogListItem;