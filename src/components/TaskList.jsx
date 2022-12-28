import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="container sm:max-w-6xl flex flex-col justify-center">
        <div className="flex justify-between mb-5 items-center">
          <h1 className="text-2xl ">Tasks {tasks.length}</h1>
          <Link
            to="/create-task"
            className="bg-purple-500 p-2 rounded text-lg hover:bg-purple-800 transition-colors"
          >
            Create new task
          </Link>
        </div>
        <div className="flex flex-wrap justify-center">
          {tasks.map((task) => {
            return <TaskItem key={task.id} task={task} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
