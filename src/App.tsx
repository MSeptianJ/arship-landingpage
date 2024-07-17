import Contact from './components/Contact';
import Developer from './components/Developer';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import WAVEA from "./assets/Images/Vector-1.svg";
import WAVEB from "./assets/Images/Vector-2.svg";
import WAVEC from "./assets/Images/Vector-3.svg";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />

      <div className="w-full">
        <img className="size-full" src={WAVEC} alt="" />
      </div>

      <Feature />

      <div className="w-full bg-clr1">
        <img className="size-full" src={WAVEB} alt="" />
      </div>

      <Testimonial />

      <div className="w-full bg-clr2">
        <img className="size-full" src={WAVEA} alt="" />
      </div>

      <Contact />
      <Developer />
      <Footer />
    </div>
  );
}

export default App;
