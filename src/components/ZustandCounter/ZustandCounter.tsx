import { useStore } from '../../zustandState';

export const ZustandCounter = () => {
  const { counter, increment, decrement } = useStore();

  return (
    <div>
      <div>
        <button onClick={decrement}>Decrement</button>
        <span aria-label='spanCounter'>Counter: {counter}</span>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};
