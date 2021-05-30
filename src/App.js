import './App.css';
import Header from './components/head/head.js';
import Nawigation from './components/nav/nav';
import Profile from './components/main/profile/mainc';
import Futer from './components/futer/futer';
import Dialogs from './components/main/dialogs/dialogsm';
import {  Route } from 'react-router-dom';
import Music from './components/main/music/music';
import Setings from './components/main/setings/setings';
import UsersContainer from './components/main/news/userscontainer';
import Profilecontainer from './components/main/profile/profileContainer';
function App(props) {
  return (
      <div className="app"> 
        <Header />
        <Nawigation />
        <div className="main">
          <Route path="/profile" render={()=><Profilecontainer />}/>
          <Route path="/message" render={()=><Dialogs/>} />
          <Route path="/users" render={()=><UsersContainer/>} />
          <Route path="/music" render={()=><Music/>} />
          <Route path="/setings" render={()=><Setings/>} />
        </div>
        <Futer />
      </div>
  );
}

export default App;
