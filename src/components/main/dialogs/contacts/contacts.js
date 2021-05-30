import React from "react";
import s from "./contacts.module.css"
import p from "../dialogsm.module.css"
import Contact from "./contact/contact";
const Contacts = (props) => {
   
    let finalcontacts=props.contacts.map((el)=>(<Contact name={`${el.name}`} id={`${el.id}`}/>))
    return (
        <div className={`${s.block}${p.allcontacts}`}>
            <div className={`${s.allcontacts}`}>
              {finalcontacts}
            </div>
        </div>
    )
}
export default Contacts;