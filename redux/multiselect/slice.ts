import { createSlice } from "@reduxjs/toolkit";

export const multiSelector = createSlice({
  name: "multiselector",
  initialState: {
    searchKey: "",
    selectedItemList: ["Phython", "Java"]
  },
  reducers: {
    setActiveList: (state, action) => {
      state.selectedItemList = action.payload;
    },
    addItem: (state, action) => {},
    removeItem: (state, action) => {
      state.selectedItemList.splice(
        state.selectedItemList.indexOf(action.payload),
        1
      );
    },
    clearSearchKey: (state, action) => {
      state.searchKey = "";
    },
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    }
  }
});

export const {
  addItem,
  removeItem,
  setActiveList,
  clearSearchKey,
  setSearchKey
} = multiSelector.actions;
export default multiSelector.reducer;
