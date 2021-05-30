import s from "../../mainc.module.css";
import p from "./afoto.module.css";
import React from "react";
const Avatarfoto = (props) =>{
    return(
        <div className={`${s.avatar} ${p.block}`}>
            <img src={`${props.avatar}`}></img>
        </div>
    )
}
export default Avatarfoto;