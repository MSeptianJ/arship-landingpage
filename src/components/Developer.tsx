import DEVICON from "../assets/Images/IconJael.svg"

const Developer = () => {
  return (
    <section id="Developer" className="bg-clr2 font-content text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-24">
        <div className="mx-auto lg:w-4/6">
          {/* <div className="h-64 overflow-hidden rounded-lg">
            <img alt="content" className="size-full object-cover object-center" src="https://dummyimage.com/1200x500"/>
          </div> */}
          <div className="mt-10 flex flex-col sm:flex-row">
            <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
              <div className="inline-flex size-20 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                <img src={DEVICON} alt="Developer Icon" />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="mt-4 font-title text-lg font-medium text-gray-900">Jaelani.dev</h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-yellow-500"></div>
                <p className="text-base">Mainly work on Web Development, but decide to jump to game Development</p>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
              <p className="mb-4 text-lg leading-relaxed">Our studio, a creative hub known for its exceptional web design and stunning photography, has recently expanded its horizons to embrace the exciting world of game development. With a team of talented designers and photographers, we've always been passionate about storytelling and visual artistry. Now, we're channeling that passion into creating immersive gaming experiences. Our aim is to combine our expertise in aesthetics and user experience to craft games that are not only visually captivating but also deeply engaging.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Developer
