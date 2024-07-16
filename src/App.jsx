import LostImage from "../src/assets/react.svg";
import { useState } from "react";
import "./components/Todo/todo.css";
import TodoList from "./components/Todo/TodoList";
import TodoNew from "./components/Todo/TodoNew";

const App = () => {
  const [data, setData] = useState([
    // { id: 1, task: "Watching YT" },
    // { id: 2, task: "Learning English" },
  ]);

  const randomNumb = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const AddNewData = (name) => {
    const newData = {
      id: randomNumb(3, 200),
      task: name,
    };
    setData([...data, newData]);
  };

  const handleDeleteData = (id) => {
    const todoList = data.filter((item) => item.id !== id);
    setData(todoList);
  };

  return (
    <div className="wrapper">
      <h1 className="heading">Todo List</h1>
      <TodoNew AddNewData={AddNewData} />
      {data.length > 0 ? (
        <TodoList data={data} handleDeleteData={handleDeleteData} />
      ) : (
        <figure>
          <img src={LostImage} alt="" />
        </figure>
      )}
    </div>
  );
};

export default App;
