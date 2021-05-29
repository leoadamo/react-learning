import React from 'react';

import './NewExpense.css';

import Card from '../UI/Card/Card';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const onSaveExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      <NewExpenseForm onSaveExpense={onSaveExpenseHandler} />
    </Card>
  );
};

export default NewExpense;
