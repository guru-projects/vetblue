import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import Footer from './components/Footer/footer';
import Description from './components/Description/Description';
import AboutAndCompany from './components/AboutAndCompany/AboutCompany';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Hero/>
        <Description/>
        <AboutAndCompany/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
