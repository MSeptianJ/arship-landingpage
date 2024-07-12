import Contact from './components/Contact';
import Developer from './components/Developer';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <Feature />
      <Developer />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
