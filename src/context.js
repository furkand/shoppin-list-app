import React,{useReducer,createContext} from "react"

const initialState={
    items:[]
}

const ItemContext = createContext({
    items: [],
    deleteItem: (id)=>{},
    addItem :(text) =>{},
    check: (id)=>{}
})


const reducer = (state,action)=>{
    console.log(state)
    console.log(action.payload)
    console.log(action.type)
    switch(action.type){
       case "addItem":{
           return[
               ...state.items,
               {
                   id:Date.now(),
                   text: action.payload,
                   check: false
               }
           ]
       }
       case "deleteItem":{
           return[
            state.items.filter(item => item.id!==action.payload)
           ]
       }
       case "check":{
        return state.items.map(item =>{
            if(item.id===action.payload){
                return {
                    ...item,
                    check : !item.check
                }
            }
            return item
        })
    }
       
       default:
       break;
    }
}
const ItemProvider = (props) =>{
    const [state,dispatch] = useReducer(reducer,initialState)
    function deleteItem(id){
        dispatch({type:"deleteItem",payload:id})
    }
    function addItem(text){
        dispatch({type:"addItem",payload:text})
    }
    function check(id){
        dispatch({type:"chech",payload:id})
    }
    console.log("state: " + state.items)
    
    
    return (<ItemContext.Provider value={{items:state.items,deleteItem,addItem,check}} {...props}/>)
    
}

export {ItemContext, ItemProvider}