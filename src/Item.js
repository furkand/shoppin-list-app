import React ,{useContext}from "react"

const Item = (props)=>{
    const item = props.item
    const context = useContext()
    return(
        
        <div key={item.id} className="list-item" >
            <input checked={item.completed} type="checkbox"/>
            <input type="text" defaultvalue={item.text}/>
            <button>Done</button>
        </div>
    )
}

export default Item