import  { useState } from 'react';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsOpen(!isOpen);
  };

  let menuIcon;

  if (isOpen) {
    menuIcon = (
      <path
        fillRule="evenodd"
        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
      />
    );
  } else {
    menuIcon = (
      <path
        fillRule="evenodd"
        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
      />
    );
  }

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
      <header className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img className="h-8" src="/img/logo-inverted.svg" alt="workcation" />
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleNavMenu}
            type="button"
            className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {menuIcon}
            </svg>
          </button>
        </div>
      </header>

      <div className={isOpen ? 'px-2 pt-2 pb-4 block' : 'px-2 pt-2 pb-4 hidden sm:flex'}>
        <a
          href="#"
          className="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          List your property
        </a>
        <a
          href="#"
          className="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Trips
        </a>
        <a
          href="#"
          className="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Messages
        </a>
      </div>
    </header>
  );
};

export default Navbar1;
