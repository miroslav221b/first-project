import React from "react";
import s from "./chat.module.css"
import p from "../dialogsm.module.css"
import Message from "./message/message";
import {addmessagecreator,addletermessagecreator} from"../../../../redux/dialogsreduser"
const Chat = (props) => {

    let addMessage=()=>{
        props.addMessage()
    }

    const newmessageletter=(e)=>{
        props.newmessageletter(e.nativeEvent.data)
    }
    let finallmessages = props.messagesdata.map(el=>( <Message mes={`${el.message}`}/>))
    return (
        <div className={`${p.chat} ${s.block}`}>
            {finallmessages}
            <div className={s.messagesbilder}>
            <textarea onChange={newmessageletter} value={props.textOfnoneMessage}></textarea>
            <button onClick={addMessage}>add message</button>
            </div>
        </div>
        
    )
}
export default Chat;