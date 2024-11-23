import React, { useState, useEffect } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (index) => {
    if (window.confirm("Are you sure you want to delete the task?")) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
  };

  const editTask = (index) => {
    if (index < 0 || index >= tasks.length || !tasks[index]) {
      alert("Invalid task selected for editing.");
      return;
    }

    const updatedStatus = prompt("Enter new status:", tasks[index].status);
    if (updatedStatus) {
      const updatedTasks = [...tasks];
      updatedTasks[index].status = updatedStatus;
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="m-5">
      <h1 className="mb-4">Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;
