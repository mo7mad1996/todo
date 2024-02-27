// react
import { useState, useEffect } from "react";

// font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

// components
import BG from "./components/BG";
import Form from "./components/form";
import List from "./components/list";

// font-awesome
library.add(fas, faTwitter, faFontAwesome);

function App() {
  // tasks
  const local = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(local || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="App">
        <BG />

        <div className="container">
          <h1 className="main-heading">TODO</h1>

          <Form setTasks={setTasks} />
          {!!tasks.length && <List tasks={tasks} setTasks={setTasks} />}
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          &copy; this app created by
          <a
            href="https://portfolio-mohamed-ibrahim.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mohamed Ibrahim
          </a>
          <FontAwesomeIcon icon="fa-solid fa-heart" />.
        </div>
      </footer>
    </>
  );
}

export default App;
