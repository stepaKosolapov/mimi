import styles from "./Messages.module.css";
import DialogsContainer from "./Dialogs/DialogsContainer";
// import CurrentDialog from "./CurrentDialog/CurrentDialog";

const Messages = () => {
    return <>
        <div className={styles.container}>
            <div className={styles.utils}>
            </div>
            <div className={styles.dialogs}>
                <DialogsContainer/>
            </div>
            <div className={styles.currentDialog}>
                {/*<CurrentDialog/>*/}
            </div>
        </div>
    </>
}

export default Messages;