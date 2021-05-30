
const addmessage = "ADD-MESSAGE";
const addmessageleter = "ADD-MESSAGE-LETER";
let defaultstate = {
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
};
const dialogsreduser = (state = defaultstate,action)=>{
    switch(action.type){
        case addmessage:{
            let copystate = {...state}
            copystate.messagesdata=[...state.messagesdata]
            copystate.messagesdata.push({
              message: state.textOfnoneMessage,
              mesid:state.messagesdata.length,
            })
            copystate.textOfnoneMessage = "";
            return(copystate)
          }
        case addmessageleter : {
            if (action.leter !== null) {
              let copystate = {...state}
              copystate.textOfnoneMessage += action.leter;
                return(copystate)
            }
            else {
              let copystate = {...state}
              copystate.textOfnoneMessage = "";
                return(copystate)
            }
          }
          default:return(state)
    }
}
export const addmessagecreator = () => ({ type: addmessage })
export const addletermessagecreator = (leter) => ({ type: addmessageleter, leter: leter })
export default dialogsreduser;