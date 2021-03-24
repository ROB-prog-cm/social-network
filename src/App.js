import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';


let SomeComponent = () => <News/>

const App = (props) => {
  return (
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <div className='content'>
        <Route exact path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
        <Route exact path={'/profile'} render={() => <Profile updateNewPostText={props.updateNewPostText} profilePage={props.state.profilePage}
                                                              addPost={props.addPost}/>}/>
        <Route exact path={'/news'} component={SomeComponent}/>
        <Route exact path={'/music'} render={() => <Music/>}/>
        <Route exact path={'/setting'} render={() => <Setting/>}/>
      </div>
    </div>
  );
}

export default App;
