import React from 'react'
import { Sun } from './Sun'
import { Moon } from './Moon'

export default function BackgroundSwitch({
  darkMode,
  onInputChange,
  count,
  onCount
}) {
  return (
    <div className='switch-container no_highlights'>
      <div className='switch-icons'>
        <Sun darkMode={darkMode} />
      </div>

      <label className='switch'>
        <input
          name='switch'
          type='checkbox'
          checked={darkMode}
          onChange={e => onInputChange(e)}
        />
        <span className='slider'></span>
      </label>
      <div className='switch-icons moon'>
        <Moon darkMode={darkMode} />
      </div>
    </div>
  )
}
