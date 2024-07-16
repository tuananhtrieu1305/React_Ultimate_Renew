// import LostImage from "../src/assets/react.svg";
import { useState } from "react";
import "./components/Todo/todo.css";
import TodoList from "./components/Todo/TodoList";
import TodoNew from "./components/Todo/TodoNew";

const App = () => {
  const [data, setData] = useState([
    { id: 1, task: "Watching YT" },
    { id: 2, task: "Learning English" },
  ]);
  const AddNewData = (name) => {
    alert(`execute ${name}`);
  };
  return (
    <div className="wrapper">
      <h1 className="heading">Todo List</h1>
      <TodoNew AddNewData={AddNewData} />
      {/* <figure>
        <img src={LostImage} alt="" />
      </figure> */}
      <TodoList data={data} setData={setData} />
    </div>
  );
};

export default App;
