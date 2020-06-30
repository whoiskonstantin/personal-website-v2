import React, { useRef, useEffect } from 'react'
import { gsap, Power0 } from 'gsap'
import 'intersection-observer'
import { useInView } from 'react-intersection-observer'

export default function Background({ darkMode }) {
  async function loadPolyfills() {
    if (typeof window.IntersectionObserver === 'undefined') {
      await import('intersection-observer')
    }
  }
  const [ref, inView] = useInView({
    // triggerOnce: true,
    rootMargin: '-300px'
  })

  const slideIn = () => {
    // console.log('inview')
    gsap.from('.background-animation', {
      x: 100,
      opacity: 0
    })
    gsap.to('.background-animation', {
      x: 0,
      opacity: 1,
      ease: Power0.easeIn,
      duration: 1
    })
  }
  useEffect(() => {
    if (inView) {
      slideIn()
    }
  }, [inView])

  return (
    <section className='container section flex'>
      <h2 className='section-title' id={darkMode ? 'darkTitle' : ''}>
        Background
      </h2>
      <div
        ref={ref}
        style={{ opacity: inView ? 1 : 0 }}
        className='section-content background-animation'
      >
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
          <span className='bold'> web service freelancing</span>. Freelance work
          in the field of web development helped me realize that the most
          exciting part of all my previous professions was{' '}
          <span className='bold'>
            crafting admirable user interfaces and landing pages
          </span>
          .
        </p>
        <p>
          Since moving to the United States in 2019 I continued to sharpen my
          coding skills to prepare myself to join you on your next big project!
        </p>
      </div>
    </section>
  )
}
