import reactLogo from './assets/react.svg';
import './App.css';
import Home from './pages/home';
import { useState } from 'react';
import { numberContext } from './contexts/NumberContxt';



function App() {
  const [number, setNumber] = useState(0);
  return (

      <numberContext.Provider value={number}>
        <div className="App">
          <Home />
          <button className='border border-green' onClick={() => setNumber(number + 1)}>change</button>
        </div>
      </numberContext.Provider>
  )
}

export default App
