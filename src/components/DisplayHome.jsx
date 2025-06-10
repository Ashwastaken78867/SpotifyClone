import Navbar from "./Navbar" // Imports the Navbar component.
import { albumsData } from "../assets/assets" // Imports album data.
import AlbumItem from "./AlbumItem" // Imports AlbumItem component.
import { songsData } from "../assets/assets" // Imports songs data.
import SongItem from "./SongItem" // Imports SongItem component.

const DisplayHome = () => { // Defines the DisplayHome component.
    return ( // Starts component's JSX rendering.
        <> {/* React Fragment for multiple elements. */}
        <Navbar/> {/* Renders the navigation bar. */}
        <div className="mb-4"> {/* Container for featured charts section. */}
            <h1 className="my-5 font-bold text-2xl">Featured Charts</h1> {/* Section title: Featured Charts. */}
            <div className="flex overflow-auto"> {/* Flex container for scrollable albums. */}
            {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id}
            image={item.image}/>))} {/* Renders AlbumItem for each album. */}
            </div>
        </div>
        <div className="mb-4"> {/* Container for today's hits section. */}
            <h1 className="my-5 font-bold text-2xl">Today&apos;s biggest hits</h1> {/* Section title: Today's hits. */}
            <div className="flex overflow-auto"> {/* Flex container for scrollable songs. */}
            {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id}
            image={item.image}/>))} {/* Renders SongItem for each song. */}
            </div>
        </div>
        </> // Ends React Fragment.
    ) // Ends component's render.
}

export default DisplayHome // Exports the DisplayHome component.