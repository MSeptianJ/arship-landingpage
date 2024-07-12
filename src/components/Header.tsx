import LOGO from '../assets/Images/IconNoBorder.svg'

const Header = () => {
  return (
    <header className="sticky top-0 bg-gray-300/90 font-content text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="mb-4 flex items-center font-bold text-gray-900 md:mb-0" href='#Top'>
          <img src={LOGO} alt="ARSHip Logo" />
          <span className="ml-3 font-title text-xl">ARShip</span>
        </a>
        <nav className="flex items-center justify-center gap-4 text-base md:mx-auto">
          <a className="hover:text-gray-900" href='#Feature'>Features</a>
          <a className="hover:text-gray-900" href='#Developer'>Developer</a>
          <a className="hover:text-gray-900" href='#Testimonial'>Testimonial</a>
          <a className="hover:text-gray-900" href='#Contact'>Contacs</a>
        </nav>
        <button className="mt-4 items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0 md:inline-flex">
          Download
        </button>
      </div>
    </header>
  )
}

export default Header
