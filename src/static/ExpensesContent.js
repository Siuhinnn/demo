import React, { useState } from "react";

const ExpensesContent = React.createContext({
  expenses: [],
  onInputSubmit: () => {},
  onDelete: () => {},
  onEdit: () => {},
  onSort: () => {},
});

const DUMMY = [
  {
    id: "e1",
    title: "Breakfast",
    amount: 54.12,
    date: new Date(2022, 1, 14),
  },
  {
    id: "e2",
    title: "Car",
    amount: 9000.4,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Book",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Dinner",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export function ContentProvider(props) {
  const [expenses, setExpenses] = useState(DUMMY);

  function submitDataHandler(data) {
    setExpenses((prev) => {
      return [data, ...prev];
    });
  }

  function deleteHandler(id) {
    setExpenses((prev) => {
      return prev.filter((expense) => expense.id !== id);
    });
  }

  function editHandler(editId, data) {
    setExpenses((prev) => {
      const index = prev.findIndex((expense) => expense.id === editId);
      prev[index] = data;
      return prev;
    });
  }

  function sortHandler(sortField, sortOrder) {
    if (sortField === "date") {
      const sort = [...expenses].sort((a, b) => {
        return (a.date - b.date) * (sortOrder === "asc" ? 1 : -1);
      });
      setExpenses(sort);
    } else if (sortField) {
      const sort = [...expenses].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setExpenses(sort);
    }
  }

  return (
    <ExpensesContent.Provider
      value={{
        onInputSubmit: submitDataHandler,
        expenses: expenses,
        onDelete: deleteHandler,
        onEdit: editHandler,
        onSort: sortHandler,
      }}
    >
      {props.children}
    </ExpensesContent.Provider>
  );
}

export default ExpensesContent;
