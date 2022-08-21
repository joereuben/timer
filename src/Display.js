import React from 'react'

export default function Display({ label, time, timer, funcs }) {

    const { playPause, reset } = funcs

    return (
        <div className='text-center'>
            <div className='flex flex-col'>
                <h2 id="timer-label" className={`text-lg font-semibold ${timer < 60 && "text-red-600"}`}>{label}</h2>
                <div id="time-left" className={`text-2xl font-bold ${timer < 60 && "text-red-600"}`}>{time}</div>
                <div>
                    <button id="start_stop" className='p-1 rounded-lg border border-sky-400 mr-1 act-btn' onClick={playPause}>
                        <i id='play_icon' className="fa-solid fa-play fa-lg"></i>
                    </button>
                    <button id="reset" className='p-1 rounded-lg border border-sky-400 ml-1 act-btn' onClick={reset}>
                        <i className="fa-solid fa-rotate fa-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
