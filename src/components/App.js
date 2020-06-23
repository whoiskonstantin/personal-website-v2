import React, { useState } from 'react'
import BackgroundSwitch from './BackgroundSwitch'

function App() {
  let [darkMode, setBackgroundMode] = useState(false)

  const handleInputChange = e => {
    setBackgroundMode(e.target.checked)
  }
  return (
    <div className={`App ${darkMode ? 'darkMode' : ''}`}>
      <BackgroundSwitch
        darkMode={darkMode}
        onInputChange={handleInputChange}
        setBackgroundMode={setBackgroundMode}
      />
      <header className='container'>
        <h1>Hello,</h1>
        <h2 className='intro'>
          I’m <span className='bold'>Konstantin Basmanov</span>, a front-end
          software engineer with a passion for building captivating interfaces
          for mobile and desktop devices.
        </h2>
        <h2 className='intro bold'>Let’s build something together!</h2>
        <br />
        <h3>
          <span>Get in touch </span>
          <a href='mailto:basmanovk@gmail.com'>basmanovk@gmail.com</a>
        </h3>
      </header>
      <section className='container'>
        <h2 className='section-title'>Background</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          perferendis explicabo deserunt expedita, dolor sit soluta vitae
          perspiciatis id rem velit, aliquid ducimus quisquam libero cupiditate
          dicta, officia illo culpa.
        </p>
      </section>
      <section className='container'>
        <h2 className='section-title'>Skills</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          perferendis explicabo deserunt expedita, dolor sit soluta vitae
          perspiciatis id rem velit, aliquid ducimus quisquam libero cupiditate
          dicta, officia illo culpa.
        </p>
      </section>
      <section className='container'>
        <h2 className='section-title'>Featured Projects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          perferendis explicabo deserunt expedita, dolor sit soluta vitae
          perspiciatis id rem velit, aliquid ducimus quisquam libero cupiditate
          dicta, officia illo culpa.
        </p>
      </section>
      <footer>
        <h3>
          <span>Designed & Developed by </span>
          <span>Konstantin Basmanov /"YEAR"/</span>
        </h3>
      </footer>
    </div>
  )
}

export default App
