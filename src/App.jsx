import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";
import Signup from "./Components/Signup/Signup";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {location.pathname !== "/signup" && <Footer />}
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationEnd = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {isLoading ? (
        <Loading onAnimationEnd={handleAnimationEnd} />
      ) : (
        <AppContent />
      )}
    </Router>
  );
}

export default App;
