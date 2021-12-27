import styles from './MessageItem.module.css'

const MessageItem = ({messageBody, isIncoming}) => {
    return <div className={styles.messageRow + (isIncoming ? ` ${styles.incoming}` : '')}>
        <div className={styles.container}>
            <div className={styles.body}>
                {messageBody}
            </div>
        </div>
    </div>
}

export default MessageItem;