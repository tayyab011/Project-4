import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Onscroll from "./Components/Onscroll";
import Parallax from "./Components/Parallax";
import TextAnimation from "./Components/TextAnimation";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Onscroll />} />
        <Route path="/about" element={<Parallax />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<TextAnimation />} />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
