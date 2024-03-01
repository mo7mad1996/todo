import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "./style.module.css";

// main component
const Item = memo(({ task, dispatch }) => {
  return (
    <li title={task.title} className={task.isActive ? "" : css.completed}>
      <div className={css.task}>
        <button
          title="completed"
          onClick={() => dispatch({ type: "complete", id: task.id })}
        >
          <FontAwesomeIcon
            icon={`fa-solid ${task.isActive ? "fa-minus" : "fa-check"}`}
          />
        </button>

        <span>{task.title}</span>

        <button
          className={css.remove}
          onClick={() => dispatch({ type: "remove", id: task.id })}
          title="Delete Task"
        >
          <FontAwesomeIcon icon="fa-solid fa-trash" />
        </button>
      </div>
    </li>
  );
});

export default Item;
