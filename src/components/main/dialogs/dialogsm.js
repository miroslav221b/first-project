import React from "react";
import ChatContainer from "./chat/chatcontainer";
import ContactsConteiner from "./contacts/contactsconteiner";
import s from "./dialogsm.module.css"
const Dialogs = (props) => {
    return (
        <div className={`${s.block}`}> 
            <ContactsConteiner/>
            <ChatContainer/>
        </div>
    )
}
export default Dialogs;