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
    delete_todo(state, action){
      state.list = state.list.filter(el => el.id !== action.payload)
    },
    change_status(state, action){
      const target_item = state.list.find(el => el.id === action.payload);
      target_item.completed = !target_item.completed
    },
    delete_all_todos(state){
      state.list = []
    }
  }
});

export const { add_todo, delete_todo, change_status, delete_all_todos } = todoSlice.actions;
export default todoSlice.reducer;