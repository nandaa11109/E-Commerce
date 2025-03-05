import { useState } from "react";


const Navbar = ({ setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  const MenuItems = [
    { name: "Home", path: "/" },
    { name: "Product",  },
    { name: "Service" },
    { name: "FAQ" },
  ];

  return (
    <>
      <nav className="bg-white py-3 shadow-md fixed w-full z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5">
          {/* Logo */}
          <h1 className="font-bold text-2xl text-black">Sneakers</h1>

          {/* Menu untuk tampilan desktop */}
          <ul className="hidden md:flex space-x-6 text-md">
            {MenuItems.map((item, index) => (
              <li key={index}>
                <a className="text-black hover:text-blue-600 cursor-pointer" href={item.path}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Input Search */}
          <input
            type="text"
            placeholder="Search brand..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="hidden md:block lg:w-1/5 px-4 py-2 rounded-full bg-gray-200 text-black focus:outline-none focus:ring-1 focus:ring-gray-400"
          />

          {/* Hamburger Menu untuk Mobile */}
          <button
            className="md:hidden text-black text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Menu dropdown untuk mobile */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 p-4 space-y-3">
            {MenuItems.map((item, index) => (
              <a key={index} className="block text-black hover:text-blue-600" href={item.path}>
                {item.name}
              </a>
            ))}
            {/* Input Search di Mobile */}
            <input
              type="text"
              placeholder="Search brand..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-gray-200 text-black focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
