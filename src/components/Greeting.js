import React, { useRef, useState, useEffect } from 'react'
import { gsap, Elastic } from 'gsap'
export default function Greeting() {
  const greetingsList = ['Привет', 'Bonjour', 'Hello']

  let greetingRef = useRef(null)

  const [indx, setIndx] = useState(0)

  // const [animation, setAnimation] = useState(
  //   gsap.from(greetingRef, { y: 20, opacity: 0 })
  // )

  // const animation = () => {
  //   gsap.from('.flip', { y: 20, opacity: 0 })
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (indx < 2) {
  //       setIndx(indx => indx + 1)
  //     } else {
  //       setIndx(0)
  //     }
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [indx])

  return (
    <h1
      className='flip'
      ref={element => {
        greetingRef = element
      }}
    >
      {greetingsList[indx]},
    </h1>
  )
}
