import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import counterReducer from "./reducers/counter.js"
import {Provider} from 'react-redux'; //connects our global state to our app that is it


const Mystore = createStore(counterReducer);


ReactDOM.render(
<Provider store = {Mystore}>

   <App/>

</Provider>
 ,

document.getElementById('root'));


