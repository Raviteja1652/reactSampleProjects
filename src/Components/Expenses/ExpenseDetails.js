import './ExpenseItem.css'
import { useState } from 'react';

const ExpenseDetails = (props) => {
    const [expenseAmount, setexpenseAmount] = useState(props.expenseAmount)

    const clickHandler = () => {
        setexpenseAmount('100')
        console.log('Clicked')
    }

    return (
    <div className='expense-item__description'>
        <h2>{ props.expenseTitle }</h2>
        <div>LocationOfExpenditure: { props.expenseLocation }</div>
        <div className='expense-item__price'>₹{ expenseAmount }</div>
        <button onClick={ clickHandler }>Change Title</button>
    </div>
    )
}

export default ExpenseDetails

        