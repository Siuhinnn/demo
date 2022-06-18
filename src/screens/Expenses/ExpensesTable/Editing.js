import { Button, TextField } from "@mui/material";

export default function Editing({ expense, cancelHandler, deleteHandler }) {
  return (
    <>
      <td>
        <TextField
          name="date"
          type="date"
          InputProps={{
            inputProps: { max: "2022-12-31", min: "2019-01-01" },
          }}
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue={expense.date.toLocaleDateString("en-CA")}
        />
      </td>
      <td>
        <TextField name="title" type="text" defaultValue={expense.title} />
      </td>
      <td>
        <TextField
          name="amount"
          type="number"
          InputProps={{ inputProps: { min: 0.01, step: 0.01 } }}
          defaultValue={expense.amount}
        />
      </td>
      <td width="10%">
        <div>
          <Button type="button" name={expense.id} onClick={cancelHandler}>
            Cancel
          </Button>
          <Button type="submit" name={expense.id} variant="contained">
            Submit
          </Button>
        </div>
      </td>
      <td>
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
