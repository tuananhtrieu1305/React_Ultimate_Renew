import { useState } from "react";

const TodoNew = (props) => {
  const [inputValue, setInputValue] = useState("Enter task");

  const { AddNewData } = props;
  const handleOnChange = (name) => {
    setInputValue(name);
  };
  return (
    <div className="search-bar">
      <input
        className="type-input"
        type="text"
        placeholder={inputValue}
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button className="add-btn" onClick={() => AddNewData(inputValue)}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
