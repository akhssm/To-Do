// import React from "react";
// import "./TaskCard.css";


// const TaskCard = ({ task, markAsComplete, deleteTask }) => {
//   return (
//     <div className={`task-item ${task.completed ? "completed" : ""}`}>
//       <h3>{task.title}</h3>
//       <p>{task.description}</p>
//       {task.dueDate && <span>Due: {task.dueDate}</span>}
//       <button onClick={() => markAsComplete(task.id)}>
//         {task.completed ? "Undo" : "Complete"}
//       </button>
//       <button onClick={() => deleteTask(task.id)}>Delete</button>
//     </div>
//   );
// };

// export default TaskCard;



import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task, markAsComplete, deleteTask, editTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.dueDate && <span>Due: {task.dueDate}</span>}
      <p>Priority: <span className={`priority-${task.priority.toLowerCase()}`}>{task.priority}</span></p>
      <button onClick={() => markAsComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => editTask(task.id)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;