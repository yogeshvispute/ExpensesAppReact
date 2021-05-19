import Card from "../UI/Card";
import React, { useState } from "react";

import "../Expenses/Expenses.css";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setSelectedFilter] = useState("2021");

  const onYearFilterSelect = (selectedyear) => {
    setSelectedFilter(selectedyear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYearFilter={onYearFilterSelect}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ul>
          <ExpensesList items={filteredExpenses} />
        </ul>
      </Card>
    </div>
  );
};

export default Expenses;
