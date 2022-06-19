import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./expensesSlice";

export default configureStore({
  reducer: {
    expenses: expensesSlice,
  },
  //allow to store non-serializable value in redux
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
