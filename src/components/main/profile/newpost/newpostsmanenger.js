
import Newposts from "./newposts"
import {addpostcreator ,addletercreator,remuvepostcreatop} from "../../../../redux/profilereduser"
import { connect } from "react-redux";

let fucc =(dispatch)=>{
  return{
  addPosst:()=>{
    dispatch(addpostcreator())
  },
  onchange:(text)=>{
    dispatch(addletercreator(text))
  },
  remuvepost:()=>{
    dispatch(remuvepostcreatop())
  },
  }
}
let fuc =(state)=>{
  return{
    textOfnonepost:state.profilepage.textOfnonepost,
  }
}
const NewpostsMenenger = connect(fuc,fucc)(Newposts);
export default  NewpostsMenenger;