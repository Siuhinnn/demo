import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Card } from "@mui/material";

import ExpensesContent from "static/ExpensesContent";

import { ExpensesContainer } from "./style";

export default function AddExpensesForm() {
  const ctx = useContext(ExpensesContent);
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
      amount: "",
      date: "",
    },
  });

  const onSubmit = (data) => {
    const { title, amount, date } = data;
    ctx.onInputSubmit({
      id: Math.random().toString(),
      title: title,
      amount: +amount,
      date: new Date(date),
    });
    reset();
  };

  const onError = () => {
    alert("Please fill in all data.");
  };

  return (
    <ExpensesContainer>
      <Card variant="outlined" className="addExpensesCard">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="addExpensesForm"
        >
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <TextField label="Title" {...field} />}
          />
          <Controller
            name="amount"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Amount"
                type="number"
                InputProps={{ inputProps: { min: 0.01, step: 0.01 } }}
                {...field}
              />
            )}
          />
          <Controller
            name="date"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Date"
                type="date"
                InputProps={{
                  inputProps: { max: "2022-12-31", min: "2019-01-01" },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                {...field}
              />
            )}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Card>
    </ExpensesContainer>
  );
}
