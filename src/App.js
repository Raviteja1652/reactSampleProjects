import './Components/Expenses/ExpenseItem.css'
import Card from "./Components/UI/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseFilter from "./Components/Expenses/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./Components/Expenses/ExpensesList";
import ExpensesChart from './Components/Expenses/ExpensesChart';
const Dummy_Data = [
  { 
    id: 'e1', 
    amount: 980,
    title: 'Shoes',  
    date: new Date(2022, 4, 16),
  },
  { 
    id: 'e2', 
    amount: 799.49,
    title: 'New TV',  
    date: new Date(2021, 2, 12),
  },
  { 
    id: 'e3', 
    amount: 400,
    title: 'Kitchen Accessories',  
    date: new Date(2019, 6, 16),
  },
  { 
    id: 'e4', 
    amount: 700,
    title: 'Powerbank',  
    date: new Date(2022, 1, 23),
  },
  { 
    id: 'e5', 
    amount: 390,
    title: 'Wooden Table',  
    date: new Date(2022, 7, 19),
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

  const filteredExpenses = expenses.filter((expense) => (
    expense.date.getFullYear().toString() === filteredYear
  ))
  

  return (
    <div>
      <NewExpense onSubmittingExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesChart requiredExpenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default App;
