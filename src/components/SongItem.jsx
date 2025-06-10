import { useContext } from "react" // Imports React's useContext hook.
import { PlayerContext } from "../context/PlayerContext" // Imports the PlayerContext.

const SongItem = ({name,image,desc,id}) => { // Defines component, accepts name, image, description, ID.

    const {playWithId} = useContext(PlayerContext) // Gets playWithId from context.

    return ( // Renders song item's user interface.
        // Click plays song using its ID.
        <div onClick={()=> playWithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img className="rounded" src={image} alt="" /> {/* Displays song cover image. */}
            <p className="font-bold mt-2 mb-1">{name}</p> {/* Shows song's bold title. */}
            <p className="text-slate-200 text-sm">{desc}</p> {/* Displays song's description. */}
        </div>
    ) // Ends component's render output.
}

export default SongItem // Exports component for use elsewhere.