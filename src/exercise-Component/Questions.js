import React from 'react'
import './FaqStyle.css';

export default function Questions(props) {
    const [buttonText , setButtonText] = React.useState(false)
    

    return (
    <div>
        <div className='question'>
            <h4>{props.question}</h4>
            <button onClick={() =>setButtonText(!buttonText)}>{!buttonText ? 'Show': 'Hide'}</button>
        </div>
        {buttonText && <p className='answer'>{props.answer}</p>}
    </div>
  )
}
