import s from "../../mainc.module.css";
import p from "./bio.module.css";
import React from "react";
const Biometrick = (props) =>{
    return(
        <div className={`${s.bio} ${p.block}`}>
                <div>{props.info}</div>
        </div>
    )
}
export default Biometrick;