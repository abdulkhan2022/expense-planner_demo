import React from 'react'
// import './exercise-Component/Item-List/FaqStyle.css';


export default function ItemList(props) {
  return (
    <div className='individualItem' key={props.key}>
        <p>{props.item}</p>
        <button onClick={() => props.deleteButton(props.item)}>Delete</button>       
    </div>
  )
}
