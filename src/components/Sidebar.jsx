import { useNavigate } from "react-router-dom"; //Imports hook for navigation.
import { assets } from "../assets/assets"; //Imports image assets.

const Sidebar = () => { //Defines the Sidebar component.
  const navigate = useNavigate(); //Initializes navigate function.
  return ( //Renders the sidebar layout.
    //Main sidebar container, hidden on small screens.
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around"> {/*Top section: Home and Search.*/}
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer"> {/*Home navigation item.*/}
          <img className="w-6" src={assets.home_icon} alt="" /> {/*Home icon.*/}
          <p className="font-b old">Home</p> {/*Home text label.*/}
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer"> {/*Search navigation item.*/}
          <img className="w-6" src={assets.search_icon} alt="" /> {/*Search icon.*/}
          <p className="font-b old">Search</p> {/*Search text label.*/}
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded"> {/*Bottom section: Library and suggestions.*/}
        <div className="p-4 flex items-center justify-between"> {/*Library header with icons.*/}
          <div className="flex items-center gap-3"> {/*Library icon and title.*/}
            <img className="w-8" src={assets.stack_icon} alt="stack_icon" /> {/*Library stack icon.*/}
            <p className="font-semibold">Your Libary</p> {/*"Your Library" text.*/}
          </div>
          <div className="flex items-center gap-3"> {/*Plus and arrow icons.*/}
            <img className="w-5" src={assets.plus_icon} alt="plus_icon" /> {/*Plus icon.*/}
            <img className="w-5" src={assets.arrow_icon} alt="arrow_icon" /> {/*Arrow icon.*/}
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4"> {/*Create playlist suggestion.*/}
            <h1>Create Your first playlist</h1> {/*Playlist suggestion title.*/}
            <p className="font-light">it's easy we will help you</p> {/*Playlist suggestion description.*/}
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlist</button> {/*Create playlist button.*/}
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4"> {/*Find podcasts suggestion.*/}
            <h1>Let's find some podcasts to follow</h1> {/*Podcasts suggestion title.*/}
            <p className="font-light">We'll keep you updated on new episodes</p> {/*Podcasts suggestion description.*/}
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browse podcasts</button> {/*Browse podcasts button.*/}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; //Exports the Sidebar component.