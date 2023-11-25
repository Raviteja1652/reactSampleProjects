import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem =(props) => {
    
    
    return (
        //<li>
            <Card className='expense-item'>
                <ExpenseDate expenseDate= { props.expenseDate }></ExpenseDate>
                <ExpenseDetails 
                    expenseTitle = { props.expenseTitle }
                    expenseAmount = { props.expenseAmount }
                />
            </Card>
        //</li>
    )
}

export default ExpenseItem




