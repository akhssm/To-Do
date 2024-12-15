import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [taskFormValues, setTaskFormValues] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  });

  // Load tasks from localStorage on initial load
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Toggle dark mode
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Add task
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // Update task
  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editTaskId ? { ...task, ...updatedTask } : task
      )
    );
    setEditTaskId(null);
    resetForm();
  };

  // Edit task
  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditTaskId(id);
    setTaskFormValues(taskToEdit);
  };

  // Mark task as complete
  const markAsComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  const resetForm = () => {
    setTaskFormValues({
      title: "",
      description: "",
      dueDate: "",
      priority: "Medium",
    });
  };

  return (
    <div className="app">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        editing={editTaskId !== null}
        taskFormValues={taskFormValues}
        setTaskFormValues={setTaskFormValues}
      />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        markAsComplete={markAsComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
