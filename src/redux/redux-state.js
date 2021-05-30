import profilereduser from "./profilereduser"
import dialogsreduser from "./dialogsreduser"
import {createStore , combineReducers} from "redux"
import usersreduser from"./usersreduser"
let redusers = combineReducers({
    profilepage:profilereduser,
    dialogs:dialogsreduser,
    users:usersreduser,
})
let store = createStore(redusers)
export default store;