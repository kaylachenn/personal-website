import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Iridescence from './components/Iridescence';
  
import Home from './pages/Home';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />

      <Navbar/>
      <Home/>
    </>
  );
}

export default App
