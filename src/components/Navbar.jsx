import { useNavigate } from "react-router-dom"; // Imports hook for navigation.
import { assets } from "../assets/assets"; // Imports image assets.

const Navbar = () => { // Defines the Navbar component.
    const naviagte = useNavigate() // Initializes navigate function.
    return ( // Renders the navigation bar.
        <> {/* React Fragment for multiple elements. */}
            {/* Top row: navigation arrows and user actions. */}
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2"> {/* Container for navigation arrows. */}
                    {/* Left arrow icon for backward navigation. */}
                    <img
                        className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
                        src={assets.arrow_left}
                        alt=""
                        onClick={()=>naviagte(-1)} // Navigates back one step.
                    />
                    {/* Right arrow icon for forward navigation. */}
                    <img
                        className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
                        src={assets.arrow_right}
                        alt=""
                        onClick={()=>naviagte(+1)} // Navigates forward one step.
                    />
                </div>
                <div className="flex items-center gap-4"> {/* Container for user action buttons. */}
                    {/* "Explore Premium" button, hidden on small screens. */}
                    <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
                        Explore Premium
                    </p>
                    {/* "Install App" button. */}
                    <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
                        Install App
                    </p>
                    {/* User profile initial 'B'. */}
                    <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
                        B
                    </p>
                </div>
            </div>
            {/* Bottom row: content filters. */}
            <div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 rounded-2xl">All</p> {/* "All" filter button. */}
                <p className="bg-[#242424] cursor-pointer  px-4 py-1 rounded-2xl">Music</p> {/* "Music" filter button. */}
                <p className="bg-[#242424] cursor-pointer  px-4 py-1 rounded-2xl">Podcasts</p> {/* "Podcasts" filter button. */}
            </div>
        </> // Ends React Fragment.
    );
};

export default Navbar; // Exports the Navbar component.