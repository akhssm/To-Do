import React from "react";

const TaskCard = ({ task, markAsComplete, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.dueDate && <span>Due: {task.dueDate}</span>}
      <button onClick={() => markAsComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
