import p from "./newposts.module.css";
import s from "../mainc.module.css";
import React from "react";
const Newposts=(props)=>{
  let addPosst = () =>{
      props.addPosst()
  }
  let onchange = (event)=>{
    props.onchange(event.nativeEvent.data)
  }
  let remuvepost =()=>{
    props.remuvepost()
  }
    return(
      <div className={`${s.newpost} ${p.block}`}>
        <div className={`${p.header}`}>create post</div>

      <textarea  className={`${p.texta}`} value={props.textOfnonepost} onChange={onchange}/>

      <button  onClick={addPosst} className={`${p.btnSubmit} ${p.btn}`}>add post</button>
       <button className={`${p.btnDelete} ${p.btn}`} onClick={remuvepost}>remuve last post</button> 
      </div>
    )
}
export default  Newposts;