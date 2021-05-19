import "./ExpensesList.css";

import ExpenseItem from "../ExpenseItem";
import "../ExpenseItem.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="expenses-list__fallback">
        <p>No Expenses Found!</p>
      </div>
    );
  }

  if (props.items.length > 0) {
    return (
      <div>
        <li>
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              expenseDate={expense.date}
            />
          ))}
        </li>
      </div>
    );
  }
};

export default ExpensesList;
