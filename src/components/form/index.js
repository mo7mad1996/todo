import React from "react";
import css from "./style.module.css";

function Form({ dispatch }) {
  const form = React.useRef(0);
  const [text, setText] = React.useState("");

  function focus() {
    form.current.classList?.add(css.active);
  }
  function blur() {
    form.current.classList?.remove(css.active);
  }

  const addTask = (e) => {
    e.preventDefault();
    // console.log("flag");

    const task = {
      id: Math.random() + Date.now(),
      isActive: true,
      title: text,
    };

    // console.log(task);
    dispatch({
      type: "add",
      task,
    });

    setText("");
  };

  return (
    <form className={css.form} ref={form} onSubmit={addTask}>
      <input
        placeholder="Start typing..."
        autoFocus
        onFocus={focus}
        onBlur={blur}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" onFocus={focus} onBlur={blur}>
        Create
      </button>
    </form>
  );
}

export default React.memo(Form);
