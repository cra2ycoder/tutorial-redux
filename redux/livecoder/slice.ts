import { createSlice } from "@reduxjs/toolkit";

const liveCoderSlice = createSlice({
  name: "livecoder",
  initialState: {
    mode: "view",
    code: {}
  },
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload;
    },
    setHTML: (state, action) => {
      state.code.html = action.payload;
    },
    setCSS: (state, action) => {
      state.code.css = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    }
  }
});

export const { setHTML, setCSS, setMode, setCode } = liveCoderSlice.actions;
export default liveCoderSlice.reducer;
