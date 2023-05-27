import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandler(expense);
  };
  const startEditingHandler=()=>{
    setIsEditing(true)
  }
  const stopEditingHandle=()=>{
    setIsEditing(false)
  }
  return (
    <div className="new-expense">
        {!isEditing&&<button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandle} />}
    </div>
  );
};

export default NewExpense;
