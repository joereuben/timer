import React from 'react'

export default function Durations({breakLength, sessionLength, funcs}) {
    const {increaseBreak, decreaseBreak, increaseSession, decreaseSession} = funcs

  return (
    <div className='flex gap-10'>
      <div>
        <h2 id="break-label" className='text-lg font-semibold'>Break Length</h2>
        <div className='text-center mt-2'>
            <button id="break-decrement" className='p-1 w-8 rounded-lg border border-sky-400 mr-1' onClick={decreaseBreak}>-</button>
            <span id="break-length" className='text-lg font-semibold'>{breakLength}</span>
            <button id="break-increment" className='p-1 w-8 rounded-lg border border-sky-400 ml-1' onClick={increaseBreak}>+</button>
        </div>
      </div>
      <div>
        <h2 id="session-label" className='text-lg font-semibold'>Session Length</h2>
        <div className='text-center mt-2'>
            <button id="session-decrement" className='p-1 w-8 rounded-lg border border-sky-400 mr-1' onClick={decreaseSession}>-</button>
            <span id="session-length" className='text-lg font-semibold'>{sessionLength}</span>
            <button id="session-increment" className='p-1 w-8 rounded-lg border border-sky-400 ml-1' onClick={increaseSession}>+</button>
        </div>
      </div>
    </div>
  )
}
