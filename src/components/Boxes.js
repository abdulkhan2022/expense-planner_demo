import React from "react"
export default function Boxes(props) {
    const styles ={ backgroundColor: props.on ? "black" :"#555555"}
    return (
        <div 
        className="box" 
        onClick={() => props.buttonClicked(props.id)} 
        style={styles}></div>
    )
}