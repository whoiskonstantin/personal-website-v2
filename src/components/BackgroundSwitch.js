import React from 'react'

export default function BackgroundSwitch({
  darkMode,
  onInputChange,
  count,
  onCount
}) {
  console.log(darkMode)
  return (
    <div className='switch-container'>
      <form>
        <label className='switch'>
          <input
            name='switch'
            type='checkbox'
            checked={darkMode}
            onChange={e => onInputChange(e)}
          />
          <span className='slider'></span>
        </label>
      </form>
    </div>
  )
}
