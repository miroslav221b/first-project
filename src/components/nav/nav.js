import React from "react";
import { NavLink } from "react-router-dom";
import s from './nav.module.css';
const Nawigation = ()=>{
   return(
    <nav className={`${s.block} navigation`}>
        <NavLink activeClassName={`${s.active}`} className={`${s.item} `}  to="/profile" >profile</NavLink>
        <NavLink activeClassName={`${s.active}`} className={`${s.item} `}  to="/message" >message</NavLink>
        <NavLink activeClassName={`${s.active}`} className={`${s.item} `}  to="/users" >users</NavLink>
        <NavLink activeClassName={`${s.active}`} className={`${s.item} `}  to="/music" >music</NavLink>
        <NavLink activeClassName={`${s.active}`} className={`${s.item} `}  to="/setings" >setings</NavLink>
    </nav>
    )
};
export default Nawigation;