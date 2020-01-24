import React,{useState,useContext,useReducer,useRef,createContext} from "react"
import ListItems from "./ListItems"
import {ItemContext} from "./context"


const ShoppingList = () =>{
    const items = useContext(ItemContext)
    const input = useRef()
    console.log("items: " + items)
    const addItem = ()=>{
        items.addItem(input.current.value)
        input.current.value = ""
    }
    const hitEnter = (event)=>{
        console.log("pressed")
        const code = event.keyCode || event.which
        if(code===13){
            addItem()
        }
    }
    return(

            <div className="shopping-list-container">
                <h2>Shopping List</h2>
                <input onKeyPress={hitEnter}  ref={input} type="text"/>
                <button className="add-button" onClick={addItem} >Add New Item</button>
                {items.items.map(item=>(
                    <ListItems key={item.id} check={item.check} text={item.text}  id={item.id}/>
                ))}
                
            </div>

    )

}

export default ShoppingList;