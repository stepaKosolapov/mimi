import styles from "./CurrentDialog.module.css";

const CurrentDialog = ({dialogInfo:{name, avatarSrc, dialogId, message}}) => {
    return <div className={styles.container}>
        <div className={styles.header}>
        </div>
        <div className={styles.body}>
            <div className={styles.messagesContainer}>
            </div>
            <div className={styles.newMessageForm}>
            </div>
        </div>
    
    </div>
}

export default CurrentDialog;