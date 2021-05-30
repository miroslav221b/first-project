let follow = "FOLLOW";
let unfollow = "UNFOLLOW";
let geturtusers = "GET-USERS";
let setactivepage ="SET-ACTIVE-PAGE";
let setpages="SET-PAGES";
let chengereload="CHENGE-RELOAD";
let defaultstate = {
    allusers:[],
    pages:[],
    activapage:1,
    usersononepage:10,
    reload:false,
}
const usersreduser = (state = defaultstate, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                allusers: state.allusers.map((e) => {
                    if (e.id == action.userid) {
                        return { ...e, followed: true };
                    }
                    return e;
                })
        }
        case unfollow:{
            return {
                ...state,
                allusers:state.allusers.map((e)=>{
                    if(e.id==action.userid){
                        return{...e,followed:false}
                    }
                    return e
                })
            }
        }
        case geturtusers:{
            let copystate = {...state};
            copystate.allusers=[ ...action.users]
        return copystate   
        }  
        case setactivepage:{
            let statecopy={...state}
            statecopy.activapage=action.newactivepage
            return(statecopy)
        }   
        case setpages:{
            let statecopy = {...state};
            statecopy.pages=[]
            for(let i = 1; i<=Math.ceil( action.totalcount/state.usersononepage);i++){
                statecopy.pages.push(i)
            }
            return statecopy
        }
        case chengereload:{
           let  copystate = {...state}
           state.reload?copystate.reload=false:copystate.reload=true
           return(copystate)
        }
        default: return state
    }
};

export const followac = (userid) => ({ type: follow, userid: userid });
export  const unfollowac = (userid) => ({ type: unfollow, userid: userid });
export  const getusers = (users) => ({ type: geturtusers, users: users });
export  const setactivepageAC = (newactivepage) => ({ type: setactivepage,newactivepage});
export  const setpagesAC = (totalcount) => ({ type: setpages,totalcount});
export  const reloadAC = () => ({ type: chengereload});

export default usersreduser;