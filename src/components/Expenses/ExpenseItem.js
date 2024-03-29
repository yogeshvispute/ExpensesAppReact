import React from "react";

import "../Expenses/ExpenseItem.css";

import ExpenseDate from "../Expenses/ExpenseDate";

import Card from "../UI/Card";

const ExpenseItem = (props) => {
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
