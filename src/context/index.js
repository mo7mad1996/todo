import { createContext } from "react";
import useLocalStorage from "use-local-storage";

export const CTX = createContext();

const Context = ({ children }) => {
  const [list, setList] = useLocalStorage("tasks", []);

  const initialState = {
    show: "all",
    list,
    setList,
  };

  // console.log(test)

  return <CTX.Provider value={initialState}>{children}</CTX.Provider>;
};

export default Context;
