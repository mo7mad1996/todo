import React from "react";
import css from "./style.module.css";

// components
import Item from "./Item";

export const filters = ["all", "active", "completed"];

// main component
function List({ state, dispatch }) {
  /**
   *  methods
   */
  function clearCompleted() {
    dispatch({ type: "clearCompleted" });
  }

  // list items
  const readyToShow = state.list.filter((task) => {
    switch (state.show) {
      case "active":
        return task.isActive;
      case "completed":
        return !task.isActive;

      default:
        return true;
    }
  });

  /**
   *  components
   */
  // list
  const list = readyToShow.map((task) => (
    <Item key={task.id} task={task} dispatch={dispatch} />
  ));

  // buttons
  const filtersBtns = filters.map((type) => (
    <button
      key={type}
      className={state.show === type ? css.active : ""}
      onClick={() => dispatch({ type })}
    >
      {type}
    </button>
  ));

  // HTML returns
  return (
    <div className={css.todo}>
      <ul>{list}</ul>

      <footer>
        <div> {state.list.filter((el) => el.isActive).length} items left</div>
        <div className={css.flex}>{filtersBtns}</div>

        <button onClick={clearCompleted}>Clear Completed</button>
      </footer>
    </div>
  );
}

export default List;
