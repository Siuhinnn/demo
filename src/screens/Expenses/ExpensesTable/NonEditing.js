import { Button } from "@mui/material";

export default function NonEditing({
  expense,
  deleteHandler,
  editHandler,
  date,
}) {
  return (
    <>
      <td>{date}</td>
      <td>{expense.title}</td>
      <td>{expense.amount}</td>
      <td width="10%">
        <Button
          type="button"
          name={expense.id}
          onClick={editHandler}
          variant="contained"
        >
          Edit
        </Button>
      </td>
      <td width="10%">
        <Button
          type="button"
          name={expense.id}
          onClick={deleteHandler}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </td>
    </>
  );
}
