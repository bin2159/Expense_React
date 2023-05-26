import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expense={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpenseHandler(expense)
    }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense