
import axios from "axios";
import React from "react";
import Profile from "./mainc";
class Profilecontainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(data => {
            
        })
    }
    render(){
        return(
        <Profile
        bigfoto={null}
        avatar={null}
        nick={"props.nick"}
        info={"props.info"}/>
        )
    }
}
export default Profilecontainer;