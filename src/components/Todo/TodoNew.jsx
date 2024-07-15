const TodoNew = (props) => {
  const { AddNewData } = props;
  AddNewData("Hello");
  return (
    <div className="search-bar">
      <input className="type-input" type="text" placeholder="Enter your task" />
      <button className="add-btn">Add</button>
    </div>
  );
};

export default TodoNew;
