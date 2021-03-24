import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost,updateNewPostText} from "./redux/state";


export let rerenderEntireTree= (state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter> <App state={state} updateNewPostText={updateNewPostText}  addPost={addPost}/></BrowserRouter>
    </React.StrictMode>, document.getElementById('root'));
}

