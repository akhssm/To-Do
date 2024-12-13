import React from "react";
import "./TaskCard.css";

function TaskCard({ task, toggleComplete, deleteTask, editTask }) {
  const priorityStyles = {
    High: { backgroundColor: "red", color: "white" },
    Medium: { backgroundColor: "orange", color: "white" },
    Low: { backgroundColor: "green", color: "white" },
  };

  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.dueDate && <p>Due: {task.dueDate}</p>}
      {task.priority && (
        <p style={priorityStyles[task.priority]}>Priority: {task.priority}</p>
      )}
      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => editTask(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
