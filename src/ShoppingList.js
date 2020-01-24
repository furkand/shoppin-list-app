import React,{useState,useContext,useReducer,useRef,createContext} from "react"
import ListItems from "./ListItems"
import {ItemContext} from "./context"


const ShoppingList = () =>{
    const items = useContext(ItemContext)
    console.log("items: " + items)

    return(

            <div className="shopping-list-container">
                <h2>Shopping List</h2>
                <input type="text"/>
                <button onClick={()=>{items.addItem("some text")}} >Add New Item</button>
                <ListItems />
            </div>

    )

}

export default ShoppingList;