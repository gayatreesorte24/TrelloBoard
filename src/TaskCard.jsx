import React from "react";
import { useContext } from "react";
import { taskContext } from "./App";

const TaskCard = ({ title, tasks }) => {
  const { setEdit, deleteTask } = useContext(taskContext);
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        border: "2px solid black",
        borderRadius: "5px",
        overflow: "scroll",
      }}
    >
      <div>{title}</div>
      <ul>
        {tasks.map((task) => (
          <React.Fragment>
            <li>{task.task}</li>
            <button onClick={() => setEdit(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default TaskCard;
