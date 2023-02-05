import reactLogo from './assets/react.svg';
import './App.css';
import Home from './pages/home';
import { createContext, useState } from 'react';

export const numberContext = createContext();

function App() {
  const [number, setNumber] = useState(0);
  return (

      <numberContext.Provider value={number}>
        <div className="App">
          <Home />
          <button onClick={() => setNumber(number + 1)}>change</button>
        </div>
      </numberContext.Provider>
  )
}

export default App
