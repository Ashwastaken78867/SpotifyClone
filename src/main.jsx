import React from "react"; // Imports React library.
import ReactDOM from "react-dom/client"; // Imports ReactDOM for rendering.
import App from "./App.jsx"; // Imports the main App component.
import Login from "./Login.jsx"; // Imports the Login component.
import "./index.css"; // Imports global CSS styles.
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Imports routing components.
import PlayerContextProvider from "./context/PlayerContext.jsx"; // Imports PlayerContext provider.

ReactDOM.createRoot(document.getElementById("root")).render( // Renders React app into root.
  <React.StrictMode> {/* Enables strict mode for development checks. */}
    <BrowserRouter> {/* Provides routing capabilities to app. */}
      <PlayerContextProvider> {/* Makes player context available globally. */}
        <Routes> {/* Defines a collection of routes. */}
          <Route path="/" element={<Login />} /> {/* Route for the login page. */}
          <Route path="/app" element={<App />} /> {/* Route for the main application. */}
        </Routes>
      </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);