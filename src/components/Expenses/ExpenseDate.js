import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day =new Date (props.date).getDate();
  const year = new Date(props.date).getFullYear();
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>
      </div>
  )
}

export default ExpenseDate