import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import Footer from './components/Footer/footer';
import Description from './components/Description/Description';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Hero/>
        <Description/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
