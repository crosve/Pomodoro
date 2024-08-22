import {useState} from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);

    }
  return (
    <header className="bg-custom-gray text-brown-500">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src="/src/assets/tomatoe.png" alt="Logo" className="h-20 w-auto"  />
          </a>
        </div>

        {/* Menu Toggle Button (visible on small screens) */}
        <div className="block lg:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <nav className={`lg:flex space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block rounded-2xl border-2 border-brown-500 px-14 py-4`}>
          <a href="#" className="hover:text-gray-300">Login</a>
        </nav>

        <div className={`lg:hidden fixed inset-0 bg-brown-500 bg-opacity-80 z-20 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <a href="#" className="text-white text-lg hover:text-gray-300">Login</a>
            <img onClick={toggleMenu} src='/src/assets/tomatoe.png' alt='close' className='h-10 w-auto'/>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header