import LOGO from '../assets/Images/IconNoBorder.svg'

const Footer = () => {
  return (
    <footer className="font-content text-gray-600">
      <div className="container mx-auto flex flex-col items-center p-5 sm:flex-row">
        <a className="flex items-center justify-center font-title font-bold text-gray-900 md:justify-start">
          <img src={LOGO} alt="ARSHip Logo" />
          <span className="ml-3 text-xl">ARShip</span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">© 2024 Jaelani.Dev</p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a className="ml-3 cursor-pointer text-gray-500 hover:text-accent">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="size-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
