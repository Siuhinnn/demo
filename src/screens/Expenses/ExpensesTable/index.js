// import { useContext } from "react";
import { useState } from "react";
import { Card, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { deleteExpense, editExpense, sortExpenses } from "redux/expensesSlice";
// import ExpensesContent from "static/ExpensesContent";

import Editing from "./Editing";
import NonEditing from "./NonEditing";
import { ExpensesContainer } from "../style";

export default function ExpensesTable() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.expenses);
  // const ctx = useContext(ExpensesContent);
  const [editId, setEditId] = useState(null);
  const [field, setField] = useState("");
  const [order, setOrder] = useState("asc");

  function deleteHandler(e) {
    // ctx.onDelete(e.target.name);
    dispatch(deleteExpense(e.target.name));
  }
  function editHandler(e) {
    setEditId(e.target.name);
  }

  function cancelHandler() {
    setEditId(null);
  }

  function sortHandler(e) {
    const sortOrder =
      e.currentTarget.id === field && order === "asc" ? "desc" : "asc";
    const sortField = e.currentTarget.id;
    setField(e.currentTarget.id);
    setOrder(sortOrder);
    dispatch(sortExpenses({ sortField, sortOrder }));
    // ctx.onSort(sortField, sortOrder);
  }

  function editFormSubmitHandler(e) {
    e.preventDefault();
    const data = {
      id: editId,
      title: e.target.title.value,
      amount: +e.target.amount.value,
      date: new Date(e.target.date.value),
    };
    dispatch(editExpense({ editId, data }));
    // const data = {
    //   id: editId,
    //   title: e.target.title.value,
    //   amount: e.target.amount.value,
    //   date: new Date(e.target.date.value),
    // };
    // ctx.onEdit(editId, data);
    setEditId(null);
  }

  return (
    <ExpensesContainer margin="20px 0 0 0">
      <form onSubmit={editFormSubmitHandler}>
        <table className="expensesTable">
          <tbody>
            <tr>
              <th id="date" onClick={sortHandler}>
                <Typography variant="h2">Date</Typography>
              </th>
              <th id="title" onClick={sortHandler}>
                <Typography variant="h2">Title</Typography>
              </th>
              <th id="amount" onClick={sortHandler}>
                <Typography variant="h2">Amount</Typography>
              </th>
            </tr>
            {data.map((expense, index) => {
              const date = (
                <Card variant="outlined" className="dateCard">
                  {expense.date.toLocaleString("en-US", { month: "long" })}
                  <Typography variant="h3">
                    {expense.date.toLocaleString("en-US", { day: "2-digit" })}
                  </Typography>
                  {expense.date.getFullYear()}
                </Card>
              );
              return (
                <tr key={index}>
                  {editId === expense.id ? (
                    <Editing
                      expense={expense}
                      cancelHandler={cancelHandler}
                      deleteHandler={deleteHandler}
                    />
                  ) : (
                    <NonEditing
                      expense={expense}
                      date={date}
                      deleteHandler={deleteHandler}
                      editHandler={editHandler}
                    />
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </ExpensesContainer>
  );
}
