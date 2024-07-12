import { PlayStoreIcon } from "../libs/Icons"

const Hero = () => {
  return (
    <section id="Top" className=" text-gray-600">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
        <img className="mb-10 w-5/6 rounded object-cover object-center md:w-3/6 lg:w-2/6" alt="hero" src="https://dummyimage.com/720x600"/>
        <div className="mb-16 flex w-full flex-col items-center text-center md:w-2/3">
          <h1 className=" mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">Knausgaard typewriter readymade marfa</h1>
          <p className="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>
          <div className="flex w-full items-end justify-center">
            <div className="mr-4 w-2/4 text-left md:w-full lg:w-full xl:w-1/2">
              <label htmlFor="hero-field" className="text-sm leading-7 text-gray-600">Placeholder</label>
              <input type="text" id="hero-field" name="hero-field" className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200"/>
            </div>
            <button className="inline-flex rounded border-0 bg-blue-500 px-6 py-2 text-lg text-white hover:bg-blue-600 focus:outline-none">Button</button>
          </div>
          <p className="mb-8 mt-2 w-full text-sm text-gray-500">Neutra shabby chic ramps, viral fixie.</p>
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
      </div>
    </section>
  )
}

export default Hero
