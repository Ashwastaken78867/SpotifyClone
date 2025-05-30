import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.webp";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen bg-green-500 flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
  onClick={() => navigate("/app")}
  className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-6 py-3 rounded-full text-lg hover:bg-green-800 transition"
>
  Login
</button>
    </div>
  );
};

export default Login;
