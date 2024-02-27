import React from "react";
import css from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  function removeTask(id) {
    setTasks((old) => {
      const newTaskList = old.filter((el) => el.id !== id);

      return newTaskList;
    });
  }

  const clearCompleted = () =>
    setTasks((old) => old.filter((el) => el.isActive));

  function completeTask(id) {
    setTasks((old) => {
      return old.map((el) => {
        if (el.id === id) {
          const task = { ...el }; // clone a new copy
          task.isActive = !task.isActive;

          return task;
        }

        return el;
      });
    });
  }

  // list items
  const List = state.map((task) => (
    <li
      key={task.id}
      title={task.title}
      className={task.isActive ? "" : css.completed}
    >
      <div className={css.task}>
        <button title="completed" onClick={() => completeTask(task.id)}>
          {task.isActive ? (
            <FontAwesomeIcon icon="fa-solid fa-minus" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-check" />
          )}
        </button>
        <span>{task.title}</span>
        <button
          className={css.remove}
          onClick={() => removeTask(task.id)}
          title="Delete Task"
        >
          <FontAwesomeIcon icon="fa-solid fa-trash" />
        </button>
      </div>
    </li>
  ));

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
