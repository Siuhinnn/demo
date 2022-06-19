import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    deleteExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },
    editExpense: (state, action) => {
        const index = state.findIndex(
        (expense) => expense.id === action.payload.editId
      );
      state[index] = action.payload.data;
      return state;
    },
    sortExpenses: (state, action) => {
        console.log(state);
      if (action.payload.sortField === "date") {
        const sorted = state.sort((a, b) => {
          return (
            (a.date - b.date) * (action.payload.sortOrder === "asc" ? 1 : -1)
          );
        });
        state = sorted;
      } else {
        const sorted = state.sort((a, b) => {
          return (
            a[action.payload.sortField]
              .toString()
              .localeCompare(b[action.payload.sortField].toString(), "en", {
                numeric: true,
              }) * (action.payload.sortOrder === "asc" ? 1 : -1)
          );
        });
        state = sorted;
      }
    },
  },
});

export const { addExpense, deleteExpense, editExpense, sortExpenses } =
  expensesSlice.actions;

export default expensesSlice.reducer;
