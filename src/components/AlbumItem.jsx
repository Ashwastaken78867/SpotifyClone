import { useNavigate } from "react-router-dom" // Enables navigation in React app.

const AlbumItem = ({image,name,desc,id}) => { // Defines component, accepts image, name, description, ID.

    const navigate = useNavigate() // Hook to programmatically change routes.

    return ( // Renders album item's user interface.
        // Click navigates to album details page.
        <div onClick={()=>navigate(`/album/${id}`)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img className="rounded" src={image} alt="image" /> {/* Displays album cover image. */}
            <p className="font-bold mt-2 mb-1">{name}</p> {/* Shows album's bold title/name. */}
            <p className="text-slate-200 text-sm">{desc}</p> {/* Displays album's description. */}
        </div>
    ) // Ends component's render output.
}

export default AlbumItem // Exports component for use elsewhere.