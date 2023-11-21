import './ExpenseItem.css'


const ExpenseDetails = (props) => {
    return (
    <div className='expense-item__description'>
        <h2>{ props.expenseTitle }</h2>
        <div>LocationOfExpenditure: { props.expenseLocation }</div>
        <div className='expense-item__price'>₹{ props.expenseAmount }</div>
    </div>
    )
}

export default ExpenseDetails

        