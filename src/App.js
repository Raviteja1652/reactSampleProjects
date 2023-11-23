import ExpenseItem from "./Components/Expenses/ExpenseItem";
import './Components/Expenses/ExpenseItem.css'
import Card from "./Components/UI/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseFilter from "./Components/Expenses/ExpenseFilter";
import { useState } from "react";
const Dummy_Data = [
  { 
    id: 'e2', 
    amount: 799.49,
    title: 'New TV',  
    date: new Date(2021, 2, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Data)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => { return [expense, ...prevExpenses]})
  }
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <NewExpense onSubmittingExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {expenses.map((expense) => (
          <ExpenseItem 
            key={expense.id}
            expenseTitle={expense.title}
            expenseAmount={expense.amount}
            expenseDate={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default App;
