import { useSelector, useDispatch } from "react-redux";

const ReduxApp = () => {
  const counter = useSelector((state) => state.counter); //for state in reducer fn
  const dispatch = useDispatch(); //for action in reducer fn

  const increament = () => {
    dispatch({ type: "INC" });
  };
  const decreament = () => {
    dispatch({ type: "DEC" });
  };
  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <>
      <h1>Counter App Using Redux</h1>
      <h2>{counter}</h2>
      <button onClick={increament}>+</button>{" "}
      <button onClick={decreament}>-</button>{" "}
      <button onClick={addBy}>Add by 10</button>{" "}
    </>
  );
};

export default ReduxApp;
