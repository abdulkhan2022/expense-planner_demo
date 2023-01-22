import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti';
import 'bootstrap/dist/css/bootstrap.min.css';
import { appContext } from '../../App';

export default function ExpenseItem(props) {
    const {dispatch} = useContext(appContext)
    const deleteHandle = (e)=>{
        console.log('Delete Button is Woeking Fine')
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }
    return (
    <li className='list-group-item d-flex justify-content-between align-items-center '>
			{props.name}
			<div>
				<span className='alert alert-primary p-1 m-0'>£{props.cost}</span>
				<TiDelete size='1.5em' onClick={deleteHandle}/>
			</div>
		</li>
  )  
}
