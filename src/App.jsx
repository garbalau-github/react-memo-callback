import { useState, useMemo, useCallback } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const user = { name, surname };

  return (
    <div className='App'>
      <h1>useMemo, useCallback</h1>
      <br />
      <form>
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
      </form>
      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default App;
