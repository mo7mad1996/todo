import React from "react";
import css from "./style.module.css";

// components
import Item from "./Item";

function List({ tasks, setTasks }) {
  const [active, setActive] = React.useState("all");
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    setState((_) => {
      return tasks.filter((task) => {
        switch (active) {
          case "active":
            return task.isActive;
          case "completed":
            return !task.isActive;

          default:
            return true;
        }
      });
    });
  }, [active, tasks]);

  // methods
  function clearCompleted() {
    return setTasks((old) => old.filter((el) => el.isActive));
  }

  // components
  // list items
  const List = state.map((task) => (
    <Item key={task.id} task={task} setTasks={setTasks} />
  ));

  // buttons
  const filtered = ["all", "active", "completed"].map((type) => (
    <button
      key={type}
      className={active === type ? css.active : ""}
      onClick={() => setActive(type)}
    >
      {type}
    </button>
  ));

  // HTML returns
  return (
    <div className={css.todo}>
      <ul>{List}</ul>

      <footer>
        <div> {tasks.filter((el) => el.isActive).length} items left</div>
        <div className={css.flex}>{filtered}</div>
        <div>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      </footer>
    </div>
  );
}

export default List;
