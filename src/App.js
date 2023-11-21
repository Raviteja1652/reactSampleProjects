import ExpenseItem from "./Components/Expenses/ExpenseItem";
import './Components/Expenses/ExpenseItem.css'
import Card from "./Components/UI/Card";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Chennai'
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12), 
      location: 'Banglore'
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Hyderabad'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Pune'
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Card className="expenses">
        <ExpenseItem 
          expenseDate = { expenses[0].date }
          expenseTitle = { expenses[0].title }
          expenseAmount = { expenses[0].amount }
          expenseLocation = { expenses[0].location }
        />
        <ExpenseItem 
          expenseDate = { expenses[1].date }
          expenseTitle = { expenses[1].title }
          expenseAmount = { expenses[1].amount }
          expenseLocation = { expenses[1].location }
        ></ExpenseItem>
        <ExpenseItem 
          expenseDate = { expenses[2].date }
          expenseTitle = { expenses[2].title }
          expenseAmount = { expenses[2].amount }
          expenseLocation = { expenses[2].location }
        ></ExpenseItem>
        <ExpenseItem 
          expenseDate = { expenses[3].date }
          expenseTitle = { expenses[3].title }
          expenseAmount = { expenses[3].amount }
          expenseLocation = { expenses[3].location }
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default App;
