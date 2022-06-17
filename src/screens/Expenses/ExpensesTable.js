import { useContext, useState } from "react";
import InputContext from "../../Context/InputContext";
import Editable from "./Editable";
import ReadOnly from "./ReadOnly";

import { TableStyle } from "./style";

export default function AllExpensesTable() {
  const ctx = useContext(InputContext);
  const [editId, setEditId] = useState(null);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  function deleteHandler(e) {
    ctx.onDelete(e.target.name);
    console.log(ctx.expenses);
  }
  function editHandler(e) {
    setEditId(e.target.name);
  }

  function cancelHandler() {
    setEditId(null);
  }

  function editFormSubmitHandler(e) {
    e.preventDefault();
    const data = {
      id: editId,
      title: e.target.title.value,
      amount: e.target.amount.value,
      date: new Date(e.target.date.value),
    };
    ctx.onEdit(editId, data);
    setEditId(null);
  }

  function sortHandler(e) {
    const sortOrder =
      e.target.id === sortField && order === "asc" ? "desc" : "asc";
    setSortField(e.target.id);
    setOrder(sortOrder);
    ctx.onSort(e.target.id, sortOrder);
  }

  return (
    <form onSubmit={editFormSubmitHandler}>
      <TableStyle>
        <tbody>
          <tr>
            <th id="date" onClick={sortHandler}>
              Date
            </th>
            <th id="title" onClick={sortHandler}>
              Title
            </th>
            <th id="amount" onClick={sortHandler}>
              Amount
            </th>
          </tr>
          {ctx.expenses.map((expense, index) => {
            const date = (
              <>
                {expense.date.toLocaleString("en-US", { month: "long" })}
                <h3>
                  {expense.date.toLocaleString("en-US", { day: "2-digit" })}
                </h3>
                {expense.date.getFullYear()}
              </>
            );
            return (
              <tr key={index}>
                {editId === expense.id ? (
                  <Editable
                    expense={expense}
                    cancelHandler={cancelHandler}
                    deleteHandler={deleteHandler}
                  />
                ) : (
                  <ReadOnly
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
      </TableStyle>
    </form>
  );
}
