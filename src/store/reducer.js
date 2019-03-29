
// export default(state=0/*原来的state*/,action/*操作*/)=>{  //返回一个新的state
//    switch(action.type){
//      case 'ADD':
//         return state+action.value;
//      case 'DEC':
//         return state -1;
//      default:
//         return state;
//    }
// }
// export default (state=initValue,action)=>{
//     switch(action.type){
//         case 'add_item':
//            let newState=JSON.parse(JSON.stringify(state));//使用JSON.parse(),JSON.stringify()对对象的深拷贝
//       //第二种    let obj=Object.assign({},state,{a:100});  //用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
//            newState.list.push(action.value);    
//            return newState;
//         default :
//            return state;

//     }
// }
/*·······counter和todo合并过后······ */
import {combineReducers} from 'redux';
let initValue={
    list:[1,2,3]
}
let counter=(state=0/*原来的state*/,action/*操作*/)=>{  //返回一个新的state
       switch(action.type){
         case 'ADD':
            return state+action.value;
         case 'DEC':
            return state -1;
         default:
            return state;
       }
    }
let todo=(state=initValue,action)=>{
    let newState=JSON.parse(JSON.stringify(state));//使用JSON.parse(),JSON.stringify()对对象的深拷贝
    //第二种    let obj=Object.assign({},state,{a:100});  //用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
        switch(action.type){
            case 'add_item':
               newState.list.push(action.value);    
               return newState;
            case 'del_item':
               newState.list.splice(action.delValue,1);
               return newState;
            default :
               return state;
    
        }
    }
export default combineReducers({
    counter,todo
})
