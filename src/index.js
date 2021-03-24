import './index.css';
import state from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from "./redux/state";
import {rerenderEntireTree} from './render'


rerenderEntireTree(state);


reportWebVitals();
