const Feature = () => {
  return (
    <section id="Feature" className="font-content text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto mb-10 flex flex-col items-center border-b border-gray-200 pb-10 sm:flex-row lg:w-3/5">
          <div className="inline-flex size-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500 sm:mr-10 sm:size-32">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="size-10 sm:size-16" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="mt-6 grow text-center sm:mt-0 sm:text-left">
            <h2 className="mb-2 font-title text-lg font-medium text-gray-900">Shooting Stars</h2>
            <p className="text-base leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 inline-flex items-center text-blue-500">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="ml-2 size-4" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-auto mb-10 flex flex-col items-center border-b border-gray-200 pb-10 sm:flex-row lg:w-3/5">
          <div className="mt-6 grow text-center sm:mt-0 sm:text-left">
            <h2 className="mb-2 font-title text-lg font-medium text-gray-900">The Catalyzer</h2>
            <p className="text-base leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 inline-flex items-center text-blue-500">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="ml-2 size-4" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="order-first inline-flex size-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500 sm:order-none sm:ml-10 sm:size-32">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="size-10 sm:size-16" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center sm:flex-row lg:w-3/5">
          <div className="inline-flex size-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500 sm:mr-10 sm:size-32">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="size-10 sm:size-16" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="mt-6 grow text-center sm:mt-0 sm:text-left">
            <h2 className="mb-2 font-title text-lg font-medium text-gray-900">The 400 Blows</h2>
            <p className="text-base leading-relaxed">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 inline-flex items-center text-blue-500">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="ml-2 size-4" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <button className="mx-auto mt-20 flex rounded border-0 bg-blue-500 px-8 py-2 text-lg text-white hover:bg-blue-600 focus:outline-none">Button</button>
      </div>
    </section>
  )
}

export default Feature
