import React, {useState} from 'react'
import Durations from './Durations'
import Display from './Display'

export default function Timer() {

    const [breakLength, setBreakLength] = useState(5)
    const [sessionLength, setSessionLength] = useState(25)

  return (
    <div id='timer' className='p-6 bg-white rounded shadow-md flex flex-col gap-10'>
        <Durations breakLength={breakLength} sessionLength={sessionLength}/>
        <Display/>
      
    </div>
  )
}
