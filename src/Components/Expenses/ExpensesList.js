import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
    let listOfExpenses = props.items.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
          expenseDate={expense.date}
        />
    ))

    if (props.items.length <= 1){
        if(props.items.length === 1){
            return (
                <>
                {listOfExpenses}
                <h3 className="expenses-list__fallback_single"> Only single Expense here. Please add more... </h3>
                </>
            )
        }
        return <h3 className="expenses-list__fallback"> -- No Expenses found! -- </h3>
    }

    return (
        <ul className="expenses-list">
            {listOfExpenses}
        </ul>
    )
}

export default ExpensesList;