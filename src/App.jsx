import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Nav from './components/Nav'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='font-mono'>
    
      <div id='home'>
        <Home/>
      </div>
      <div id='about'>
        <About/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
    </div>
  )
}

export default App
