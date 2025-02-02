import { PlayStoreIcon } from "../libs/Icons"
import HERO from "../assets/Images/HeroImg.svg";


const Hero = () => {
  return (
    <section id="Home" className="font-content">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 pt-24">
        <img className="mb-10 w-5/6 rounded object-cover object-center md:w-3/6 lg:w-2/6" alt="hero" src={HERO}/>

        <div className="mb-16 flex w-full flex-col items-center text-center md:w-2/3">
          <h1 className=" mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">Mobile Educational History</h1>
          <p className="mb-8 leading-relaxed">Explore maritime history with ARShip, the app that brings iconic vessels and naval events to life through augmented reality. Perfect for history enthusiasts and educators, ARShip offers an engaging and interactive learning experience.</p>
          
          <div className="flex shadow-lg">
            <a href="https://drive.google.com/file/d/18PfpS5spqqtcFhDUUT1lEiwD4cXMnVXO/view?usp=drive_link" target="_blank" className="inline-flex items-center rounded-lg bg-gray-100 px-5 py-3 transition-colors hover:bg-yellow-300 focus:outline-none">
              <PlayStoreIcon />
              <span className="ml-4 flex flex-col items-start leading-none">
                <span className="mb-1 text-xs text-gray-600">GET IT ON</span>
                <span className="font-medium">Google Play</span>
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
