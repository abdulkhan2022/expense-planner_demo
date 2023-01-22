import React, {useContext} from 'react'
import { appContext } from '../../App'

export default function ExpenseTotal() {
  const {expenses} = useContext(appContext)
  const totalExpenses = expenses.reduce((totalExpense , item)=>{
    return totalExpense + item.cost;
  }, 0)    

  return (
    <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>ExpenseTotal: €{totalExpenses}</div>
  )
}
