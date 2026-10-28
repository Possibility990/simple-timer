import { useRef, useState } from "react";

const App = () => {
 
  const timerRef = useRef(null)
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const handleTimer = () => {
   if(isRunning){
        clearInterval(timerRef.current)
      
   }else{
        timerRef.current =   setInterval(()=>{
        setTimer((prev)=>{
              return prev + 1
          })
        }, 1000)
   }
   setIsRunning(!isRunning)
  }


  const handleReset = () => {
    clearInterval(timerRef.current)
    setTimer(0)
    timerRef.current = null
     setIsRunning(false)

  }

  return ( 
    <div className="w-md p-3 rounded mx-auto text-center bg-gray-200 mt-2 shadow ">
      <h2 className="p-2 font-bold">Timer: {timer}</h2>
      <button onClick={handleTimer} className="bg-green-900 rounded text-white p-2 hover:bg-green-500">{isRunning? "Stop" :"Start"}</button>
      <button onClick={handleReset} className="bg-red-500 rounded text-white p-2 mx-3 hover:bg-red-900">Reset</button>
    </div>
   );
}
 
export default App;