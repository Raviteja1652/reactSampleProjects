import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem =(props) => {
    
    
    return (
    <Card className='expense-item'>
        <ExpenseDate expenseDate= { props.expenseDate }></ExpenseDate>
        <ExpenseDetails 
            expenseTitle = { props.expenseTitle }
            expenseAmount = { props.expenseAmount }
            expenseLocation = { props.expenseLocation } 
        />
        
    </Card>
    )
}

export default ExpenseItem




