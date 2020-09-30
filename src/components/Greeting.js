import React, { useState, useEffect } from 'react'
import { gsap, Power0 } from 'gsap'
export default function Greeting() {
  const greetingsList = [
    'Hello!',
    'Здравствуйте!',
    'Hola!',
    'नमस्ते!',
    'Bonjour!',
    'Ciao!',
  ]

  const [indx, setIndx] = useState(0)

  const animationIn = () => {
    gsap.from('.flip', {
      y: 10,
      opacity: 0,
      ease: Power0.easeIn,
      duration: 0.4,
    })
    gsap.to('.flip', { y: 0, opacity: 1, ease: Power0.easeIn, duration: 0.4 })
  }

  const animationOut = () => {
    gsap.to('.flip', {
      y: -10,
      opacity: 0,
      ease: Power0.easeOut,
      duration: 0.4,
    })
  }

  useEffect(() => {
    animationIn()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      animationOut()
      const timeout = setTimeout(() => {
        if (indx < 5) {
          setIndx((indx) => indx + 1)
        } else {
          setIndx(0)
        }
        animationIn()
      }, 1000)
      return () => clearTimeout(timeout)
    }, 3000)
    return () => clearInterval(interval)
  }, [indx])

  return (
    <div className='greeting'>
      <h1 className='flip'>{greetingsList[indx]}</h1>
    </div>
  )
}
