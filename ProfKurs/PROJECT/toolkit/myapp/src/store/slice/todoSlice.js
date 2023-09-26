import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add_todo(state, action){
      state.list.push(action.payload)
    },
    delete_todo(state, action) {
        state.list = state.list.filter(el => el.id !== action.payload)
    }
  }
});

export const { add_todo, delete_todo } = todoSlice.actions;
export default todoSlice.reducer;