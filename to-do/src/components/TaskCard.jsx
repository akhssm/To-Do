// TaskCard.jsx
import React from "react";
// import "./TaskCard.css";

function TaskCard({ task, toggleComplete, deleteTask }) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.dueDate && <p>Due: {task.dueDate}</p>}
      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
