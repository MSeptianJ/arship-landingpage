import { PlayStoreIcon } from "../libs/Icons"
import HERO from "../assets/Images/HeroImg.svg";
import WAVEA from "../assets/Images/Vector-1.svg";
import WAVEB from "../assets/Images/Vector-2.svg";
import WAVEC from "../assets/Images/Vector-3.svg";

const Hero = () => {
  return (
    <section id="Home" className="font-content">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
        <img className="mb-10 w-5/6 rounded object-cover object-center md:w-3/6 lg:w-2/6" alt="hero" src={HERO}/>


        <div className="mb-4 flex w-full flex-col items-center text-center md:w-2/3">
          <h1 className=" mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">Mobile Educational History</h1>
          <p className="mb-8 leading-relaxed">Explore maritime history with ARShip, the app that brings iconic vessels and naval events to life through augmented reality. Perfect for history enthusiasts and educators, ARShip offers an engaging and interactive learning experience.</p>
          
          <div className="flex">
            <button className="inline-flex items-center rounded-lg bg-gray-100 px-5 py-3 hover:bg-gray-200 focus:outline-none">
              <PlayStoreIcon />
              <span className="ml-4 flex flex-col items-start leading-none">
                <span className="mb-1 text-xs text-gray-600">GET IT ON</span>
                <span className="font-medium">Google Play</span>
              </span>
            </button>
          </div>
        </div>

        <div className="w-screen">
          <div className="relative h-60 w-full">
            <img className="absolute bottom-0 left-0 max-h-60 w-full object-cover" src={WAVEC} alt="" />
            <img className="absolute bottom-0 left-0 max-h-60 w-full object-cover" src={WAVEB} alt="" />
            <img className="absolute bottom-0 left-0 max-h-60 w-full object-cover" src={WAVEA} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
