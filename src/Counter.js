import React, { Component } from 'react';
import store from './store/index'; //  ./store  后面index可以不写，默认就是找index
//action是一个对象，描述state的变化
//store连接action和Reducer的一个对象
//Reducer定义了如何响应action描述的state的变化
class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter //合并过后  // 合并之前num:store.getState() //提供 getState( ) 方法获取 state
        }
        //通过 subscribe(listener) 注册监听器  store里面的state一变，就会触发回调函数
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter //合并过后  // 合并之前num:store.getState()
            })
        })
    }
    handleAdd=()=>{
        let action={type:'ADD',value:1};//action
        store.dispatch(action);  //提供 dispatch(action) 方法更新 state
        //console.log(store.getState());
    }
    handleDec=()=>{
        let action={type:'DEC'};
        store.dispatch(action);  //提供 dispatch(action) 方法更新 state
       // console.log(store.getState());
    }
    handleOdd=()=>{
     // console.log(store.getState());
     if (store.getState().counter % 2 !== 0) {  //如果是奇数的时候增加
        let action={type:'ADD',value:1};
        store.dispatch(action);
     }
    }
    handleAsync=()=>{
        setTimeout(function () {  //异步执行
            store.dispatch({type:'ADD',value:1})
          }, 1000)
    }
    render() {
        return (
            <div>
                Clicked: <span>{this.state.num}</span> times
                <br/>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleDec}>-</button>
                <br/>
                <button onClick={this.handleOdd}>Increment if odd</button>
                <button onClick={this.handleAsync}>Increment async</button>
            </div>
        );
    }
}

export default Counter;
