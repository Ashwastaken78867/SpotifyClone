import { Route, Routes, useLocation } from "react-router-dom" // Imports routing components, location hook.
import DisplayHome from "./DisplayHome" // Imports the home page component.
import DisplayAlbum from "./DisplayAlbum" // Imports the album display component.
import { useEffect, useRef } from "react" // Imports React hooks: effect, ref.
import { albumsData } from "../assets/assets" // Imports album data from assets.

const Display = () => { // Defines the main display component.
    const displayRef = useRef(); // Creates a ref for the display element.
    const location = useLocation(); // Gets current URL location object.
    const isAlbum = location.pathname.includes("album"); // Checks if path includes "album".
    const albumId = isAlbum ? location.pathname.slice(-1) : ""; // Extracts album ID if it's an album.
    const bgColor = albumsData[Number(albumId)].bgColor; // Gets background color from album data.

    useEffect(()=>{ // Runs effect on component render/update.
        if(isAlbum) { // Checks if the current page is an album.
            displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`; // Sets gradient background for album.
        }
        else{ // If not an album page.
            displayRef.current.style.background = "#121212"; // Sets default dark background.
        }
    }) // No dependency array, runs on every render.
    return ( // Renders the display container.
        // Sets ref, styles, and makes container scrollable.
        <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
            <Routes> {/* Defines routing paths. */}
                <Route path="/" element={<DisplayHome/>}/> {/* Route for the home page. */}
                <Route path="/album/:id" element={<DisplayAlbum/>}/> {/* Route for specific album pages. */}
            </Routes>
        </div>
    ) // Ends the component's render.
}

export default Display // Exports the Display component.