import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      const newTask = { ...task, id: uuid() };
      dispatch(addTask(newTask));
      setTask({ title: "", description: "" });
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      const foundTask = tasks.find((task) => task.id === params.id);
      setTask(foundTask);
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-gray-800 p-5 container max-w-xs"
      >
        <label className="text-white text-lg mb-0.5">Task:</label>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={handleChange}
          className="bg-gray-500 text-white rounded p-1 mb-5"
        />
        <label className="text-white text-lg mb-0.5">Description:</label>
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
          className="bg-gray-500 text-white resize-none p-1 mb-5"
        ></textarea>
        <div>
          <button
            type="submit"
            className="text-white bg-purple-500 inline-block py-1 px-2 rounded hover:bg-purple-800 transition-colors"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
