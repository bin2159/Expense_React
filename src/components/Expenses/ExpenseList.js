import ExpenseItems from "./ExpenseItems";
import './ExpenseList.css'
const ExpenseList = (props) => {
    if(props.items.length===0){
        return (<h2 className="expense-list__fallback">No Expense Found</h2>)
    }

  return (
    <ul className="expense-list">
        {props.items.map((expense) => (
        <ExpenseItems
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
      ))}
    </ul>
  )
}

export default ExpenseList