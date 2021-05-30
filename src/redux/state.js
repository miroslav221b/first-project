import profilereduser from "./profilereduser"
import dialogsreduser from "./dialogsreduser"
let rerenderReact = () => { };
let store = {
  userdata:{
    profilepagedata: {
      postsdata: [
        { message: "this is my first post!", likes: 3, id: 1, like: false, },
        { message: "hi!", likes: 3, id: 2, like: false },
        { message: "lol", likes: 465, id: 3, like: false },
        { message: "hi! how are you?", likes: 5, id: 4, like: false }
      ],
      textOfnonepost: "",
      userinfo: {
        nick: "miroslav",
        info: "i dont vont to give this site info about me",
        iduser: 123454,
        avatar: "https://cdn.iconscout.com/icon/free/png-256/telegram-3089462-2567414.png",
        bigfoto: "https://static9.depositphotos.com/1086145/1106/i/950/depositphotos_11067675-stock-photo-abstract-smudge-background-in-pastel.jpg"
      },
    },
    dialogs: {
      contactsdata: [
        { name: "dmitii", id: 44, },
        { name: "pasha", id: 22, },
        { name: "antonio", id: 33, },
        { name: "romanio", id: 55, },
        { name: "goshaa", id: 88, }
      ],
      messagesdata: [
        { message: "text", mesid: 22, },
        { message: "hi!", mesid: 22, },
        { message: "lol", mesid: 44, },
        { message: "lool", mesid: 44, },
        { message: "loggl", mesid: 88, }
      ],
      textOfnoneMessage: "",
    },
  },
  getState() {
    return (this.userdata)
  },
  subscibe:(subscreber) => {
    rerenderReact = subscreber
  },
  dispatch(action) {
    this.userdata.profilepagedata = profilereduser(this.userdata.profilepagedata,action);
    this.userdata.dialogs=dialogsreduser(this.userdata.dialogs,action)
    rerenderReact(this.userdata)
  }
};

export default store;