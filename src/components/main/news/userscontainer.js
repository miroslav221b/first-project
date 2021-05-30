import { connect } from "react-redux";
import Users from "./users";
import{ followac,  unfollowac ,getusers, setactivepageAC, setpagesAC , reloadAC} from"../../../redux/usersreduser"
const f1=(state)=>{
    return{
        users:state.users.allusers,
        activapage:state.users.activapage,
        pages:state.users.pages,
        usersononepage:state.users.usersononepage,
        reload:state.users.reload,
    }
}
const UsersContainer = connect(f1,{
    folow:followac,
    unfollow:unfollowac,
    getusers:getusers,
    setnewactivepage:setactivepageAC,
    setpages:setpagesAC,
    changerel:reloadAC,
})(Users);
export default UsersContainer;