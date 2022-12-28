import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <Link to={`/create-task/${task.id}`}>Edit</Link>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
