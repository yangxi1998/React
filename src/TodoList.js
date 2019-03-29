import React, { Component } from 'react';
import store from './store/index'; 
class TodoList extends Component {
    constructor(){
        super();
        this.state={
            list:store.getState().todo.list  //合并之后  //之前list:store.getState().list
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().todo.list //合并之后  //之前list:store.getState().list
            })
        })
    }
    handleAdd=(e)=>{
     if(e.keyCode===13){
        store.dispatch({
            type:'add_item',
            value:e.target.value
        })
        e.target.value='';
     }
    }
    handleDel=(e)=>{  //删除
        console.log(e.target.value);
        store.dispatch({
            type:'del_item',
            delValue:e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleAdd}/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>{item} <button value={index} style={{fontSize:"10px",borderRadius:"2px"}} onClick={this.handleDel}>删除</button></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;
