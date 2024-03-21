import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import axios from "axios";

export interface Employee {
  name: string;
  position: string;
}

export interface EmployeeWithId extends Employee {
  id: string;
}

export interface EmployeeState {
  updateState: boolean;
  loading: boolean;
  employeeList: EmployeeWithId[];
  error: string;
  response: string;
}

const employeeState: EmployeeState = {
  updateState: false,
  loading: false,
  employeeList: [],
  error: "",
  response: "",
};

export const fetchEmployee = createAsyncThunk(
  "employee/fetchEmployee",
  async () => {
    const response = await axios.get("http://localhost:8000/api/items");
    return response.data.response;
  }
);

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (data: Employee) => {
    const response = await axios.post("http://localhost:8000/api/items", {
      name: data.name,
      position: data.position,
    });
    return response.data.response;
  }
);

export const removeEmployee = createAsyncThunk(
  "employee/removeEmployee",
  async (data: Employee) => {
    const response = await axios.delete(
      `http://localhost:8000/api/items/${data}`
    );
    return response.data.response;
  }
);

export const modifiedEmployee = createAsyncThunk(
  "employee/modifiedEmployee",
  async (data: EmployeeWithId) => {
    const response = await axios.put(
      `http://localhost:8000/api/items/${data.id}`,
      {
        name: data.name,
        position: data.position,
      }
    );
    return response.data.response;
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: employeeState,
  reducers: {
    changeStateTrue: (state: EmployeeState) => {
      state.updateState = true;
    },
    changeStateFalse: (state: EmployeeState) => {
      state.updateState = false;
    },
    clearResponse: (state: EmployeeState) => {
      state.response = "";
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<EmployeeState>) => {
    builder
      .addCase(addEmployee.pending, (state: EmployeeState) => {
        state.loading = true;
      })
      .addCase(
        addEmployee.fulfilled,
        (state: EmployeeState, action: PayloadAction<Employee>) => {
          state.loading = false;
          state.employeeList.push(action.payload);
          state.response = "add";
        }
      )
      .addCase(
        addEmployee.rejected,
        (state: EmployeeState, action: PayloadAction<Employee>) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );

    builder
      .addCase(
        fetchEmployee.fulfilled,
        (state: EmployeeState, action: PayloadAction<EmployeeWithId>) => {
          state.employeeList = action.payload;
        }
      )
      .addCase(
        fetchEmployee.rejected,
        (state: EmployeeState, action: PayloadAction<EmployeeWithId>) => {
          state.error = action.error.message;
        }
      );

    builder.addCase(
      removeEmployee.fulfilled,
      (state: EmployeeState, action: PayloadAction<EmployeeWithId>) => {
        state.employeeList = state.employeeList.filter(
          (item) => item.id != action.payload
        );
        state.response = "delete";
      }
    );

    builder.addCase(
      modifiedEmployee.fulfilled,
      (state: EmployeeState, action: PayloadAction<EmployeeWithId>) => {
        const updateItem = action.payload;
        console.log(updateItem);
        const index = state.employeeList.findIndex(
          (item) => item.id === updateItem.id
        );
        if (index !== -1) {
          state.employeeList[index] = updateItem;
        }
        state.response = "update";
      }
    );
  },
});

export default employeeSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  employeeSlice.actions;
