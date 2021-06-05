import React from 'react';

import './ExpensesList.css';

import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpensesList = ({ expenses }) => {
  return (
    <ul className="expenses-list">
      {expenses.length ? (
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      ) : (
        <h2 className="expenses-list__fallback">
          There aren't expenses to list.
        </h2>
      )}
    </ul>
  );
};

export default ExpensesList;
