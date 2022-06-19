import { useState } from "react";
import { useSelector } from "react-redux";
// import { useContext } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
// import ExpensesContent from "static/ExpensesContent";

import { SummaryContainer } from "./style";

export default function ExpensesSummary() {
  const [filteredYear, setFilteredYear] = useState("2022");
  // const ctx = useContext(ExpensesContent);
  const data = useSelector((state) => state.expenses);

  const filterHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = data.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <SummaryContainer>
      <ExpensesFilter onFilterChange={filterHandler} />
      <ExpensesChart data={filteredExpenses} />
      <ExpensesList data={filteredExpenses} />
    </SummaryContainer>
  );
}
