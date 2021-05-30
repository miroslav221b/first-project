import React from "react";
import s from "./somepost.module.css"
const Somepost = (props) => {
  const dolike =function(){
    alert("lol")
  }
  return (
    <div className={`${s.post}`}>
      <div className={`${s.logo}`}>
        <img src={`${props.avatar}`}></img>
      </div>
      <div className={`${s.message}`}>
        {props.message}
      </div>
      <button className={`${s.like}`} onClick={dolike}>
        like {props.likes} 
      </button>
    </div>
  )
}
export default Somepost;