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
            <h3 className='tools-res-title' id={darkMode ? 'darkTitle' : ''}>
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
      <section className='container flex'>
        <h2 className='section-title' id={darkMode ? 'darkTitle' : ''}>
          Projects
        </h2>
        <div className='section-content'>
          <div
            className='sub-section projects-sub-section'
            id={darkMode ? 'darkBorder' : ''}
          >
            <h3 id={darkMode ? 'darkTitle' : ''}>Firstline Properties</h3>
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
            <div>
              <p>
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
            <h3 id={darkMode ? 'darkTitle' : ''}>Travel Hangman</h3>
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
            <div>
              <p>
                My first React web application. In this game player has to
                correctly guess the capitals of the random countries. Player can
                choose between different game modes, which include all countries
                of the world (245), countries recognized by united nations (193)
                and different regions from those lists. It uses my own graphics
                and animations implemented trough GSAP library. Application uses
                stored JSON file from RESTful API
                (https://restcountries.eu/rest/v2/all). Biggest challenge with
                this project was to filter and update the objects from JSON
                file. Some of those updates were: to add properties for
                countries recognized and not recognized by UN, and to sort
                through and change special letters like é, å, û to e, a u. All
                of those manipulations were done with javascript functions.
              </p>
            </div>
          </div>
          <div
            className='sub-section projects-sub-section'
            id={darkMode ? 'darkBorder' : ''}
          >
            <h3 id={darkMode ? 'darkTitle' : ''}>Personal Website v1</h3>
            <div className='project-images'>
              <img
                className='desktop'
                src={PWdesktop}
                alt='Personal Website v1'
              />
              <img
                className='mobile'
                src={PWmobile}
                alt='Personal Website v1'
              />
            </div>
            <div>
              <p>
                My first personal website was also the first website that I
                built by myself from scratch using HTML5 and CSS3. I made sure
                that the website is compatible with mobile devices by
                implementing CSS flex box layout. My web development skills have
                improved tremendously since that project.
              </p>
            </div>
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
