import s from "../../mainc.module.css";
import p from "./nick.module.css";
import React from "react";
const Nickname = (props) =>{
    return(
        <div className={`${s.nick} ${p.block}`}>{props.nick}</div>
    )
}
export default Nickname;