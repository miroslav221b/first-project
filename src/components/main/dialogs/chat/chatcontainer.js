import {addmessagecreator,addletermessagecreator} from"../../../../redux/dialogsreduser"
import { connect } from "react-redux";
import Chat from "./chat";
const infomessagedatacontainer = (state)=>{
    return{
        messagesdata:state.dialogs.messagesdata,
        textOfnoneMessage:state.dialogs.textOfnoneMessage,
    }
}
const f2 = (dispatch)=>{
    return{
        addMessage:()=>{
            dispatch(addmessagecreator())
        },
        newmessageletter:(text)=>{
            dispatch(addletermessagecreator(text))
            
        }
    }
}
const ChatContainer = connect(infomessagedatacontainer,f2)(Chat)
export default ChatContainer;