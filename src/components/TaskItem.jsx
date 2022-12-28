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
    <div className="flex bg-gray-800 p-5 mb-5 mr-5 rounded w-full sm:max-w-xs">
      <div className="mr-10">
        <h4 className="text-lg mb-1">{task.title}</h4>
        <p className="text-lg">{task.description}</p>
      </div>
      <div>
        <Link
          to={`/create-task/${task.id}`}
          className="text-lg bg-gray-500 py-1 px-2.5 rounded mr-2 inline-block hover:bg-gray-600 transition-colors"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDelete(task.id)}
          className="text-lg bg-red-500 py-1 px-2.5 rounded hover:bg-red-800 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
