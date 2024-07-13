const Contact = () => {
  return (
    <section id="Contact" className="font-content text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="mb-4 font-title text-2xl font-medium text-gray-900 sm:text-3xl">Contact Us</h1>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="">
                <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full rounded border border-gray-300 bg-gray-100/50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"/>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="">
                <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full rounded border border-gray-300 bg-gray-100/50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"/>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="">
                <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
                <textarea id="message" name="message" className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100/50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button className="mx-auto flex rounded border-0 bg-yellow-500 px-8 py-2 text-lg text-white hover:bg-yellow-600 focus:outline-none">Button</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
