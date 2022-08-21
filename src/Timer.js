import React, { useState, useEffect } from "react";
import Durations from "./Durations";
import Display from "./Display";

let interval;

export default function Timer() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLabel, setLabel] = useState("Session");
  const [time, setTime] = useState("25:00");
  const [timer, setTimer] = useState(1500); // 25 minutes in seconds
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [isBreakTime, setBreakTime] = useState(false);

  function increaseBreak() {
    if(isTimerRunning) return
    if (breakLength < 60) setBreakLength(breakLength + 1);
  }

  function decreaseBreak() {
    if(isTimerRunning) return
    if (breakLength > 1) setBreakLength(breakLength - 1);
  }

  function increaseSession() {
    if(isTimerRunning) return
    if (sessionLength < 60) setSessionLength(sessionLength + 1);
  }

  function decreaseSession() {
    if(isTimerRunning) return
    if (sessionLength > 1) setSessionLength(sessionLength - 1);
  }

  function playPause() {
    // console.log("play pause clicked")
    clearInterval(interval)
    if (isTimerRunning) {
        document.getElementById('play_icon').classList.remove('fa-pause')
        document.getElementById('play_icon').classList.add('fa-play')
        setTimerRunning(false)
    }else{
        document.getElementById('play_icon').classList.remove('fa-play')
        document.getElementById('play_icon').classList.add('fa-pause')
        countDown() 
        setTimerRunning(true)
    }
  }

  //anytime the timer changes
  useEffect(() => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    setTime(minutes + ':' + seconds)
    if(timer === 0 && !isBreakTime){//end of session
        beep()
        setBreakTime(true)
        setLabel("Break")// change label
        setTimer(breakLength * 60)// set timer to break length
    }else if(timer === 0 && isBreakTime){//end of break
        beep()
        setBreakTime(false)
        setLabel("Session")// change label
        setTimer(sessionLength * 60)// set timer to break length
    }
  }, [timer]);

  //when the session length changes
  useEffect(() => {
    setTimer(sessionLength * 60)
  }, [sessionLength]);

  function countDown() {
    interval = setInterval(() => {  
        setTimer(val => val - 1)  
    }, 1000);
    
  }
  function reset() {
    clearInterval(interval)
    setTimerRunning(false)
    setBreakLength(5)
    setSessionLength(25)
    setLabel("Session")
    setTime("25:00")
    setTimer(1500)
    document.getElementById('beep').pause()
    document.getElementById('beep').currentTime = 0 
  }

  function beep() {
    document.getElementById('beep').currentTime = 0
    document.getElementById('beep').play()
  }


  return (
    <div
      id="timer"
      className="p-6 bg-white rounded shadow-md flex flex-col gap-10"
    >
      <Durations
        breakLength={breakLength}
        sessionLength={sessionLength}
        funcs={{
          increaseBreak: increaseBreak,
          decreaseBreak: decreaseBreak,
          increaseSession: increaseSession,
          decreaseSession: decreaseSession,
        }}
      />
      <Display
        label={timerLabel}
        time={time}
        timer={timer}
        funcs={{
          playPause: playPause,
          reset: reset,
        }}
      />

        <audio
          id="beep"
          preload="auto"
          
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      
    </div>
  );
}
