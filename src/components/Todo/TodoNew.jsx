import { useState } from "react";

const TodoNew = (props) => {
  const [inputValue, setInputValue] = useState("");

  const { AddNewData } = props;
  const handleOnChange = (name) => {
    setInputValue(name);
  };
  return (
    <div className="search-bar">
      <input
        className="type-input"
        type="text"
        placeholder="Enter task"
        value={inputValue}
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button className="add-btn" onClick={() => AddNewData(inputValue)}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
