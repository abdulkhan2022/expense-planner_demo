import React from 'react'
import { appContext } from '../../App'
import EditBudget from './EditBudget'
import ViewBudget from './ViewBudget'


export default function Budget() {
    const {budget,dispatch} = React.useContext(appContext)
    const [isEditable , setEditable] = React.useState(false)
    const handleSaveClick = ()=>{
      setEditable((prev)=>{
        return !prev
      })
    }
    const handleEditClick = ()=>{
      setEditable((prev)=>{
        return !prev
      })
    }

    
  return (
    <div class='alert alert-primary p-3 d-flex align-items-center justify-content-between'>
      {isEditable ? (<EditBudget budget={ budget} handleSaveClick={handleSaveClick}/>) :
      (<ViewBudget handleEditClick={handleEditClick} budget={budget}/>)}
    </div>
  )
}

