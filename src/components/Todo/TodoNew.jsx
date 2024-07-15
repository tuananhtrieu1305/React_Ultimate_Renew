const TodoNew = (props) => {
  const { AddNewData } = props;
  const handleOnChange = (name) => {
    console.log(name);
  };
  return (
    <div className="search-bar">
      <input
        className="type-input"
        type="text"
        placeholder="Enter your task"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button className="add-btn" onClick={() => AddNewData()}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
