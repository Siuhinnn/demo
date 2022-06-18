import { Typography } from "@mui/material";

import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  if (props.data.length === 0) {
    return (
      <ul className="listStyle">
        <Typography variant="h2">No Expense Found.</Typography>
      </ul>
    );
  }
  return (
    <ul className="listStyle">
      {props.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
