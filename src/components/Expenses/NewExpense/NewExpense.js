import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseFormSubmitHandler = (capturedFormExpense) => {
    const expense = {
      ...capturedFormExpense,
      id: Math.random().toString(),
    };
    props.onNewExpenseSave(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseForm={expenseFormSubmitHandler} />
    </div>
  );
};

export default NewExpense;
