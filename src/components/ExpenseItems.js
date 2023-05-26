import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItems = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
    </div>
  );
};

export default ExpenseItems;
