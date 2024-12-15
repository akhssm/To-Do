import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ addTask, editingTask, updateTask }) => {
  const [title, setTitle] = useState(editingTask?.title || "");
  const [description, setDescription] = useState(editingTask?.description || "");
  const [dueDate, setDueDate] = useState(editingTask?.dueDate || "");
  const [priority, setPriority] = useState(editingTask?.priority || "Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    const task = {
      id: editingTask ? editingTask.id : Date.now(),
      title,
      description,
      dueDate,
      priority,
      completed: false,
    };

    if (editingTask) {
      updateTask(task);
    } else {
      addTask(task);
    }

    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
