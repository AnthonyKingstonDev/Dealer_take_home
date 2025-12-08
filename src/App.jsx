import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss';
import'./components/Header.scss'
import './index.scss';
import Header from "./components/Header";
import { projectStrings } from "./components/cardStrings";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header />

  <div className="page-container">
    <p>{projectStrings.LongText}</p>
  </div>
</>

  )
}

export default App
