import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Card, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
// import { useContext } from "react";

// import ExpensesContent from "static/ExpensesContent";
import { addExpense } from "redux/expensesSlice";

import { ExpensesContainer } from "./style";

export default function AddExpensesForm() {
  // const ctx = useContext(ExpensesContent);
  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
      amount: "",
      date: "",
    },
  });

  const onSubmit = (data) => {
    const { title, amount, date } = data;
    dispatch(
      addExpense({
        id: Math.random().toString(),
        title: title,
        amount: +amount,
        date: new Date(date),
      })
    );
    // ctx.onInputSubmit({
    //   id: Math.random().toString(),
    //   title: title,
    //   amount: +amount,
    //   date: new Date(date),
    // });
    reset();
  };

  const onError = () => {
    alert("Please fill in all data.");
  };

  return (
    <ExpensesContainer>
      <Card variant="outlined" className="addExpensesCard">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Grid container className="formGrid">
            <Grid item sm={3} xs={12}>
              <Controller
                name="title"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <TextField label="Title" {...field} />}
              />
            </Grid>
            <Grid item sm={3} xs={12}>
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
            </Grid>
            <Grid item sm={3} xs={12}>
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
            </Grid>
            <Grid item sm={3} xs={12}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </ExpensesContainer>
  );
}
