import { useState } from "react";

function CreateTask({ ...props }) {
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (event) => {
    props.onCreateNewTask(newTask);
    setNewTask("");
    event.preventDefault();
  };
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <>
      <div className="text-title">Create task</div>
      {/* <input
        placeholder="Input task's name"
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>+</button> */}
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            required
            type="text"
            name="name"
            placeholder="Input task's name"
            value={newTask}
            onChange={handleChange}
            className="form-control"
          />
          <button type="submit" className="btn btn-color" value="Submit">
            +
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateTask;
