/**
 * @description
 * hooks functions
 *
 * @useDispatch => for dispatch the action
 * @useSelector => for choosing the reducer from store
 *
 */
import { useDispatch, useSelector } from "react-redux";

/**
 * @description
 * getting all the reducer functions from redux slice
 */
import { doIncrement, doDecrement, doMultiply } from "../../redux/counter";

function Counter() {
  /**
   * @description
   * receiving the state reducer
   */
  const counterState = useSelector((state) => state.counterReducer);
  // console.log({ counterState });

  /**
   * @description
   * receiving the dispatch function
   */
  const actionDispatch = useDispatch();

  const onMinusButtonClick = () => {
    actionDispatch(doDecrement({}));
  };

  const onPlusButtonClick = () => {
    actionDispatch(doIncrement({}));
  };

  const onMultiplyButtonClick = () => {
    actionDispatch(doMultiply(10));
  };

  return (
    <div>
      <h3 style={{ margin: 0 }}>Counter: {counterState?.counter}</h3>
      <button onClick={onMinusButtonClick}>Decrement</button>
      <button onClick={onPlusButtonClick}>Increment</button>
      <button onClick={onMultiplyButtonClick}>Multiply by 10</button>
    </div>
  );
}

export { Counter };
export default Counter;
