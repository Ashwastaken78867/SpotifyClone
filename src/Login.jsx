import { useNavigate } from "react-router-dom"; // Imports hook for navigation.
import logo from "./assets/logo.webp"; // Imports the logo image.

const Login = () => { // Defines the Login component.
  const navigate = useNavigate(); // Initializes navigate function.

  return ( // Renders the login page.
    // Main container with background image.
    <div
      className="h-screen w-screen bg-green-500 flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${logo})`, // Sets background image using logo.
        backgroundSize: "cover", // Covers the entire element.
        backgroundPosition: "center", // Centers the background image.
        backgroundRepeat: "no-repeat", // Prevents image repetition.
      }}
    >
      <button // Login button.
        onClick={() => navigate("/app")} // Navigates to "/app" on click.
        // Styles for button positioning and appearance.
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-6 py-3 rounded-full text-lg hover:bg-green-800 transition"
      >
        Login {/* Button text. */}
      </button>
    </div>
  );
};

export default Login; // Exports the Login component.