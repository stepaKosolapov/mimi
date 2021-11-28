import Dialogs from "./Dialogs";
import {compose} from "redux";
import {connect} from "react-redux";
import {getCurrentMessages, getDialogsInfo} from "state/selectors/dialogs-selectors";
import {getMessages} from "state/reducers/dialogs-reducer";

const DialogsContainer = (props) => {
    console.log(props);
    return <Dialogs dialogsInfo={props.dialogsInfo}/>;
}

const mapStateToProps = (state) => ({
    currentMessages: getCurrentMessages(state),
    dialogsInfo: getDialogsInfo(state)
})

export default compose(
    connect(mapStateToProps, {getMessages})
)(DialogsContainer);