import { useContext } from "react" // Imports React's useContext hook.
import Display from "./components/Display" // Imports the Display component.
import Player from "./components/Player" // Imports the Player component.
import Sidebar from "./components/Sidebar" // Imports the Sidebar component.
import { PlayerContext } from "./context/PlayerContext" // Imports the PlayerContext.

const App = () => { // Defines the main App component.
  const {audioRef,track} = useContext(PlayerContext) // Gets audioRef and track from PlayerContext.
  return ( // Renders the main application layout.
    <div className="h-screen bg-black"> {/* Full screen black background container. */}
      <div className="h-[90%] flex"> {/* Top 90% for sidebar and display. */}
        <Sidebar/> {/* Renders the application sidebar. */}
        <Display/> {/* Renders the main content display area. */}
      </div>
      <Player/> {/* Renders the music player at the bottom. */}
      <audio ref={audioRef} src={track.file} preload="auto"> {/* Audio element for playback. */}

      </audio> {/* Closes the audio tag. */}
    </div>
  )
}

export default App // Exports the App component.