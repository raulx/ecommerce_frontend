import { CiUser, CiHeart, CiBag1, CiSearch } from "react-icons/ci";
import { useState } from "react";

function Navbar() {
  const [isSearchFocussed, setIsSearchFocussed] = useState(false);
  return (
    <div className="bg-white flex gap-10 px-12 h-20 items-center">
      <div className="w-16 ">
        <img src="../src/images/logo.png" className="w-full h-full" />
      </div>
      <nav className="flex w-2/5 justify-between">
        <li className="list-none font-bold  uppercase text-textmedium">Men</li>
        <li className="list-none font-bold text-textmedium uppercase">Women</li>
        <li className="list-none font-bold text-textmedium uppercase">Kids</li>
        <li className="list-none font-bold text-textmedium uppercase">
          Home & Living
        </li>
        <li className="list-none font-bold text-gray-700 uppercase">Beauty</li>
        <li className="list-none font-bold text-gray-700 uppercase">Studio</li>
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
      <div className="flex gap-8">
        <div className="flex justify-center items-center flex-col">
          <CiUser className=" text-2xl" />
          <span className=" font-bold text-sm text-textmedium">Profile</span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <CiHeart className=" text-2xl" />
          <span className=" font-bold text-sm text-textmedium">Wishlist</span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <CiBag1 className=" text-2xl" />
          <span className=" font-bold text-sm text-textmedium">Bag</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
