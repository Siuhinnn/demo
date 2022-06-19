import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./expensesSlice";

export default configureStore({
  reducer: {
    expenses: expensesSlice,
  },
  preloadedState: {
    expenses: [
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
    ],
  },
  //allow to store non-serializable value in redux
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
