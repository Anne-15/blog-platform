import { createSlice } from "@reduxjs/toolkit";

interface UpdateProject {
  update: boolean;
}

const initialState: UpdateProject = {
  update: false,
};

export const projectSlice = createSlice({
  name: "projetcts",
  initialState,
  reducers: {
    toggleUpdate: (state, action) => {
      state.update = action.payload;
    },
  },
});

export const {toggleUpdate} = projectSlice.actions;
export const projects = projectSlice.reducer;
