import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./reducers/dialogs-reducer";
import ThunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    dialogs: dialogsReducer
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;