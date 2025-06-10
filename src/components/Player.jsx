import { useContext } from "react"; // Imports React's useContext hook.
import { assets } from "../assets/assets"; // Imports image assets.
import { PlayerContext } from "../context/PlayerContext"; // Imports player context.
const Player = () => { // Defines the Player component.
    const { seekBar, seekBg, playStatus, play, pause, track, time, previous, next, seekSong } = // Destructures values from PlayerContext.
        useContext(PlayerContext); // Accesses PlayerContext's values.
    return ( // Renders the player interface.
        // Main player container with styling.
        <div
            className="h-[10%] bg-black flex justify-between items-center
        text-white px-4"
        >
            <div className="hidden lg:flex items-center gap-4"> {/* Song info (hidden on small screens). */}
                <img className="w-12" src={track.image} alt="song_Data" /> {/* Displays current song image. */}
                <div> {/* Container for song name and description. */}
                    <p>{track.name}</p> {/* Displays current song name. */}
                    <p className="">{track.desc.slice(0, 43)}</p> {/* Displays truncated song description. */}
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto"> {/* Player controls and seek bar. */}
                <div className="flex gap-4"> {/* Container for playback control buttons. */}
                    <img // Shuffle icon button.
                        className="w-4 cursor-pointer"
                        src={assets.shuffle_icon}
                        alt=""
                    />
                    <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" /> {/* Previous song button. */}
                    {playStatus ? ( // Conditional rendering based on play status.
                        <img // Pause button if music is playing.
                            onClick={pause}
                            className="w-4 cursor-pointer"
                            src={assets.pause_icon}
                            alt=""
                        />
                    ) : ( // Otherwise, show play button.
                        <img // Play button if music is paused.
                            onClick={play}
                            className="w-4 cursor-pointer"
                            src={assets.play_icon}
                            alt=""
                        />
                    )}

                    <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="" /> {/* Next song button. */}
                    <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" /> {/* Loop icon button. */}
                </div>
                <div className="flex items-center gap-5"> {/* Current time, seek bar, total time. */}
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p> {/* Displays current playback time. */}
                    <div // Seek bar background.
                        ref={seekBg}
                        onClick={seekSong}
                        className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
                    >
                        <hr // Seek bar progress indicator.
                            ref={seekBar}
                            className="h-1 border-none w-0 bg-green-800 rounded-full"
                        />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p> {/* Displays total song time. */}
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75"> {/* Extra controls (hidden on small). */}
                <img className="w-4" src={assets.plays_icon} alt="" /> {/* Plays icon. */}
                <img className="w-4" src={assets.mic_icon} alt="" /> {/* Microphone icon. */}
                <img className="w-4" src={assets.queue_icon} alt="" /> {/* Queue icon. */}
                <img className="w-4" src={assets.speaker_icon} alt="" /> {/* Speaker icon. */}
                <img className="w-4" src={assets.volume_icon} alt="" /> {/* Volume icon. */}
                <div className="w-20 bg-slate-50 h-1 rounded"></div> {/* Volume bar visual. */}
                <img className="w-4" src={assets.mini_player_icon} alt="" /> {/* Mini-player icon. */}
                <img className="w-4" src={assets.zoom_icon} alt="" /> {/* Zoom icon. */}
            </div>
        </div>
    );
};

export default Player; // Exports the Player component.