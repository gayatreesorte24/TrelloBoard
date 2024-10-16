import { createContext, useState } from "react";
import "./styles.css";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

export const categories = [
  {
    name: "Todo",
    value: "todo",
  },
  {
    name: "Inprogress",
    value: "inprogress",
  },
  {
    name: "Done",
    value: "done",
  },
];
export const taskContext = createContext();
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState({});

  const addTask = (task) => {
    if (Object.keys(edit).length !== 0) {
      setTasks((prevTask) =>
        prevTask.map((taskVal) => {
          if (taskVal.id === task.id) {
            return { ...taskVal, task: task.task, category: task.category };
          } else {
            return taskVal;
          }
        })
      );
      setEdit({});
    } else {
      setTasks((prevTask) => [...prevTask, task]);
    }
  };

  const deleteTask = (id) => {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <taskContext.Provider
        value={{ tasks, addTask, deleteTask, edit, setEdit }}
      >
        <TaskForm categories={categories} />
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            gap: "5px",
          }}
        >
          {categories.map((category) => (
            <TaskCard
              title={category.name}
              tasks={tasks.filter((task) => task.category === category.value)}
            />
          ))}
        </div>
      </taskContext.Provider>
    </div>
  );
}
