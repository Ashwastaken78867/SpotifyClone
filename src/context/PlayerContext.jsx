import { createContext, useEffect, useRef, useState } from "react"; // Imports React hooks and createContext.
import { songsData } from "../assets/assets"; // Imports song data.

export const PlayerContext = createContext(); // Creates a React Context for player.

const PlayerContextProvider = (props) => { // Defines the PlayerContextProvider component.
    const audioRef = useRef(); // Ref for the audio element.
    const seekBg = useRef(); // Ref for the seek bar background.
    const seekBar = useRef(); // Ref for the seek bar progress.

    const [track, setTrack] = useState(songsData[0]); // State for current playing track.
    const [playStatus, setPlayStatus] = useState(false); // State for play/pause status.
    const [time, setTime] = useState({ // State for current and total time.
        currentTime: { // Current playback time.
            second: 0, // Current seconds.
            minute: 0, // Current minutes.
        },
        totalTime: { // Total track duration.
            second: 0, // Total seconds.
            minute: 0, // Total minutes.
        },
    });

    const play = () => { // Function to play the audio.
        audioRef.current.play(); // Starts audio playback.
        setPlayStatus(true); // Sets play status to true.
    }

    const pause = () => { // Function to pause the audio.
        audioRef.current.pause(); // Pauses audio playback.
        setPlayStatus(false); // Sets play status to false.
    }

    const playWithId = async (id)=>{ // Function to play song by ID.
        await setTrack(songsData[id]); // Sets new track by ID.
        await audioRef.current.play(); // Starts playing the new track.
        setPlayStatus(true); // Sets play status to true.
    }

    const previous = async ()=> { // Function to play previous song.
        if (track.id>0) { // Checks if not the first track.
            await setTrack(songsData[track.id-1]); // Sets previous track.
            await audioRef.current.play(); // Plays previous track.
            setPlayStatus(true); // Sets play status to true.
        }
    }

    const next = async ()=> { // Function to play next song.
        if (track.id< songsData.length-1) { // Checks if not the last track.
            await setTrack(songsData[track.id+1]); // Sets next track.
            await audioRef.current.play(); // Plays next track.
            setPlayStatus(true); // Sets play status to true.
        }
    }

    const seekSong = async(e) => { // Function to seek song position.
        // Calculates new time based on click position.
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth))* audioRef.current.duration;
    }

    useEffect(()=>{ // Effect hook for time updates.
        setTimeout(() => { // Sets a timeout for updates.

            audioRef.current.ontimeupdate = ()=> { // Updates time on audio progress.
                // Calculates and updates seek bar width.
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
                setTime({ // Updates current and total time.
                    currentTime: { // Updates current time.
                        second: Math.floor(audioRef.current.currentTime % 60), // Current seconds.
                        minute: Math.floor(audioRef.current.currentTime / 60), // Current minutes.
                    },
                    totalTime: { // Updates total time.
                        second: Math.floor(audioRef.current.duration % 60), // Total seconds.
                        minute: Math.floor(audioRef.current.duration / 60), // Total minutes.
                    },
                })
            }

        }, 1000); // Delay for setting up listener.

    },[audioRef]) // Effect re-runs if audioRef changes.

    const contextValue = { // Object holding all context values.
        audioRef, // Audio element reference.
        seekBg, // Seek bar background reference.
        seekBar, // Seek bar progress reference.
        track,setTrack, // Current track and its setter.
        playStatus,setPlayStatus, // Play status and its setter.
        time,setTime, // Playback time and its setter.
        play,pause, // Play and pause functions.
        playWithId, // Function to play by ID.
        previous, // Function to play previous song.
        next, // Function to play next song.
        seekSong // Function to seek song.
    };

    return ( // Provides context values to children.
        <PlayerContext.Provider value={contextValue}>
            {props.children} {/* Renders child components. */}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider; // Exports the PlayerContextProvider.