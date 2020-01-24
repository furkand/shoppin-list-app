import React,{useReducer,createContext,useEffect} from "react"

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
    switch(action.type){
       case "addItem":{
           return{
               items: [
                   ...state.items,
                   {
                    id:Date.now(),
                    text: action.payload,
                    check: false
                }
               ]
            }
       }
       case "deleteItem":{
           return{
               items:state.items.filter(item => item.id!==action.payload)
           }
       }
       case "reset":{
           return action.payload
       }
       case "check":{
        return {items: state.items.map(item =>{
            if(item.id===action.payload){
                return {
                    ...item,
                    check : !item.check
                }
            }else{
                return item
            }
        })}
    }
       
       default:{
           return state
       }
    }
}
const ItemProvider = (props) =>{

    console.log("initial state: " + typeof(initialState.items))
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        const raw = localStorage.getItem('data');
        dispatch({ type: 'reset', payload: raw ? JSON.parse(raw) : initialState });
    },[])
    useEffect(
        () => {
          localStorage.setItem('data', JSON.stringify(state));
        },
        [state]
      );
    function deleteItem(id){
        dispatch({type:"deleteItem",payload:id})
    }
    function addItem(text){
        dispatch({type:"addItem",payload:text})
    }
    function check(id){
        dispatch({type:"check",payload:id})
    }
    console.log("items which inside of the state: " + state)
    return (<ItemContext.Provider value={{items:state.items,deleteItem,addItem,check}} {...props}/>)
    
}

export {ItemContext, ItemProvider}