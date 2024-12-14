// import React from "react";
// import TaskItem from "./TaskCard";

// const TaskList = ({ tasks, markAsComplete, deleteTask }) => {
//   return (
//     <div className="task-list">
//       {tasks.map((task) => (
//         <TaskItem
//           key={task.id}
//           task={task}
//           markAsComplete={markAsComplete}
//           deleteTask={deleteTask}
//         />
//       ))}
//     </div>
//   );
// };

// export default TaskList;



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
