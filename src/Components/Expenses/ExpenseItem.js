import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem =(props) => {
    const clickHandler = () => {
        console.log('Clicked')
    }
    
    return (
    <Card className='expense-item'>
        <ExpenseDate expenseDate= { props.expenseDate }></ExpenseDate>
        <ExpenseDetails 
            expenseTitle = { props.expenseTitle }
            expenseAmount = { props.expenseAmount }
            expenseLocation = { props.expenseLocation } 
        />
        <button onClick={ clickHandler }>Change Title</button>
    </Card>
    )
}

export default ExpenseItem




