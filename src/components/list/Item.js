import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "./style.module.css";

const Item = memo(({ task, setTasks }) => {
  console.log("render");

  // methods
  function removeTask(id) {
    setTasks((old) => {
      const newTaskList = old.filter((el) => el.id !== id);

      return newTaskList;
    });
  }

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

  return (
    <li title={task.title} className={task.isActive ? "" : css.completed}>
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
  );
});

export default Item;
