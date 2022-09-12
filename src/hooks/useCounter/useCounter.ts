import { useState, useCallback } from 'react';

export const useCounter = (countInitialState: number) => {
  const [count, setCount] = useState(countInitialState);

  const increment = useCallback(() => setCount(count => count + 1), []);
  const decrement = useCallback(() => setCount(count => count - 1), []);
  const reset = useCallback(() => setCount(countInitialState), [countInitialState]);

  return { count, increment, decrement, reset };
};
