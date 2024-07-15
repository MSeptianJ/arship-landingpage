import LOGO from '../assets/Images/IconNoBorder.svg'
import { MenuIcon } from '../libs/Icons'

const Header = () => {
  return (
    <header className="sticky top-0 bg-accent/50 font-content text-gray-600">
      <div className="container mx-auto flex items-center justify-between p-2 px-8 py-5 md:flex-row">
        <a className="flex items-center font-bold text-gray-900 md:mb-0" href='#Top'>
          <img src={LOGO} alt="ARSHip Logo" />
          <span className="ml-3 font-title text-xl">ARShip</span>
        </a>
        <nav className="hidden items-center justify-center gap-4 text-base md:mx-auto md:flex">
          <a className="hover:text-gray-900" href='#Home'>Home</a>
          <a className="hover:text-gray-900" href='#Feature'>Features</a>
          <a className="hover:text-gray-900" href='#Developer'>Developer</a>
          <a className="hover:text-gray-900" href='#Testimonial'>Testimonial</a>
          <a className="hover:text-gray-900" href='#Contact'>Contacs</a>
        </nav>
        <button className='rounded border-0 bg-accent p-1 text-base hover:bg-accent/60 focus:outline-none md:hidden'>
          <MenuIcon style={"size-10"}/>
        </button>
      </div>
    </header>
  )
}

export default Header
