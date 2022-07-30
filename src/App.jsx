import { useState, useMemo, useCallback, useEffect } from 'react';
import './App.css';

const createUser = (name, surname) => {
  const user = { name, surname };
  console.log(user);
  return user;
};

const App = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('Hello World!');

  // Fixed
  /**
   * Details:
   *
   * In computing, memoization or memoisation is an optimization technique used
   * primarily to speed up computer programs by storing the results of expensive
   * function calls and returning the cached result when the same inputs occur again.
   *
   * During initial rendering, useMemo(compute, dependencies) invokes compute, memoizes
   * the calculation result, and returns it to the component.
   * If during next renderings the dependencies don't change, then useMemo()
   * doesn't invoke compute but returns the memoized value
   *
   * But if dependencies change during re-rendering, then useMemo()
   * invokes compute, memoizes the new value, and returns it
   *
   * useMemo memoizes the calculation result, and returns it to the component.
   * If during next renderings the dependencies don't change, then useMemo()
   * doesn't invoke compute but returns the memoized value
   *
   * */
  const user = useMemo(() => createUser(name, surname), [name, surname]);

  // This function gets created every time we change the state
  const greeting = (text) => {
    console.log(text);
  };

  // Bug: function get called after state changes (counter, user creation)
  useEffect(() => {
    greeting(message);
    // And this greeting is not the same we create in the component
  }, [greeting, message]);

  return (
    <div className='App'>
      <h1>useMemo, useCallback</h1>
      <br />
      <h2>Counter</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Clicked {counter} times
      </button>
      <br />
      <br />
      <h2>Form</h2>
      <div>
        <div>
          <label>
            <div>Name</div>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <div>Surname</div>
            <input
              type='text'
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </label>
        </div>
      </div>
      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default App;
