import LOGO from '../assets/Images/IconNoBorder.svg'

const Header = () => {
  return (
    <header className="sticky top-0 bg-accent/50 font-content text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-2 px-8 py-5 md:flex-row">
        <a className="mb-4 flex items-center font-bold text-gray-900 md:mb-0" href='#Top'>
          <img src={LOGO} alt="ARSHip Logo" />
          <span className="ml-3 font-title text-xl">ARShip</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-base md:mx-auto">
          <a className="hover:text-gray-900" href='#Home'>Home</a>
          <a className="hover:text-gray-900" href='#Feature'>Features</a>
          <a className="hover:text-gray-900" href='#Developer'>Developer</a>
          <a className="hover:text-gray-900" href='#Testimonial'>Testimonial</a>
          <a className="hover:text-gray-900" href='#Contact'>Contacs</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
