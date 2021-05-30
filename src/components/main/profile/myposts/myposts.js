import p from "./myposts.module.css";
import s from "../mainc.module.css";
import React from "react";
import Somepost from "./post/somepost";
const Myposts=(props)=>{
 

  let finalarr = props.postsdata.map((el)=>{
    return(<Somepost message={`${el.message}`} likes={`${el.likes}`} avatar={`${props.avatar}`}/>)
  })
    return(
        <div className={`${s.posts} ${p.block}`}>
         {finalarr}
        </div>
    )
}
export default Myposts;