const addpost = "ADD-POST";
const addpostleter = "ADD-POST-LETER";
const remuvelastpost = "REMUVE-LAST-POST";
let defaultstate = {
    postsdata: [
      { message: "this is my first post!", likes: 3, id: 1, like: false, },
      { message: "lol, i like this app", likes: 24, id: 2, like: false, },
      { message: "nothing", likes: 5, id: 3, like: false, },
      { message: "this is my first second", likes: 679, id: 4, like: false, },
      { message: "this is my first last", likes: 4, id: 5, like: false, },
    ],
    textOfnonepost: "",
    userinfo: {
      nick: "miroslav",
      info: "gsuygf  ach lascd iauhjv lvlvaliuhdfva vilash jsahbcl kdsjhv vflabvkjabhv   alsdhjgasdb bflabf vbejhb dhdh gak fkhabsfd af bdafjkbf aksdjbf  fbdhsbfjsdfb fsdbfjsfdbjsdfsdjfhvsuv fhfhf fhjdhskdfahhl",
      iduser: 123454,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/telegram-3089462-2567414.png",
      bigfoto: "https://static9.depositphotos.com/1086145/1106/i/950/depositphotos_11067675-stock-photo-abstract-smudge-background-in-pastel.jpg"
    },
};
const profilereduser = (state = defaultstate, action)=>{
    switch(action.type){
    case addpost:{
      let copystate={...state}
      copystate.postsdata=[...state.postsdata]
      copystate.postsdata.push({
          message: state.textOfnonepost,
          id: state.postsdata.length,
          likes: 0,
          like: false,
        })
        copystate.textOfnonepost = "";
        return (copystate)
    } 
    case addpostleter:{
        if (action.leter !== null) {
          let copystate={...state}
          copystate.textOfnonepost += action.leter;
            return (copystate)
        }
        else {
          let copystate = {...state}
          copystate.textOfnonepost = "";
            return (copystate)
        }
    }
    case remuvelastpost:{
      let copystate = {...state}
      copystate.postsdata=[...state.postsdata]
      copystate.postsdata.pop()
      return (copystate)
    }
    default: return (state)
}
}
export const addpostcreator = () => ({ type: addpost })
export const addletercreator = (leter) => ({ type: addpostleter, leter: leter })
export const remuvepostcreatop = ()=> ({type:remuvelastpost})

export default profilereduser;