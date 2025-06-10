import { useParams } from "react-router-dom"; // Imports hook for URL parameters.
import Navbar from "./Navbar"; // Imports the Navbar component.
import { albumsData, assets, songsData } from "../assets/assets"; // Imports data and assets.
import { useContext } from "react"; // Imports React's useContext hook.
import { PlayerContext } from "../context/PlayerContext"; // Imports player context.

const DisplayAlbum = () => { // Defines the DisplayAlbum component.
    const { id } = useParams(); // Extracts album ID from URL.
    const albumData = albumsData[id] // Gets album data by ID.
    const {playWithId} = useContext(PlayerContext) // Gets playWithId from context.
    return ( // Starts component's JSX rendering.
        <div> {/* Main container for album display. */}
            <Navbar /> {/* Renders the navigation bar. */}
            {/* Flex container for album image and details. */}
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img className="w-48 rounded" src={albumData.image} alt="" /> {/* Displays album cover image. */}
                <div className="flex flex-col"> {/* Container for album text details. */}
                    <p>Playlist</p> {/* Static text "Playlist". */}
                    <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2> {/* Album name as main heading. */}
                    <h4>{albumData.desc}</h4> {/* Album description text. */}
                    <p className="mt-1"> {/* Paragraph for album stats. */}
                        <img className="inline-block w-5" src={assets.spotify_logo} alt="" /> {/* Spotify logo image. */}
                        <b> Spotify </b> {/* "Spotify" text, bolded. */}
                        <b>• 1,232,123 saves </b> {/* Saves count, bolded. */}
                        • <b>50 songs,</b> {/* Songs count, bolded. */}
                        <span className="text-[#a7a7a7]"> about 2hr 30 min</span> {/* Total duration in grey. */}
                    </p>
                </div>
            </div>
            {/* Grid for song list headers. */}
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p><b className="mr-4">#</b>Title</p> {/* Song number and title header. */}
                <p>Album</p> {/* Album header. */}
                <p className="hidden sm:block">Date Added</p> {/* Date added header, hidden on small. */}
                <img className="m-auto w-4" src={assets.clock_icon} alt="" /> {/* Clock icon for duration. */}
            </div>
            <hr /> {/* Horizontal rule separator. */}
            {songsData.map((item, index) => ( // Maps through songsData to render each song.
                // Clickable song item, plays song on click.
                <div onClick={() => playWithId(item.id)} key={item.id} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                    <div className="text-white text-sm md:text-[15px]"> {/* Container for song number, image, title. */}
                        <b className="mr-4 text-[#a7a7a7]">{index + 1}</b> {/* Song number. */}
                        <img className="inline w-10 mb-5 mr-5" src={item.image} alt={item.name} /> {/* Song image. */}
                        <div className="inline-block"> {/* Container for song name and description. */}
                            <div>{item.name.slice(0, 20)}</div> {/* Truncated song name. */}
                            <div className="text-[#a7a7a7]">{item.desc.slice(0, 20)}</div> {/* Truncated song description. */}
                        </div>
                    </div>
                    <p className="text-[15px]">{albumData.name}</p> {/* Displays album name for song. */}
                    <p className="text-[15px] hidden sm:block">5 days ago</p> {/* Static date added. */}
                    <p className="text-[15px] text-center">{item.duration}</p> {/* Song duration. */}
                </div>
            ))}
        </div>

    );
};

export default DisplayAlbum; // Exports the DisplayAlbum component.