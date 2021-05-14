import { createSlice } from "@reduxjs/toolkit";

/**
 * @description
 * creating the redux state object for a particular component
 */
const counterSlice = createSlice({
  // name of the slice
  name: "counter",

  // initial state object
  initialState: {
    counter: 10
  },

  // set of action reducers where we will use at specific events
  reducers: {
    doIncrement: (state, action) => {
      state.counter += 1;
    },
    doDecrement: (state, action) => {
      state.counter -= 1;
    },
    doMultiply: (state, action) => {
      state.counter *= action.payload;
    }
  }
});

/**
 * @description
 * exporting slice state object for easy importing/usage
 */

// exporting the actions
export const { doIncrement, doDecrement, doMultiply } = counterSlice.actions;

// export the main reducer to append with redux Store
export default counterSlice.reducer;
