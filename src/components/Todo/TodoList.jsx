const TodoList = (props) => {
  const { data } = props;
  return (
    <>
      <div className="task-list">
        <div className="task-item">
          <p className="task-name">{data.task}</p>
          <div className="icons">
            <div className="delete-icon icon">
              <ion-icon name="trash-outline"></ion-icon>
            </div>
            <div className="update-icon icon">
              <ion-icon name="clipboard-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div className="task-item">
          <p className="task-name">watching youtube</p>
          <div className="icons">
            <div className="delete-icon icon">
              <ion-icon name="trash-outline"></ion-icon>
            </div>
            <div className="update-icon icon">
              <ion-icon name="clipboard-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div className="task-item">
          <p className="task-name">learning English</p>
          <div className="icons">
            <div className="delete-icon icon">
              <ion-icon name="trash-outline"></ion-icon>
            </div>
            <div className="update-icon icon">
              <ion-icon name="clipboard-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
      <button className="delete-btn">Delete all</button>
    </>
  );
};

export default TodoList;
