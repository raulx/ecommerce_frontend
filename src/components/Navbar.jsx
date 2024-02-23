import { CiUser, CiHeart, CiBag1, CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className="bg-white flex gap-10 px-12 h-20 items-center">
      <div className="w-16 ">
        <img src="../src/images/logo.png" className="w-full h-full" />
      </div>
      <nav className="flex w-2/5 justify-between">
        <li className="list-none font-bold text-gray-700 uppercase">Men</li>
        <li className="list-none font-bold text-gray-700 uppercase">Women</li>
        <li className="list-none font-bold text-gray-700 uppercase">Kids</li>
        <li className="list-none font-bold text-gray-700 uppercase">
          Home & Living
        </li>
        <li className="list-none font-bold text-gray-700 uppercase">Beauty</li>
        <li className="list-none font-bold text-gray-700 uppercase">Studio</li>
      </nav>
      <div className="flex-grow p-2 border rounded flex items-center gap-4 ml-10">
        <CiSearch className="text-2xl" />
        <input
          type="text"
          className="flex-grow outline-none"
          placeholder="Search for products,brands and more"
        />
      </div>
      <div className="flex gap-8">
        <div className="flex justify-center items-center flex-col">
          <CiUser className=" text-2xl" />
          <span className=" font-bold text-sm">Profile</span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <CiHeart className=" text-2xl" />
          <span className=" font-bold text-sm">Wishlist</span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <CiBag1 className=" text-2xl" />
          <span className=" font-bold text-sm">Bag</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
