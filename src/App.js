import React from "react";
import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Booking />
      <Footer />
    </>
  );
}

export default App;
