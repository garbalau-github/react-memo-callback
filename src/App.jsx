import { useState, useMemo, useCallback } from 'react';
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

  // Function gets called each time components state changes (counter)
  const user = createUser(name, surname);

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
