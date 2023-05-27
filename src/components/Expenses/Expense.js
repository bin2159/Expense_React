import React, { useState } from 'react';

import ExpenseItems from './ExpenseItems';
import Card from '../UI/Cards';
import ExpenseFilter from './ExpenseFilter';
import './Expense.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.items.filter((expense)=>expense.date.getFullYear().toString()===filteredYear)
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map((expense) => (
        <ExpenseItems
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
      ))}
      </Card>
    </div>
  );
};

export default Expenses;