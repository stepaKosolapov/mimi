import Dialogs from "./Dialogs";
import {compose} from "redux";
import {connect} from "react-redux";
import {selectDialogs} from "state/selectors/dialogs-selectors";
import {useContext} from "react";
import AuthContext from "../../../context/AuthContext";

const DialogsContainer = (props) => {
    const {user} = useContext(AuthContext);
    return <Dialogs dialogs={props.dialogs} hostId={user.user_id}/>;
}

const mapStateToProps = (state) => ({
    dialogs: selectDialogs(state)
})

export default compose(
    connect(mapStateToProps, {}),
)(DialogsContainer);