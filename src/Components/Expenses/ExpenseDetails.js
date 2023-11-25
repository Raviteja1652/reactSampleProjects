import './ExpenseItem.css'

const ExpenseDetails = (props) => {
    // const [expenseAmount, setexpenseAmount] = useState(props.expenseAmount)

    return (
    <div className='expense-item__description'>
        <h2>{ props.expenseTitle }</h2>
        <div className='expense-item__price'>₹{ props.expenseAmount }</div>
    </div>
    )
}

export default ExpenseDetails

        