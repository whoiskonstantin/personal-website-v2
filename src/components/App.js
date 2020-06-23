import React, { useState } from 'react'
import BackgroundSwitch from './BackgroundSwitch'

function App() {
  let [darkMode, setBackgroundMode] = useState(false)
  const handleInputChange = e => {
    setBackgroundMode(e.target.checked)
    // e.target.checked
    //   ? document.body.classList.add('darkMode')
    //   : document.body.classList.remove('darkMode')
  }
  return (
    <div className={`App ${darkMode ? 'darkBg' : ''}`}>
      <BackgroundSwitch
        darkMode={darkMode}
        onInputChange={handleInputChange}
        setBackgroundMode={setBackgroundMode}
      />
      <header className='container'>
        <h1>Hello,</h1>
        <h2 className='intro'>
          I’m <span className='bold'>Konstantin Basmanov</span>, a front-end
          software engineer based in Chicago, IL with a passion for building
          captivating interfaces for mobile and desktop devices.
        </h2>
        <h2 className='intro bold'>Let’s build something together!</h2>
        <br />
        <h3>
          <span>Get in touch </span>
          <a
            href='mailto:basmanovk@gmail.com'
            className={darkMode ? 'darkLink' : ''}
          >
            basmanovk@gmail.com
          </a>
        </h3>
      </header>
      <section className='container flex'>
        <h2 className={`section-title ${darkMode ? 'darkTitle' : ''}`}>
          Background
        </h2>
        <div className='section-content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            perferendis explicabo deserunt expedita, dolor sit soluta vitae
            perspiciatis id rem velit, aliquid ducimus quisquam libero
            cupiditate dicta, officia illo culpa.
          </p>
        </div>
      </section>
      <section className='container flex'>
        <h2 className={`section-title ${darkMode ? 'darkTitle' : ''}`}>
          Skills
        </h2>
        <div className='section-content'>
          <div className='bubbling-container'>
            <div className='bubbling-icons'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            perferendis explicabo deserunt expedita, dolor sit soluta vitae
            perspiciatis id rem velit, aliquid ducimus quisquam libero
            cupiditate dicta, officia illo culpa.
          </p>
        </div>
      </section>
      <section className='container flex'>
        <h2 className={`section-title ${darkMode ? 'darkTitle' : ''}`}>
          Featured Projects
        </h2>
        <div className='section-content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            perferendis explicabo deserunt expedita, dolor sit soluta vitae
            perspiciatis id rem velit, aliquid ducimus quisquam libero
            cupiditate dicta, officia illo culpa.
          </p>
        </div>
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
