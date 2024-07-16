const TodoList = (props) => {
  const { data } = props;
  return (
    <>
      <div className="task-list">
        {data.map((item, index) => {
          return (
            <div className="task-item">
              <p className="task-name">{item.task}</p>
              <div className="icons">
                <div className="delete-icon icon">
                  <ion-icon name="trash-outline"></ion-icon>
                </div>
                <div className="update-icon icon">
                  <ion-icon name="clipboard-outline"></ion-icon>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="delete-btn">Delete all</button>
    </>
  );
};

export default TodoList;
