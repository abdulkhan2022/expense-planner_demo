import React from "react";
import ItemList from "./ItemList";
import { useEffect } from "react";


export default function Item(){
    const [items, setItem] = React.useState([])

    const submitForm = (event)=>{
        event.preventDefault()
        const data = [...items, event.target.nameOfItem.value]
        setItem(data)
        event.target.reset()

        localStorage.setItem('items', JSON.stringify(items));
    }
    
    const deleteButtonHandle = (itemToRemove)=>{
        const newItems = items.filter((item)=>{
            return item !== itemToRemove;
        })
        console.log("here is newItems Data: " + newItems)
        setItem(newItems)
        console.log("here is setItems Data: " + newItems)
    }

    
    return(
        
        <div className="itemList">
            <h5>SHOPPING CART</h5>
            <form onSubmit={submitForm}>
                <input name='nameOfItem' type='text' placeholder="Add your List now" required />
                <button>Submit Now</button>
            </form>
            <ul>
            {items.map((item,index)=>{return<ItemList item={item} key={index} deleteButton={deleteButtonHandle}/>})}
            </ul>
        </div>
    )
}