import React from 'react';
import './ExpenseItem.css';

import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

const ExpenseItem = ({ expense }) => {
  const { title, amount, date } = expense;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />

        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
