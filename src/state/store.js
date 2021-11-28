import {combineReducers, createStore} from "redux";
import dialogsReducer from "./reducers/dialogs-reducer";

const reducers = combineReducers({
    dialogs: dialogsReducer
});

const store = createStore(reducers);

export default store;