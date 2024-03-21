import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../feature/employeeSlice";

const store = configureStore({
  reducer: {
    employeeKey: employeeSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
