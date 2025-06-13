import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {React, lazy, Suspense} from 'react';
const Header = lazy(() => import('./components/Header/Header'));
const Hero = lazy(() => import('./components/HeroSection/Hero'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Description = lazy(() => import('./components/Description/Description'));
const AboutAndCompany = lazy(() => import('./components/AboutAndCompany/AboutCompany'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const Products = lazy(() => import('./components/Products2/Products'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Career = lazy(() => import('./components/Career/Career'));
const About = lazy(() => import('./components/AboutAndCompany/About'));
const VisionMission = lazy(() => import('./components/Description/VisionMission'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<><Hero/><Description/><AboutAndCompany/><Gallery/></>} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/visionmission" element={<VisionMission />} />
        </Routes>
          </Suspense>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
