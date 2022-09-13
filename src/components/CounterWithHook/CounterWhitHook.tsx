import { useCounter } from '../../hooks';

export const CounterWhitHook = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div aria-label='counterContainer'>
      <div aria-label='countValue'>Count is: {count}</div>
      <button onClick={decrement}>Subtract One</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Add One</button>
    </div>
  );
};
