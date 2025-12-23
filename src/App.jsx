import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import HomePage from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Ecatalouge from "./components/pages/Ecatalouge";
import ContactUs from "./components/pages/ContactUs";
import Products from "./components/pages/Products";
import Visualizer from "./components/pages/Visualizer";
import OurProducts from "./components/pages/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/E-catalouge" element={<Ecatalouge />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/product" element={<OurProducts />} />
        <Route path="/visualizer" element={<Visualizer />} />

        
      </Routes>
    </div>
  );
}

export default App;
