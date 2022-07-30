import { useState, useEffect, useMemo, useCallback } from 'react';

import Sum from './Sum';

const Main = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const result = Sum(4 * count + count2);

  useEffect(() => {}, [count]);

  return (
    <div>
      <h2>Ammount: {count}</h2>
      <h2>+100: {count}</h2>
      <hr />
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev + 100)}>+100</button>
    </div>
  );
};

export default Main;
