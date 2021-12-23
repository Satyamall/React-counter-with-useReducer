import React from "react";
import { AppContext } from "../Context/AppContext";

function Counter() {
  const { state, dispatch } = React.useContext(AppContext);

  const handleAdd = () => {
    const action = {
      type: "increment"
    };
    dispatch(action);
  };

  const handleDecrement = () => {
    const action = {
      type: "decrement"
    };
    dispatch(action);
  };

  return (
    <>
      <h1>Counter</h1>
      <h3> {state.counter} </h3>
      <button onClick={handleAdd}> ADD </button>
      <button onClick={handleDecrement}> REDUCE </button>
    </>
  );
}

export { Counter };
