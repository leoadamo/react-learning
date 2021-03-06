import React, { useState } from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = ({ onSaveExpense, onCancelExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleAmountChange = ({ target }) => {
    setAmount(target.value);
  };

  const handleDateChange = ({ target }) => {
    setDate(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) return;

    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    // Sending data to parent
    onSaveExpense(expenseData);

    // Reseting input fields
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={handleDateChange}
          />
        </div>
      </div>

      <div className="new-expense__actions ">
        <button type="button" onClick={onCancelExpense}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
