import { useState } from 'react'
import LOGO from '../assets/Images/IconNoBorder.svg'
import { MenuIcon } from '../libs/Icons'

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false)

  const handleClick = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <header className="sticky top-0 font-content">
      <div className="container relative z-10 mx-auto flex items-center justify-between bg-white px-8 py-3 shadow-md md:flex-row md:py-0">
        <a className="flex items-center font-bold" href='#Top'>
          <img src={LOGO} alt="ARSHip Logo" />
          <span className="ml-3 font-title text-xl">ARShip</span>
        </a>

        <nav className="hidden items-center justify-center gap-4 text-base md:mx-auto md:flex">
          <a className="w-full p-4 hover:bg-yellow-200 hover:text-gray-900" href='#Home'>Home</a>
          <a className="w-full p-4 hover:bg-yellow-200 hover:text-gray-900" href='#Feature'>Features</a>
          <a className="w-full p-4 hover:bg-yellow-200 hover:text-gray-900" href='#Developer'>Developer</a>
          <a className="w-full p-4 hover:bg-yellow-200 hover:text-gray-900" href='#Testimonial'>Testimonial</a>
          <a className="w-full p-4 hover:bg-yellow-200 hover:text-gray-900" href='#Contact'>Contacs</a>
        </nav>

        <button onClick={handleClick} className='rounded border-0 bg-accent p-2 text-base transition-colors duration-300 focus:bg-accent/50 md:hidden'>
          <MenuIcon style={"text-2xl block"}/>
        </button>
      </div>

      <div className={`relative m-auto w-full transition-all duration-300 md:hidden ${toggleNav ? "top-0" : "top-[-300px]"}`}>
        <nav className="absolute left-0 top-0 flex w-full flex-col items-center justify-center bg-accent text-center">
          <a onClick={handleClick} className="w-full py-4 text-lg active:bg-accentdark" href='#Home'>Home</a>
          <a onClick={handleClick} className="w-full py-4 text-lg active:bg-accentdark" href='#Feature'>Features</a>
          <a onClick={handleClick} className="w-full py-4 text-lg active:bg-accentdark" href='#Developer'>Developer</a>
          <a onClick={handleClick} className="w-full py-4 text-lg active:bg-accentdark" href='#Testimonial'>Testimonial</a>
          <a onClick={handleClick} className="w-full py-4 text-lg active:bg-accentdark" href='#Contact'>Contacs</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
