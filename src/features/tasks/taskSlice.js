import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = [
  { title: "I fucking", description: "hate you", id: uuid() },
  { title: "I fucking", description: "love you", id: uuid() },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
