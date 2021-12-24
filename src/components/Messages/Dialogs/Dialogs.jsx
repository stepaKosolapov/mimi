import styles from './Dialogs.module.css';
import SmartSVG from "components/common/SmartSVG/SmartSVG";
import {ReactComponent as logo} from "assets/images/logo.svg";
import DialogListItem from "./DialogListItem";


const Dialogs = ({hostId, dialogs}) => {
    return <>
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Message</h1>
                <button className={styles.addDialog}>
                    <span>New Chat</span>
                    <div className={styles.addIcon}>
                        <SmartSVG SvgComponent={logo} color={'var(--color5)'}/>
                    </div>
                </button>
            </div>
            <div className={styles.dialogList}>
                {
                    dialogs.map((dialog, i, arr)=>{
                        return <DialogListItem key={dialog.id}
                                               dialogInfo={dialog}
                                               unreadMessagesCount={1}
                                               isLastItem={i === arr.length-1}
                                               hostId={hostId}/>
                    })
                }
            </div>
        </div>
    </>
}

export default Dialogs;