import Cards from "./components/UI/Cards";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const addExpenseHandler=(enpensedata)=>{
    console.log(enpensedata)
  }
 
 

  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      location: "New York",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      location: "India",
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      location: "Berlin",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      location: "Saudi",
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <Cards className="App">
      <h2>Lets get started</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expense}/>
    </Cards>
  );
};

export default App;
