import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


let SomeComponent = () => <News/>

const App = (props) => {
  return (
    <div className='wrapper'>
      <HeaderContainer/>
      <Navbar/>
      <div className='content'>
        <Route exact path={'/dialogs'} render={() => <DialogsContainer/>}/>
        <Route exact path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
        <Route exact path={'/news'} component={SomeComponent}/>
        <Route exact path={'/music'} render={() => <Music/>}/>
        <Route exact path={'/setting'} render={() => <Setting/>}/>
        <Route exact path={'/users'} render={() =><UsersContainer/> }/>
        <Route exact path={'/login'} render={() =><Login/> }/>
      </div>
    </div>
  );
}

export default App;
