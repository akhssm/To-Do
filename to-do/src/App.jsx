import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const toggleComplete = (id) =>
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return filter === 'Completed' ? task.completed : !task.completed;
  });

  return (
    <div>
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
