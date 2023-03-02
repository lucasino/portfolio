import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Home from './components/Home'
import About from './components/About'
import Games from './components/Games'
import Contact from './components/Contact'
import PokyDrivers from './components/Portfolios/PokyDrivers'
import UGR from './components/Portfolios/Universe'
import { useEffect } from 'react';

function App() {
  useEffect(() =>{
    document.title = "Lucas Calbo | Portfolio"
  })
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="games" element={<Games />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pokydrivers" element={<PokyDrivers />} />
          <Route path="ugr" element={<UGR />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
