import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div>
      <section className="min-h-screen bg-black px-5 sm:px-8 sm:py-0 py-5">
        <Router>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/create-task/:id" element={<TaskForm />} />
          </Routes>
        </Router>
      </section>
    </div>
  );
}

export default App;
