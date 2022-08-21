import React from 'react'

export default function Display() {
  return (
    <div className='text-center'>
      <div className='flex flex-col'>
        <h2 id="timer-label" className='text-lg font-semibold'>Session</h2>
        <div id="time-left" className='text-2xl font-bold'>25:00</div>
        <div>
        
            <button id="start_stop" className='p-1 rounded-lg border border-sky-400 mr-1 act-btn'>
            <i className="fa-solid fa-play fa-lg"></i>
            </button>
            <button id="reset" className='p-1 rounded-lg border border-sky-400 ml-1 act-btn'>
            <i className="fa-solid fa-rotate fa-lg"></i>
            </button>
        </div>
      </div>
    </div>
  )
}
