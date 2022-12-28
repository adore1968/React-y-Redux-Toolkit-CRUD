import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      <div>
        <h1>Tasks {tasks.length}</h1>
        <Link to="/create-task">Create new task</Link>
      </div>
      <div>
        {tasks.map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}

export default TaskList;
