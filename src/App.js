// react
import { useReducer, useEffect, memo } from "react";

// font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

// components
import BG from "./components/BG";
import Form from "./components/form";
import List from "./components/list";

// reducer
import reducer from "./reducer/app";

// font-awesome
library.add(fas, faTwitter, faFontAwesome);

// reducer state
const initialState = {
  list: JSON.parse(localStorage.getItem("tasks")) || [],
  show: "all",
};

// main component
function App() {
  // tasks
  const [state, dispatch] = useReducer(reducer, initialState);

  // save the tasks each time i change it
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.list));
  }, [state.list]);

  return (
    <div className="App">
      <BG />

      <div className="container">
        <h1 className="main-heading">TODO</h1>

        <Form dispatch={dispatch} />
        {!!state.list.length && <List state={state} dispatch={dispatch} />}
      </div>
    </div>
  );
}

export default memo(App);
