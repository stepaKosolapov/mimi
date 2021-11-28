import styles from './Dialogs.module.css';
import SmartSVG from "components/common/SmartSVG/SmartSVG";
import {ReactComponent as logo} from "assets/images/logo.svg";
import DialogsItem from "./DialogsItem";


const Dialogs = ({authId, dialogsInfo}) => {
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
                    dialogsInfo.map((dialogInfo, i, arr)=>{
                        return <DialogsItem dialogInfo={dialogInfo}
                                            isLastItem={i === arr.length-1}/>
                    })
                }
            </div>
        </div>
    </>
}

export default Dialogs;