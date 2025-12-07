import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss';
import'./components/Header.scss'
import './index.scss';
import Header from "./components/Header";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <div className="page-container">
        <p1></p1>
        
      </div>
      
      
      
     
    </>
  )
}

export default App
