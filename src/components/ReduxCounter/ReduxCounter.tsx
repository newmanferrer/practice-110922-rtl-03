import { useAppSelector, useAppDispatch } from '../../hooks';
import { increment, decrement } from '../../reduxState';

export const ReduxCounter = () => {
  const counter = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <span aria-label='spanCounter'>Counter: {counter}</span>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </div>
  );
};
