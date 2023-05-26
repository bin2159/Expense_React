import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Cards from "../UI/Cards";
const ExpenseItems = (props) => {
  const clickHandler=()=>{
    console.log('clicked')
  }
  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={clickHandler}>Delete</button>
    </Cards>
  );
};

export default ExpenseItems;
