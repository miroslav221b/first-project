import React from "react"
import { NavLink } from "react-router-dom"
import s from "../news.module.css"
import p from "./user.module.css"
const User = (props) => {
    return (
        <div className={`${s.user} ${p.block}`} >
            <div className={`${p.img}`}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.avatar} />
                </NavLink>
            </div>

            <div className={`${p.nickname}`}>               
                    {props.nick}                
            </div>

            <div className={`${p.status}`}>
                {props.status}
            </div>
            
            <button className={`${p.fbotton}`} onClick={() => { props.followed === "true" ? props.unfollow(props.id) : props.folow(props.id) }}>
                {props.followed === "true" ? "unfollow" : "follow"}
            </button>
        </div>
    )
}
export default User;