import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div aria-label='counterContainer'>
      <div aria-label='countValue'>Count is {count}</div>
      <button onClick={() => setCount(count => count + 1)}>Add One</button>
    </div>
  );
};
