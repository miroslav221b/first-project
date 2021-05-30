import { connect } from "react-redux";
import Myposts from "./myposts";
const f1 = (state)=>{
    return{
      postsdata:state.profilepage.postsdata,
      avatar:state.profilepage.userinfo.avatar
    }
}
const f2 = (dispatch)=>{
  return{

  }
}
const MypostsContainer = connect(f1,f2)(Myposts);
export default MypostsContainer;