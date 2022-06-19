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
        amount: 102.12,
        date: new Date(2022, 1, 14),
        latlng: { lat: 22.3113315728684, lng: 113.92444610595705 },
      },
      {
        id: "e2",
        title: "Watch",
        amount: 300.4,
        date: new Date(2022, 2, 12),
        latlng: { lat: 22.391983666602798, lng: 113.98658752441408 },
      },
      {
        id: "e3",
        title: "Book",
        amount: 294.67,
        date: new Date(2021, 2, 28),
        latlng: { lat: 22.3547752289644, lng: 114.09452818566935 },
      },
      {
        id: "e4",
        title: "Dinner",
        amount: 450,
        date: new Date(2021, 5, 12),
        latlng: { lat: 22.310315220777195, lng: 114.17349241906778 },
      },
    ],
  },
  //allow to store non-serializable value in redux, eg. date
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
