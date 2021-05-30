import { connect } from "react-redux";
import Contacts from "./contacts";
const f1=(state)=>{
    return{
        contacts:state.dialogs.contactsdata
    }
}
const f2=(dispach)=>{
    return{
    }
}
const ContactsConteiner = connect(f1,f2)(Contacts);
export default ContactsConteiner;