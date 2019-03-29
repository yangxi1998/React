import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import CustomLink from './containers/CustomLink' //高阶组件以及源码
//import AuthExample from './Auth/AuthExample'  //登录注册的逻辑
//import { BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import Counter from './Counter';
import TodoList from './TodoList'
ReactDOM.render(
    <div style={{padding:30}}>
       <Counter/> 
       <TodoList/>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// Learn more about service workers: http://bit.ly/CRA-PWA

 