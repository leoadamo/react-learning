import React, { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card/Card';

import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart/ExpensesChart';
import ExpensesList from './ExpensesList/ExpensesList';

const Expenses = ({ expenses }) => {
  // Here I'd changed the default value to 'all' and added to the select element as the default selected option
  const [pickedYear, setPickedYear] = useState('all');

  const filteredExpenses = expenses
    //Sorting by asc dates
    .sort((first, second) => first.date - second.date)
    // Filtering expenses using the picked year that was selected by the user
    .filter(({ date }) => {
      if (pickedYear === 'all') return expenses;

      let expenseFullYear = date.getFullYear().toString();
      return expenseFullYear === pickedYear;
    });

  const onFilterHandler = (year) => {
    setPickedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter picked={pickedYear} onFilter={onFilterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
