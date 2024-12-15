import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, markAsComplete, deleteTask, editTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          markAsComplete={markAsComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
