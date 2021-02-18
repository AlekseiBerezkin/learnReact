import { combineReducers, createStore } from "redux";

import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./profile-reducer"

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer
    });

let store=createStore(reducers);

export default store;