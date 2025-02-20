import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const AddTaskForm = ({ onAddTask, darkTheme }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle("");
    }
  };

  const formStyle = {
    backgroundColor: darkTheme ? "#333" : "#fff",
    display: "flex",
    alignItems: "center",
    borderRadius: "1rem",
    padding: "0.5rem 1rem",
  };

  const inputStyle = {
    backgroundColor: "transparent",
    flex: 1,
    marginLeft: "10px",
    border: "none",
    fontSize: "1rem",
    color: darkTheme ? "#ccc" : "#333",
    outline: "none",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    textTransform: "uppercase",
    color: darkTheme ? "#ccc" : "#333",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    marginLeft: "1rem",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={formStyle}>
        <CiCirclePlus size={28} className="text-gray-500" />
        <input
          style={inputStyle}
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button style={buttonStyle} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
