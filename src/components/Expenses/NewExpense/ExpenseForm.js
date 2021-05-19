import React, { useState } from "react";

import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, SetEnteredTitle] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");
  const [enteredDate, SetEnteredDate] = useState("");

  const [addClicked, SetAddClicked] = useState(false);

  const onSubmitExpense = (event) => {
    event.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSubmitExpenseForm(expense);
    SetEnteredTitle("");
    SetEnteredAmount("");
    SetEnteredDate("");
    if (expense.title && expense.amount && expense.date) {
      SetAddClicked(false);
    }
  };

  const toogleExpenseHandler = (event) => {
    addClicked ? SetAddClicked(false) : SetAddClicked(true);
  };

  const onTitleChanged = (event) => {
    SetEnteredTitle(event.target.value);
  };

  const onAmountChanged = (event) => {
    SetEnteredAmount(event.target.value);
  };

  const onDateChanged = (event) => {
    SetEnteredDate(event.target.value);
  };

  if (addClicked) {
    return (
      <div>
        <form onSubmit={onSubmitExpense}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={onTitleChanged}
              />
            </div>
            <div className="new-expense__control">
              <label>amount</label>
              <input
                type="number"
                value={enteredAmount}
                onChange={onAmountChanged}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2050-01-01"
                value={enteredDate}
                onChange={onDateChanged}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense form</button>
          </div>
        </form>
        <div className="new-expense__controls">
          <button onClick={toogleExpenseHandler}>Cancel</button>
        </div>
      </div>
    );
  }

  if (addClicked === false) {
    return (
      <div className="new-expense__actions">
        <button onClick={toogleExpenseHandler}>Add Expense</button>
      </div>
    );
  }
}

export default ExpenseForm;
