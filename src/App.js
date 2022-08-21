import Timer from './Timer'

function App() {
  return (
    <div id='container' className="flex flex-col justify-center h-screen items-center">
      <h1 className='text-4xl font-bold mb-2 font-mono'>25 + 5 Clock</h1>
      <Timer/>
      <p className='font-medium mt-2 text-center font-mono'>Developed and Coded by <br />
      <a href="https://www.freecodecamp.org/reujoe">Joseph Amofa</a>  </p>
    </div>
  );
}

export default App;
