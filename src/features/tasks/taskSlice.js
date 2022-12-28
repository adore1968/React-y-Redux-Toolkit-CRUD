import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = [
  { title: "I fucking", description: "hate you", id: uuid() },
  { title: "I fucking", description: "love you", id: uuid() },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTasks = [...state, action.payload];
      return newTasks;
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const editTasks = state.map((task) => {
        if (task.id === id) {
          return { ...task, title, description };
        }
        return task;
      });
      return editTasks;
    },
    deleteTask: (state, action) => {
      const filterTasks = state.filter((task) => task.id !== action.payload);
      return filterTasks;
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
