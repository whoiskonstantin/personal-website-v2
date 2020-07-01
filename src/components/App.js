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

  let [darkMode, setBackgroundMode] = useState(handleBackgorundColor())

  const handleInputChange = e => {
    setBackgroundMode(e.target.checked)
  }

  return (
    <div className='App' id={darkMode ? 'darkBg' : ''}>
      <BackgroundSwitch
        darkMode={darkMode}
        onInputChange={handleInputChange}
        setBackgroundMode={setBackgroundMode}
      />
      <header className='container fadein'>
        <Greeting />
        <h2 className='intro'>
          I’m <span className='bold'>Konstantin Basmanov</span>, a front-end
          software engineer based in Chicago, IL with a passion for building
          captivating interfaces for mobile and desktop devices.
        </h2>
        <h2 className='intro bold'>Let’s build something together!</h2>
        <h3 className='get-in-touch'>
          <span>Get in touch </span>
          <a
            href='mailto:basmanovk@gmail.com'
            className={`contact-link ${darkMode ? 'darkLink' : ''}`}
          >
            basmanovk@gmail.com
          </a>
        </h3>
      </header>
      <section className='container section flex'>
        <h2 className='section-title' id={darkMode ? 'darkTitle' : ''}>
          Background
        </h2>
        <div className='section-content'>
          <p>
            I graduated from
            <span className='bold'> John Cabot University in Rome, Italy </span>
            with BA degree in Business Administration focusing on Finance and
            Economics in 2015. Since then I have pursued a career in marketing,
            sales and management.
          </p>
          <p>
            In 2016 I started to work as a business development manager in a
            telecommunication startup –
            <span className='bold'> BNESIM in Dubai</span>. In 2017 I moved to
            Bulgaria where I have worked as a restaurant manager, started my own
            business and did
            <span className='bold'> web service freelancing</span>. Freelance
            work in the field of web development helped me realize that the most
            exciting part of all my previous professions was{' '}
            <span className='bold'>
              crafting admirable user interfaces and landing pages
            </span>
            .
          </p>
          <p>
            Since moving to the United States in 2019 I continued to sharpen my
            coding skills to prepare myself to join you on your next big
            project!
          </p>
        </div>
      </section>
      <section className='container section flex '>
        <h2 className='section-title' id={darkMode ? 'darkTitle' : ''}>
          Skills
        </h2>
        <div className='section-content flex-wide'>
          <div
            className='sub-section skills-section space-around'
            id={darkMode ? 'darkBorder' : ''}
          >
            <h3 id={darkMode ? 'darkTitle' : ''}>Languages</h3>
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
            className='sub-section skills-section space-around'
            id={darkMode ? 'darkBorder' : ''}
          >
            <h3 className='width-180px' id={darkMode ? 'darkTitle' : ''}>
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
            className='sub-section skills-section space-around'
            id={darkMode ? 'darkBorder' : ''}
          >
            <h3 id={darkMode ? 'darkTitle' : ''}>Design</h3>
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
      <section className='container section flex'>
        <h2 className='section-title' id={darkMode ? 'darkTitle' : ''}>
          Projects
        </h2>
        <div className='section-content'>
          <div
            className='sub-section projects-sub-section'
            id={darkMode ? 'darkBorder' : ''}
          >
            <h3 className='width-180px' id={darkMode ? 'darkTitle' : ''}>
              Firstline Properties
            </h3>
            <div className='project-images'>
              <a href='https://firstlinebg.com/'>
                <img
                  className='desktop'
                  src={FLdesktop}
                  alt='Firstline website'
                />
              </a>
              <a href='https://firstlinebg.com/'>
                <img
                  className='mobile'
                  src={FLmobile}
                  alt='Firstline website'
                />
              </a>
            </div>
            <div>
              <p className='project-description'>
                A website for a real estate company in Bulgaria. This website
                was a part of a rebranding and operations optimization process
                where I was tasked with creating new company name, logo, product
                catalogues, Facebook page, CRM solution and a website. The goal
                of the project was to shift company’s focus from Russian
                speaking to the English speaking clients. It was my first web
                development project, and I worked on it with the help of other
                web developer.
              </p>
            </div>
          </div>
          <div
            className='sub-section projects-sub-section'
            id={darkMode ? 'darkBorder' : ''}
          >
            <h3 className='width-150px' id={darkMode ? 'darkTitle' : ''}>
              Travel Hangman
            </h3>
            <div className='project-images'>
              <a href='https://hangman.konstantinbasmanov.com/'>
                <img
                  className='mobile mobile-large'
                  src={Hangman1}
                  alt='Personal Website v1'
                />
              </a>
              <a href='https://hangman.konstantinbasmanov.com/'>
                <img
                  className='mobile mobile-large'
                  src={Hangman2}
                  alt='Personal Website v1'
                />
              </a>
            </div>
            <div>
              <p className='project-description'>
                My first React web application. In this game player has to
                correctly guess the capitals of the random countries. Player can
                choose between different game modes, which include all countries
                of the world (245), countries recognized by united nations (193)
                and different regions. Hangman animations were implemented
                trough GSAP library. Application uses stored{' '}
                <a
                  className={`contact-link ${darkMode ? 'darkLink' : ''}`}
                  href='https://restcountries.eu/rest/v2/all'
                >
                  JSON file from RESTful API
                </a>
                , because of the required multiple computations that would’ve
                slowed down the rendering.
              </p>
            </div>
          </div>
          <div
            className='sub-section projects-sub-section'
            id={darkMode ? 'darkBorder' : ''}
          >
            <h3 className='width-180px' id={darkMode ? 'darkTitle' : ''}>
              Personal Website v1
            </h3>
            <div className='project-images'>
              <a href='https://konstantinbasmanov.com/personal-website-v1/'>
                <img
                  className='desktop'
                  src={PWdesktop}
                  alt='Personal Website v1'
                />
              </a>
              <a href='https://konstantinbasmanov.com/personal-website-v1/'>
                <img
                  className='mobile'
                  src={PWmobile}
                  alt='Personal Website v1'
                />
              </a>
            </div>
            <div>
              <p className='project-description'>
                My first personal website was also the first website that I
                built by myself from scratch using HTML5 and CSS3. I made sure
                that the website is rendered perfectly on both mobile and
                desktop devices by using responsive design techniques. My web
                development skills have improved tremendously since that
                project.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <ul className='footer contact-list'>
          <li>
            <a
              className={`contact-link ${darkMode ? 'darkLink' : ''}`}
              href='mailto:basmanovk@gmail.com'
            >
              email
            </a>
          </li>
          <li>
            <a
              className={`contact-link ${darkMode ? 'darkLink' : ''}`}
              href='https://github.com/whoiskonstantin'
            >
              github
            </a>
          </li>
          <li>
            <a
              className={`contact-link ${darkMode ? 'darkLink' : ''}`}
              href='https://www.linkedin.com/in/basmanov/'
            >
              linkedin
            </a>
          </li>
        </ul>
        <p className='footer'>
          Created by Konstantin Basmanov {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}

export default App
