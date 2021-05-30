import s from "../../mainc.module.css";
import p from "./bigfoto.module.css";
import React from "react";
const Bigfoto = (props) =>{
    return(
        <div className={`${s.photo} ${p.block}`}>
            <img src={`${props.bigfoto}`}></img>
        </div>
    )
}
export default Bigfoto;