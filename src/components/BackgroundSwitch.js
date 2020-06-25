import React from 'react'

export default function BackgroundSwitch({
  darkMode,
  onInputChange,
  count,
  onCount
}) {
  return (
    <div className='switch-container no_highlights'>
      <label className='switch'>
        <input
          name='switch'
          type='checkbox'
          checked={darkMode}
          onChange={e => onInputChange(e)}
        />
        <span className='slider'></span>
      </label>
    </div>
  )
}
