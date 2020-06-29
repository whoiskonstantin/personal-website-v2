import React, { useState } from 'react'
import BackgroundSwitch from './BackgroundSwitch'
import Greeting from './Greeting'
import PWdesktop from '../resources/showcase/personal-website-desktop.png'
import PWmobile from '../resources/showcase/personal-website-mobile.png'
import Hangman1 from '../resources/showcase/hangman-1.png'
import Hangman2 from '../resources/showcase/hangman-2.png'
import FLdesktop from '../resources/showcase/firstline-desktop.png'
import FLmobile from '../resources/showcase/firstline-mobile.png'

function App() {
  const handleBackgorundColor = () => {
    let time = new Date().getHours()
    if (time > 19 && time < 8) {
      return true
    }
    return false
  }

  // let [darkMode, setBackgroundMode] = useState(handleBackgorundColor())
  let [darkMode, setBackgroundMode] = useState(true)
  const handleInputChange = e => {
    setBackgroundMode(e.target.checked)
    // e.target.checked
    //   ? document.body.classList.add('darkMode')
    //   : document.body.classList.remove('darkMode')
  }
  return (
    <div className='App' id={darkMode ? 'darkBg' : ''}>
      <BackgroundSwitch
        darkMode={darkMode}
        onInputChange={handleInputChange}
        setBackgroundMode={setBackgroundMode}
      />
      <header className='container'>
        <Greeting />
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
        <h2 className='section-title' id={darkMode ? 'darkTitle' : ''}>
          Background
        </h2>
        <div className='section-content'>
          <p>
            I graduated from
            <span className='bold'> John Cabot University in Rome, Italy </span>
            with BA degree in Business Administration focusing on Finance and
            Economics in 2015. Since then I have pursued a career in marketing,
            sales and management.{' '}
          </p>
          <p>
            I worked as a business development manager in a telecommunication
            startup –<span className='bold'> BNESIM in Dubai</span>, UAE for
            almost a year, before moving to Nesebar, Bulgaria where due to
            seasonal nature of the economy I have{' '}
            <span className='bold'>
              {' '}
              established and managed multiple businesses:{' '}
            </span>
            restaurant management, import and distribution of pellets (stove
            fuel) and web services. The later helped me realize that my favorite
            and the most exciting part of all my professional duties was helping
            businesses to <span className='bold'>craft and build</span>{' '}
            captivating user interfaces and help maintain solid online presence.
          </p>
          <p>
            After moving to the United States I continually sharpened my web
            development skills and prepared myself to
            <span className='bold'> help you on your next big project!</span>
          </p>
        </div>
      </section>
      <section className='container flex '>
        <h2 className='section-title' id={darkMode ? 'darkTitle' : ''}>
          Skills
        </h2>

        <div className='section-content flex-wide'>
          <div
            className='sub-section space-around'
            id={darkMode ? 'darkBorder' : ''}
          >
            <h3 className='sub-tl-lang' id={darkMode ? 'darkTitle' : ''}>
              Languages
            </h3>
            <div className='bubbling-container column'>
              <div className='bubbling-icons languages'></div>
            </div>
            <ul className='skills-ul'>
              <li className='skills-li'>Javascript(ES6)</li>
              <li className='skills-li'>HTML5</li>
              <li className='skills-li'>CSS3</li>
            </ul>
          </div>
          <div
            className='sub-section space-around'
            id={darkMode ? 'darkBorder' : ''}
          >
            <h3 className='sub-tl-tls-res' id={darkMode ? 'darkTitle' : ''}>
              Tools and Resources
            </h3>
            <div className='bubbling-container column'>
              <div className='bubbling-icons tools'></div>
            </div>
            <ul className='skills-ul'>
              <li className='skills-li'>React/Redux</li>
              <li className='skills-li'>AWS</li>
              <li className='skills-li'>Git & Github</li>
            </ul>
          </div>
          <div
            className='sub-section space-around'
            id={darkMode ? 'darkBorder' : ''}
          >
            <h3 className='sub-tl-des' id={darkMode ? 'darkTitle' : ''}>
              Design
            </h3>
            <div className='bubbling-container column'>
              <div className='bubbling-icons adobe'></div>
            </div>
            <ul className='skills-ul'>
              <li className='skills-li'>Photoshop</li>
              <li className='skills-li'>Illustrator</li>
              <li className='skills-li'>Xd</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='container flex'>
        <h2 className='section-title' id={darkMode ? 'darkTitle' : ''}>
          Projects
        </h2>
        <div className='section-content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            perferendis explicabo deserunt expedita, dolor sit soluta vitae
            perspiciatis id rem velit, aliquid ducimus quisquam libero
            cupiditate dicta, officia illo culpa.
          </p>
          <div className='projects-sub-section'>
            <div className='project-images'>
              <img
                className='desktop'
                src={FLdesktop}
                alt='Personal Website v1'
              />
              <img
                className='mobile'
                src={FLmobile}
                alt='Personal Website v1'
              />
            </div>
          </div>
          <div className='project-images'>
            <img
              className='mobile mobile-large'
              src={Hangman1}
              alt='Personal Website v1'
            />
            <img
              className='mobile mobile-large'
              src={Hangman2}
              alt='Personal Website v1'
            />
          </div>
          <div className='project-images'>
            <img
              className='desktop'
              src={PWdesktop}
              alt='Personal Website v1'
            />
            <img className='mobile' src={PWmobile} alt='Personal Website v1' />
          </div>
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
