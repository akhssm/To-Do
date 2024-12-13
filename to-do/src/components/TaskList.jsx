import React from "react";
import TaskItem from "./TaskCard";

const TaskList = ({ tasks, markAsComplete, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          markAsComplete={markAsComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
