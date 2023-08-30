import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const Navbar = lazy(() => import('/Components/BasicExample'));
const About = lazy(() => import("./Components/About"));
const Navbar = lazy(() => import("./Components/Navbar"));
const Slider = lazy(() => import("./Components/Slider"));
const Floating = lazy(() => import("./Components/Floating"));
const Footer = lazy(() => import("./Components/Footer"));
const Teampage = lazy(() => import("./Components/Teampage"));
const Contact = lazy(() => import("./Components/Contact"));
const Gallery = lazy(() => import("./Components/Gallery"));
const Book1 = lazy(() => import("./Components/Book1"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Floating />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Teampage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book1" element={<Book1 />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
