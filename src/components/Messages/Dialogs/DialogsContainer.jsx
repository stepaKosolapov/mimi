import Dialogs from "./Dialogs";
import {compose} from "redux";
import {connect} from "react-redux";
import {selectDialogs} from "state/selectors/dialogs-selectors";

const DialogsContainer = (props) => {
    return <Dialogs dialogs={props.dialogs} hostId={1}/>;
}

const mapStateToProps = (state) => ({
    dialogs: selectDialogs(state)
})

export default compose(
    connect(mapStateToProps, {})
)(DialogsContainer);