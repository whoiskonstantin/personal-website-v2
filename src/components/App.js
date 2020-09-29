import React, { useState } from 'react'
import BackgroundSwitch from './BackgroundSwitch'
import Greeting from './Greeting'
import ArrayDesktop from '../resources/showcase/array-desktop.png'
import ArrayMobile from '../resources/showcase/array-mobile.png'
import Hangman1 from '../resources/showcase/hangman-1.png'
import Hangman2 from '../resources/showcase/hangman-2.png'
import FLdesktop from '../resources/showcase/firstline-desktop.png'
import FLmobile from '../resources/showcase/firstline-mobile.png'

function App() {
  const handleBackgorundColor = () => {
    let time = new Date().getHours()
    if (time > 19 || time < 8) {
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
      <header className='container'>
        <Greeting />
        <h2 className='intro'>
          I’m <span className='bold'>Konstantin Basmanov</span>, a front-end software engineer based
          in Arlington Heights, IL with a passion for building captivating interfaces for mobile and
          desktop devices.
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
            with a BA degree in Business Administration focusing on Finance and Economics in 2015.
          </p>
          <p>
            After my graduation I worked in management, marketing and sales positions in Bulgaria,
            Russian Federation and United Arab Emirates.
          </p>
          <p>
            In 2017, I began to freelance for web development and design. Freelance work in the
            field of web development helped me realize that the most exciting part of all my
            previous professions was crafting user interfaces and landing pages that people love.
          </p>
          <p>When I am not at my work desk I go mountain biking, snowboarding and photographing.</p>
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
          <div className='sub-section projects-sub-section' id={darkMode ? 'darkBorder' : ''}>
            <h3 className='width-180px' id={darkMode ? 'darkTitle' : ''}>
              Firstline Properties
            </h3>
            <div className='project-images'>
              <a href='https://firstlinebg.com/' target='_blank' rel='noopener noreferrer'>
                <img className='desktop' src={FLdesktop} alt='Firstline website' />
              </a>
              <a href='https://firstlinebg.com/' target='_blank' rel='noopener noreferrer'>
                <img className='mobile' src={FLmobile} alt='Firstline website' />
              </a>
            </div>
            <div>
              <p className='project-description'>
                I <b>designed</b> and <b>built</b> this website for a real estate company in
                Bulgaria. In this project I was tasked with creating a <b>CMS</b> solution, so that
                company employees can easily add, edit and delete real estate listings. This project
                also included <b>SEO optimization</b>, and <b>hosting</b> and{' '}
                <b>domain configuration</b>. As part of the rebranding and sales streamlining
                process I also created a new company name, logo, product catalogues, Facebook page
                and a CRM solution.
              </p>
            </div>
          </div>
          <div className='sub-section projects-sub-section' id={darkMode ? 'darkBorder' : ''}>
            <h3 className='width-60px' id={darkMode ? 'darkTitle' : ''}>
              Array
            </h3>
            <div className='project-images'>
              <a
                href='https://konstantinbasmanov-nextjs-lwkoyq3yc.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img className='desktop' src={ArrayDesktop} alt='Personal Website v1' />
              </a>
              <a
                href='https://konstantinbasmanov-nextjs-lwkoyq3yc.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img className='mobile' src={ArrayMobile} alt='Personal Website v1' />
              </a>
            </div>
            <div>
              <p className='project-description'>
                Built user interface components for Array, a company that offers b2b solutions where
                users can manage their credit score. This project uses <b>Server Side Rendering</b>{' '}
                with <b>React</b> and <b>NextJS</b>, <b>RESTful API</b>, and tests with{' '}
                <b>Cypress</b>. For demonstration purposes the app simulates a logged in user so
                that the visitor can test it by toggling Id Protection and Credit Lock. I also built
                a <b>Web Component</b> that could be used by any framework, which uses{' '}
                <b>Chart.js</b> and can be viewed on Credit Score page.
              </p>
            </div>
          </div>
          <div className='sub-section projects-sub-section' id={darkMode ? 'darkBorder' : ''}>
            <h3 className='width-150px' id={darkMode ? 'darkTitle' : ''}>
              Travel Hangman
            </h3>
            <div className='project-images'>
              <a
                href='https://hangman.konstantinbasmanov.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img className='mobile mobile-large' src={Hangman1} alt='Personal Website v1' />
              </a>
              <a
                href='https://hangman.konstantinbasmanov.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img className='mobile mobile-large' src={Hangman2} alt='Personal Website v1' />
              </a>
            </div>
            <div>
              <p className='project-description'>
                A simple game that I built with React. Gameplay animations were implemented through{' '}
                <b>GSAP</b> library. Application uses a cached{' '}
                <a
                  className={`contact-link ${darkMode ? 'darkLink' : ''}`}
                  href='https://restcountries.eu/rest/v2/all'
                >
                  JSON response from <b>RESTful API</b>
                </a>
                , to eliminate time required to complete multiple computations. It also uses{' '}
                <b>Google Maps API</b> to display the capital on the map when the user guesses it
                correctly. I used <b>Lodash</b> library and my own methods to filter and eliminate
                special letters from capital names like “Brasília” > “Brasilia”, and to divide
                countries between UN recognized and non-recognized. Used <b>React.memo()</b> in
                keyboard components to prevent useless rendering. Used <b>AWS Amplify</b> for CI/CD.
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
        <p className='footer'>Created by Konstantin Basmanov {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
