import React from "react"
import Boxes from './Boxes';
import Forms from "./Forms";

export default function Main() {
    
    const [allBoxes , updatedBoxes] = React.useState([
        {
            id: 1,
            on: true
        },   
        {
            id: 2,
            on: false
        },   
        {
            id: 3,
            on: true
        },   
        {
            id: 4,
            on: true
        },   
        {
            id: 5,
            on: false
        },   
        {
            id: 6,
            on: false
        },   
    ])

    
    function buttonClicked(id){
        console.log(id)
        updatedBoxes( prevData=> {
            return prevData.map(individualData => {
                return individualData.id === id ? {...individualData , on: !individualData.on} : individualData
            })
        })

    }

    const boxes = allBoxes.map((box) => <Boxes 
    buttonClicked={buttonClicked}
    on={box.on}
    id={box.id}
    /> )    

    return(
        <div className="main">
        {boxes}
        <Forms />
        </div>
    )
}
