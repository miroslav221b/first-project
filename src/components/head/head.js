import React from "react";
import s from './head.module.css';
const Header = ()=>{
   return(
    <div className={`${s.block} header`}>
       <div className={`${s.logo}`}>logo</div>
    </div>
    )
};
export default Header;