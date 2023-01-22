// import './App.css';
// import './exercise-Component/FaqStyle.css';
import React from "react";
import "./exercise-Component/Budget-Planner/budget-planner.css";
import Faq from "./exercise-Component/Faq";
import Item from "./exercise-Component/Item List/Item";
import "bootstrap/dist/css/bootstrap.min.css";
// import { AppProvider } from './context/AppContext';
import Budget from "./exercise-Component/Budget-Planner/Budget.js";
import ExpenseTotal from "./exercise-Component/Budget-Planner/ExpenseTotal.js";
import ExpenseList from "./exercise-Component/Budget-Planner/ExpenseList.js";
import AddExpenseForm from "./exercise-Component/Budget-Planner/AddExpenseForm.js";
import RemainingBudget from "./exercise-Component/Budget-Planner/RemainingBudget.js";

const initialState = {
  budget: 500,
  remainingBudget: 500,
  // totalExpenseBudget:0,
  expenses: [
    { id: 1, name: "English Book", cost: 20 },
    { id: 2, name: "Black Board", cost: 50 },
    { id: 3, name: "Black Pen", cost: 40 },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "EXPENSE_TOTAL":
      return {
        ...state,
        totalExpenseBudget: action.payload,
      };
    case "REMAINING_BUDGET":
      return {
        ...state,
        remainingBudget: action.payload,
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case 'EDIT_BUDGET':
      return {
        ...state,
        budget : action.payload
      }
    default:
      return state;
  }
};

export const appContext = React.createContext();

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <appContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        remainingBudget: state.remainingBudget,
        totalExpenseBudget: state.totalExpenseBudget,
        dispatch,
      }}
    >
      <>
        {/* <div className='app'>
      <h1>This is my Project Area.</h1>
      <div className='projects'>
        <Faq />
        <Item />
      </div>
    </div> */}

        {/* This is My Budget Planner Project Area. */}
        <div className="container">
          <h1 className="mt-3">My Budget Planner</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <Budget />
            </div>
            <div className="col-sm">
              <RemainingBudget />
            </div>
            <div className="col-sm">
              <ExpenseTotal />
            </div>
          </div>
          <h3 className="mt-3">Expenses</h3>
          <div className="row ">
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>
          <h3 className="mt-3">Add Expense</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <AddExpenseForm />
            </div>
          </div>
          <p className="text-center fw-bold m-5">
            Design and Developed by Abdul Rahman Khan.
          </p>
        </div>
      </>
    </appContext.Provider>
  );
}

export default App;
