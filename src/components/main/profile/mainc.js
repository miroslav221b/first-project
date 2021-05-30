import React from "react";
import s from './mainc.module.css';
import MypostsContainer from "./myposts/mypostscontainer.js";
import NewpostsMenenger from "./newpost/newpostsmanenger";
import Profileinfo from "./userinfo/profileinfo.js";
const Profile = (props) => {
    return (
        <div className={`${s.block}`}>
            <Profileinfo
             bigfoto={props.bigfoto}
             avatar={props.avatar}
             nick={props.nick}
             info={props.info}/>
            <NewpostsMenenger />
           <MypostsContainer />
        </div>
    )
};
export default Profile;