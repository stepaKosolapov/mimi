import {compose} from "redux";
import {connect} from "react-redux";
import {selectCurrentDialog} from "state/selectors/dialogs-selectors";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import CurrentDialog from "./CurrentDialog";
import {getCurrentDialog, sendMessage} from "state/reducers/dialogs-reducer";

const CurrentDialogContainer = ({currentDialog:{messages, dialogInfo}, getCurrentDialog, sendMessage, ...props}) => {
    let {userId} = useParams();
    useEffect(()=>{
        getCurrentDialog(userId);
    }, [getCurrentDialog, userId]);
    
    let handleSendMessage = (id, text) => {
        sendMessage(id, text);
    }
    
    return !(userId !== undefined && dialogInfo && messages) ? <></> :
        <CurrentDialog
            dialogInfo={dialogInfo}
            messages={messages}
            sendMessage={handleSendMessage}
            hostId={1}/>
}

const mapStateToProps = (state) => ({
    currentDialog: selectCurrentDialog(state)
})

export default compose(
    connect(mapStateToProps, {getCurrentDialog, sendMessage}),
)(CurrentDialogContainer);