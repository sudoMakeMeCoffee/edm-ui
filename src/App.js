import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import CreateEvent from "./pages/CreateEvent";
function App() {
  const location = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/check-auth", {
        withCredentials: true,
      })
      .then(() => {
        // ✅ Authenticated
        setIsAuthenticated(true);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);


  // Define routes where you DON'T want the Navbar
  const hideNavbarRoutes = ["/signin", "/signup"];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (

    <>
      {!hideNavbar && <Navbar isAuthenticated={isAuthenticated}/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to={"/"} /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={isAuthenticated ? <Navigate to={"/"} /> : <SignIn />}
        />
        <Route path="/event/create" element={<CreateEvent/>}/>
      </Routes>
    </>
  );
}

export default App;
