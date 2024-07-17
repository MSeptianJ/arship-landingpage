const Testimonial = () => {
  return (
    <section id="Testimonial" className="bg-clr3 font-content text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <h1 className="mb-12 text-center font-title text-3xl font-medium text-gray-900">Testimonials</h1>
        <div className="-m-4 flex flex-wrap">
          <div className="w-full p-4 md:w-1/2">
            <div className="h-full rounded bg-gray-100 p-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mb-4 block size-5 text-gray-400" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="mb-6 leading-relaxed">ARShip has transformed the way I explore and understand maritime history. The augmented reality feature is incredibly immersive, allowing me to visualize historic ships right in my living room. It's a fantastic educational tool that's both engaging and informative.</p>
              <a className="inline-flex items-center">
                <img alt="testimonial" src="https://ui-avatars.com/api/?name=Fadhillah%20AMP&background=F19601&color=fff" className="size-12 shrink-0 rounded-full object-cover object-center"/>
                <span className="flex grow flex-col pl-4">
                  <span className="font-title font-medium text-gray-900">Fadhillah AMP</span>
                  <span className="text-sm text-gray-500">Game Developer</span>
                </span>
              </a>
            </div>
          </div>

          <div className="w-full p-4 md:w-1/2">
            <div className="h-full rounded bg-gray-100 p-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mb-4 block size-5 text-gray-400" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="mb-6 leading-relaxed">As a game designer, I'm always on the lookout for innovative ways to learn and be inspired. ARShip's interactive learning approach and detailed 3D models of ships have not only educated me but also sparked new creative ideas for my own projects. It's a must-have app for anyone interested in history or design.</p>
              <a className="inline-flex items-center">
                <img alt="testimonial" src="https://ui-avatars.com/api/?name=Tirta%20Wira&background=F19601&color=fff" className="size-12 shrink-0 rounded-full object-cover object-center"/>
                <span className="flex grow flex-col pl-4">
                  <span className="font-title font-medium text-gray-900">Tirta Wira</span>
                  <span className="text-sm text-gray-500">Game Designer</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
