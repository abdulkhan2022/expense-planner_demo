import React, {useContext} from 'react'
import { appContext } from '../../App'

export default function RemainingBudget() {
      const {budget ,expenses} = useContext(appContext)
      
      const sumOfAllItems = expenses.reduce((total,expense)=>{
      return total + expense.cost;
      
    },0)
  const alertType = budget> sumOfAllItems ? 'alert-success' : 'alert-danger'
  return (
    <div class={`alert ${alertType} p-3 d-flex align-items-center justify-content-between`}>RemainingBudget: €{budget - sumOfAllItems}</div>
  )
}
