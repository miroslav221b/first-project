import React from "react"
import Avatarfoto from "./avatarfoto/afoto";
import Bigfoto from "./bigfoto/bigfoto";
import Biometrick from "./biometrick/bio";
import Nickname from "./nick/nick";
const Profileinfo = (props)=>{
    return(
        <>
        <Bigfoto bigfoto={props.bigfoto}/>
        <Avatarfoto avatar={props.avatar}/>
        <Nickname nick={props.nick}/>
        <Biometrick info={props.info}/>
        </>
    )
}
export default Profileinfo;