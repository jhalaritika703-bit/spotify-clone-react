import { useContext } from "react"
import { Display } from "./components/Display"
import { Player } from "./components/Player"
import { SideBar } from "./components/SideBar"
import { PlayerContext } from "./Context/PlayerContext"


 const App=()=> {
 
const {audioRef,Track}=useContext( PlayerContext);
 

  return (
    <div className='h-screen bg-black'>
       <div className='h-[90%] flex'>
        <SideBar/>
        <Display/>
       </div>
       <Player/>
       <audio ref={audioRef} src={Track?.file} preload="auto"></audio>
    </div>
  )
}

export default App
