import React, { useContext } from "react";
import { taskContext } from "./App";

const TaskForm = ({ categories }) => {
  const { addTask, edit } = useContext(taskContext);
  console.log("edit", edit);
  return (
    <React.Fragment>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          width: "500px",
          height: "150px",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid black",
          borderRadius: "5px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const formProps = Object.fromEntries(formData);
          const task = {
            id: Math.random(),
            ...formProps,
          };
          if (Object.keys(edit).length !== 0) {
            addTask({ ...task, id: edit.id });
          } else {
            addTask(task);
          }

          e.target.reset();
        }}
      >
        <input
          name="task"
          id="task"
          type="text"
          placeholder="Enter Your Text"
          defaultValue={Object.keys(edit) !== 0 ? edit.task : ""}
        />

        <label>Choose the category</label>

        <select
          name="category"
          id="category"
          defaultValue={Object.keys(edit) !== 0 ? edit.category : ""}
        >
          {categories.map((category) => (
            <option value={category.value}>{category.name}</option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default TaskForm;
