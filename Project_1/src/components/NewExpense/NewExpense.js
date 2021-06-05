import React, { useState } from 'react';

import './NewExpense.css';

import Card from '../UI/Card/Card';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  // This useState will control when the form should be rendered
  const [isFormVisible, setIsFormVisible] = useState(false);

  // This handler set the state of isFormVisible to true
  const onClickToAddExpense = () => {
    setIsFormVisible(true);
  };

  // This handler is passed down to child as a prop called "onCalcelExpense",
  // that will be fired in the child when the user cancel the action of adding a new expense
  const onClickToCancelExpense = () => {
    setIsFormVisible(false);
  };

  const onSaveExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);

    // When save a new expense, the form should be hidden
    setIsFormVisible(false);
  };

  return (
    <Card className="new-expense">
      {isFormVisible ? (
        <NewExpenseForm
          onSaveExpense={onSaveExpenseHandler}
          onCancelExpense={onClickToCancelExpense}
        />
      ) : (
        <button type="button" onClick={onClickToAddExpense}>
          Add New Expense
        </button>
      )}
    </Card>
  );
};

export default NewExpense;
