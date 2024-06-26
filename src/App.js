import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import Footer from './components/Footer/footer';
import Description from './components/Description/Description';
import AboutAndCompany from './components/AboutAndCompany/AboutCompany';
import Gallery from './components/gallery/Gallery';
import Products from './components/Products2/Products';
import Contact from './components/Contact/Contact';
import Career from './components/Career/Career';
import About from './components/AboutAndCompany/About';
import VisionMission from './components/Description/VisionMission';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<><Hero/><Description/><AboutAndCompany/><Gallery/></>} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/visionmission" element={<VisionMission />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
