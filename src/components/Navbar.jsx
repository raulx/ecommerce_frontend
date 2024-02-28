import { CiUser, CiHeart, CiBag1, CiSearch } from "react-icons/ci";
import { useState } from "react";
import UseNavigationContext from "../hooks/useNavigationContext";

function Navbar() {
  const [isSearchFocussed, setIsSearchFocussed] = useState(false);
  const { setHover, setItemType } = UseNavigationContext();

  const handleMouseEnter = (d) => {
    setHover(true);
    setItemType(d);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div className="bg-white flex gap-8 px-10 h-20 w-full items-center fixed">
      <div className="w-16">
        <img src="../src/images/logo.png" className="w-full h-full" />
      </div>
      <nav className="flex  h-full items-center gap-4">
        <li
          className="list-none cursor-pointer font-bold  uppercase text-textmedium  border-b-4 border-b-white h-full justify-center items-center hover:border-b-4 hover:border-b-red-500 transition-all duration-75 flex w-16"
          onMouseEnter={() => handleMouseEnter("mens")}
          onMouseLeave={() => handleMouseLeave()}
        >
          Men
        </li>
        <li
          className="list-none cursor-pointer font-bold text-textmedium uppercase h-full justify-center items-center flex w-16 hover:border-b-4 hover:border-b-pink-600 border-b-4 border-b-white"
          onMouseEnter={() => handleMouseEnter("women")}
          onMouseLeave={() => handleMouseLeave()}
        >
          Women
        </li>
        <li
          className="list-none cursor-pointer font-bold text-textmedium uppercase h-full justify-center items-center flex w-16 hover:border-b-4 hover:border-b-orange-500 border-b-4 border-b-white"
          onMouseEnter={() => handleMouseEnter("kids")}
          onMouseLeave={() => handleMouseLeave()}
        >
          Kids
        </li>
        <li
          className="list-none cursor-pointer font-bold  text-textmedium uppercase h-full justify-center items-center flex w-32 hover:border-b-4 hover:border-b-yellow-500 border-b-4 border-b-white"
          onMouseEnter={() => handleMouseEnter("homeandliving")}
          onMouseLeave={() => handleMouseLeave()}
        >
          Home & Living
        </li>
        <li
          className="list-none cursor-pointer font-bold text-gray-700 uppercase h-full justify-center items-center flex w-16 hover:border-b-4 hover:border-b-emerald-500 border-b-4 border-b-white"
          onMouseEnter={() => handleMouseEnter("beauty")}
          onMouseLeave={() => handleMouseLeave()}
        >
          Beauty
        </li>
        <li
          className="list-none cursor-pointer font-bold text-gray-700 uppercase h-full justify-center items-center flex w-16 hover:border-b-4  hover:border-b-fuchsia-600 border-b-4 border-b-white"
          onMouseEnter={() => handleMouseEnter("studio")}
          onMouseLeave={() => handleMouseLeave()}
        >
          Studio
        </li>
      </nav>
      <div
        className={`flex-grow p-2 border rounded flex items-center bg-neutralgray gap-4 ml-10 group group-focus:bg-white ${
          isSearchFocussed && "bg-white"
        }`}
      >
        <CiSearch className="text-xl font-bold" />
        <input
          type="text"
          className="flex-grow group outline-none focus:bg-white bg-neutralgray"
          placeholder="Search for products,brands and more"
          onFocus={() => setIsSearchFocussed(true)}
          onBlur={() => setIsSearchFocussed(false)}
        />
      </div>
      <div className="flex gap-8 h-full">
        <div className="flex justify-center items-center flex-col h-full border-b-4 border-b-white hover:border-b-red-500 transition-all duration-75 px-2">
          <CiUser className="text-2xl" />
          <span className=" font-bold text-sm text-textmedium">Profile</span>
        </div>
        <div className="flex justify-center items-center flex-col cursor-pointer">
          <CiHeart className="text-2xl" />
          <span className=" font-bold text-sm text-textmedium">Wishlist</span>
        </div>
        <div className="flex justify-center items-center flex-col cursor-pointer">
          <CiBag1 className="text-2xl" />
          <span className="font-bold text-sm text-textmedium">Bag</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
