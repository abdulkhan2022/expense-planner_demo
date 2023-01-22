import React from "react";
import { appContext } from "../../App";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const {expenses} = React.useContext(appContext)
  
  return (
    <ul className="list-group">
      {expenses.map((expense) => {
        return <ExpenseItem name={expense.name} id={expense.id} cost={expense.cost}/>
      })}
    </ul>
  );
}
