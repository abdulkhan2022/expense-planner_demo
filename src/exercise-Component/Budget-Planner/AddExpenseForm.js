import React , { useState, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { appContext } from '../../App'

export default function AddExpenseForm() {
    const { dispatch } = useContext(appContext) 
    const [name, setName] = useState('') 
    const [cost, setCost] = useState('') 

    const submitHandle = (event)=>{
        event.preventDefault()

        const expense = {
            id: uuidv4(),
            name: name,
            cost:parseInt(cost)
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })

        setName('')
        setCost('')
    }
    return (
    <form onSubmit={submitHandle}>
        <div className='row'>
            <div className='col-sm col-lg-4'>
                <label for='name'>Name</label>
                <input
                    required
                    type='text'
                    id='name'
                    placeholder='Name of Item'
                    className = 'form-control'
                    value={name}
                    onChange={(event) =>{setName(event.target.value)}}
                    />
            </div>
            <div className='col-sm col-lg-4'>
                <label for='cost'>Cost</label>
                <input 
                    type='number'
                    required
                    id='cost'
                    placeholder='Cost of Item'
                    className = 'form-control'
                    value={cost}
                    onChange={(event) =>{setCost(event.target.value)}}
                />
            </div>
            <div className='col-sm col-lg-4'>
                <button className='btn btn-primary my-4'>Add</button>
            </div>
        </div>
    </form>
    )
}
