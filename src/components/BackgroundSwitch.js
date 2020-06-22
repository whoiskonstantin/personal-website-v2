import React from 'react'

export default function BackgroundSwitch() {
  return (
    <div className='switch-container'>
      <input type='checkbox' name='switch' id='switch' />
      <label htmlFor='switch' id='toggle'></label>
    </div>
  )
}
