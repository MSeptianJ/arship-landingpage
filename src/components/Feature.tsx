import { ARIcon, HistoryIcon, InteractiveIcon } from "../libs/Icons"

const Feature = () => {
  return (
    <section id="Feature" className="bg-clr1 font-content text-gray-600">
      <div className="container mx-auto px-5 py-24">

        <div className="mx-auto mb-10 flex flex-col items-center border-b border-gray-200 pb-10 sm:flex-row lg:w-3/5">
          <div className="inline-flex size-20 shrink-0 items-center justify-center rounded-full bg-yellow-100 p-5 text-accent sm:mr-10 sm:size-32 md:p-10">
            <HistoryIcon />
          </div>

          <div className="mt-6 grow text-center sm:mt-0 sm:text-left">
            <h2 className="mb-2 font-title text-lg font-medium text-gray-900">History Education</h2>
            <p className="text-base leading-relaxed">Dive into the rich history of maritime exploration and shipbuilding. ARShip offers detailed insights into significant vessels, famous voyages, and the evolution of naval technology, making history education both informative and engaging.</p>
          </div>
        </div>

        <div className="mx-auto mb-10 flex flex-col items-center border-b border-gray-200 pb-10 sm:flex-row lg:w-3/5">
          <div className="mt-6 grow text-center sm:mt-0 sm:text-left">
            <h2 className="mb-2 font-title text-lg font-medium text-gray-900">Augmented Reality</h2>
            <p className="text-base leading-relaxed">Experience history like never before with our augmented reality feature. Visualize historic ships in your environment, explore detailed 3D models, and interact with maritime artifacts to enhance your learning experience.</p>
          </div>

          <div className="order-first inline-flex size-20 shrink-0 items-center justify-center rounded-full bg-yellow-100 p-5 text-accent sm:order-none sm:ml-10 sm:size-32 md:p-10">
            <ARIcon />
          </div>
        </div>

        <div className="mx-auto flex flex-col items-center sm:flex-row lg:w-3/5">
          <div className="inline-flex size-20 shrink-0 items-center justify-center rounded-full bg-yellow-100 p-5 text-accent sm:mr-10 sm:size-32 md:p-10">
            <InteractiveIcon />
          </div>

          <div className="mt-6 grow text-center sm:mt-0 sm:text-left">
            <h2 className="mb-2 font-title text-lg font-medium text-gray-900">Interactive Learning</h2>
            <p className="text-base leading-relaxed">Engage with maritime history through interactive lessons and activities. ARShip provides quizzes, challenges, and hands-on projects designed to make learning about ships and their history a fun and immersive experience.</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Feature
