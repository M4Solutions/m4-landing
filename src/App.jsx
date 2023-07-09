import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/home';



function App() {
  
  useEffect(() => {
    AOS.init()
  }, []);
  
  return (

        <div className="App">
          <Home />
        </div>
  )
}

export default App
