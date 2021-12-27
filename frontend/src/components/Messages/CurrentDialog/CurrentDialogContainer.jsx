import {compose} from "redux";
import {connect} from "react-redux";
import {selectCurrentDialog} from "state/selectors/dialogs-selectors";
import {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import CurrentDialog from "./CurrentDialog";
import {getCurrentDialog, sendMessage} from "state/reducers/dialogs-reducer";
import AuthContext from "context/AuthContext";

const CurrentDialogContainer = ({currentDialog:{messages, dialogInfo}, getCurrentDialog, sendMessage, ...props}) => {
    let {userId} = useParams();
    let {user:{user_id:hostId}} = useContext(AuthContext);
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
            hostId={hostId}/>
}

const mapStateToProps = (state) => ({
    currentDialog: selectCurrentDialog(state)
})

export default compose(
    connect(mapStateToProps, {getCurrentDialog, sendMessage}),
)(CurrentDialogContainer);