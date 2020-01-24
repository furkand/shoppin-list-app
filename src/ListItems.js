import React ,{useContext,useReducer,useRef}from "react"
import {ItemContext} from "./context"
import Checkbox from '@material-ui/core/Checkbox';


const ListItems = ({id,text,check})=>{
    const item = useContext(ItemContext);
    return(
        <div className="list-items">
            <div className="single-item" style={{textDecoration: check ? 'line-through' : 'none'}}>{text}</div>
            <label className="myCheckbox">
            <Checkbox color="secondary" type="checkbox" checked={check} onChange={()=>item.check(id)}/>
            </label>
            <button className="delete" onClick={()=>item.deleteItem(id)}>Delete</button>
        </div>
        
    )
}

export default ListItems;