import styles from "./Messages.module.css";
import DialogsContainer from "./Dialogs/DialogsContainer";
import CurrentDialogContainer from "./CurrentDialog/CurrentDialogContainer";
import withAuthRequired from "components/hoc/withAuthRequired";
import Logout from "./Logout/Logout";

const Messages = () => {
    return <>
        
        <div className={styles.container}>
            <div className={styles.utils}>
                <Logout/>
            </div>
            <div className={styles.dialogs}>
                <DialogsContainer/>
            </div>
            <div className={styles.currentDialog}>
                <CurrentDialogContainer/>
            </div>
        </div>
    </>
}

export default withAuthRequired(Messages);