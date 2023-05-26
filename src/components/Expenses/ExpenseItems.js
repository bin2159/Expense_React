import "./ExpenseItems.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Cards from "../UI/Cards";
const ExpenseItems = (props) => {
  const [amount,setAmount]=useState(props.amount)

  const clickHandler=()=>{
    setAmount(amount+100)

  }
  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={amount}
        location={props.location}
      />
      <button onClick={clickHandler}>Delete</button>
    </Cards>
  );
};

export default ExpenseItems;
