import s from "./contact.module.css"
import React from "react"
import { NavLink } from "react-router-dom"
const Contact = (props) =>{
    return(
        <div className={`${s.contact}`}>
            <NavLink to={`/message/${props.id}`} activeClassName={`${s.contactactive}`}>{props.name}</NavLink>
        </div>
        ) 
}
export default Contact;