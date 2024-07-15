// import LostImage from "../src/assets/react.svg";
import "./components/Todo/todo.css";
import TodoList from "./components/Todo/TodoList";
import TodoNew from "./components/Todo/TodoNew";

const App = () => {
  const data = {
    task: "Watching YT",
    time: "8:00 pm",
  };
  return (
    <div className="wrapper">
      <h1 className="heading">Todo List</h1>
      <TodoNew />
      {/* <figure>
        <img src={LostImage} alt="" />
      </figure> */}
      <TodoList data={data} />
    </div>
  );
};

export default App;
