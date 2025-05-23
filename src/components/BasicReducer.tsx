import { useReducer } from "react";

const initialState = 0;
const reducer = (currentState: number, action: string) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const BasicReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count {count}</div>
      <button onClick={() => dispatch("add_1")}>Add + 1</button>
      <button onClick={() => dispatch("multiple_3")}>Multiple * 3</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default BasicReducer;
