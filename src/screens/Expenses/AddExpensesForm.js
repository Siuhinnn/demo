import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

import { ExpensesContainer } from "./style";

export default function AddExpensesForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      amount: "",
      date: "",
      type: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = () => {
    alert("Please fill in all the data");
  };

  return (
    <ExpensesContainer>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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
          render={({ field }) => <TextField label="Amount" {...field} />}
        />
        <Controller
          name="date"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              {...field}
            />
          )}
        />
        <Controller
          name="type"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select label="Type" {...field}>
                <MenuItem value="food">Food</MenuItem>
                <MenuItem value="transport">Transport</MenuItem>
                <MenuItem value="entertainment">Entertainment</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </ExpensesContainer>
  );
}
