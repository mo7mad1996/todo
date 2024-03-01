import { filters } from "../components/list";

// reducer
export default function reducer(state, action) {
  // clone the old state
  const newState = { ...state };

  // is type in filters set type
  filters.indexOf(action.type) + 1 && (newState.show = action.type);

  switch (action.type) {
    case "add":
      const result = action.task;
      // newState.list = [action.task, ...newState.list]; // Immutability
      newState.list.unshift(result); // mutability
      break;

    case "remove":
      newState.list = newState.list.filter((i) => i.id !== action.id);
      break;

    case "complete":
      newState.list = newState.list.map((i) => {
        if (i.id === action.id) {
          return { ...i, isActive: !i.isActive };
        }
        return i;
      });
      break;

    case "clearCompleted":
      newState.list = newState.list.filter((t) => t.isActive);
      break;

    default:
      return newState;
  }
  return newState;
}
