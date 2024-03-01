import { Link } from "react-router-dom";

function HomeAndLivingItems() {
  return (
    <div className="flex justify-between px-6">
      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 font-bold">Bed Lines & Furnishing</h1>
          <ul className="flex flex-col gap-1">
            <li>
              <Link>Bed Runners</Link>
            </li>
            <li>
              <Link>Mattress Protectors</Link>
            </li>
            <li>
              <Link>Bedsheets</Link>
            </li>
            <li>
              <Link>Bedding Sets</Link>
            </li>
            <li>
              <Link>Blankets,Quilts & Dohars</Link>
            </li>
            <li>
              <Link>Pillows & Pillow Covers</Link>
            </li>
            <li>
              <Link>Bed Covers</Link>
            </li>
            <li>
              <Link>Diwan Sets</Link>
            </li>
            <li>
              <Link>Chair Pads & Covers</Link>
            </li>
            <li>
              <Link>Sofa Covers</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-yellow-500 font-bold">Flooring</h1>
            <ul className="flex flex-col gap-1">
              <li>
                <Link>Floor Runners</Link>
              </li>
              <li>
                <Link>Carpets</Link>
              </li>
              <li>
                <Link>Floor Mats & Dhurries</Link>
              </li>
              <li>
                <Link>Door Mats</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 bg-gray-50">
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 font-bold">Bath</h1>
          <ul className="flex flex-col gap-1">
            <li>
              <Link>Bath Towels</Link>
            </li>
            <li>
              <Link>Hand & Face Towels</Link>
            </li>
            <li>
              <Link>Beach Towels</Link>
            </li>
            <li>
              <Link>Towels Set</Link>
            </li>
            <li>
              <Link>Bath Robes</Link>
            </li>
            <li>
              <Link>Bathroom Accessories</Link>
            </li>
            <li>
              <Link>Shower Curtains</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 font-bold">
            <Link>Lamps & Lighting</Link>
          </h1>
          <ul className="flex flex-col gap-1">
            <li>
              <Link>Floor Lamps</Link>
            </li>
            <li>
              <Link>Ceiling Lamps</Link>
            </li>
            <li>
              <Link>Table Lamps</Link>
            </li>
            <li>
              <Link>Wall Lamps</Link>
            </li>
            <li>
              <Link>Outdoor Lamps</Link>
            </li>
            <li>
              <Link>String Lights</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 font-bold">
            <Link>Home Decor</Link>
          </h1>
          <ul className="flex flex-col gap-1">
            <li>
              <Link>Plants & Planters</Link>
            </li>
            <li>
              <Link>Aromas & Candles</Link>
            </li>
            <li>
              <Link>Clocks</Link>Clocks
            </li>
            <li>
              <Link>Mirrors</Link>
            </li>
            <li>
              <Link>Wall Decor</Link>
            </li>
            <li>
              <Link>Festive Decor</Link>
            </li>
            <li>
              <Link>Pooja Essentials</Link>
            </li>
            <li>
              <Link>Wall Shelves</Link>
            </li>
            <li>
              <Link>Fountains</Link>
            </li>
            <li>
              <Link>Showpieces & Vases</Link>
            </li>
            <li>
              <Link>Ottoman</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h1 className="text-yellow-500 font-bold">
            <Link>Cushions & Cushion Covers</Link>
          </h1>
        </div>
        <div>
          <h1 className="text-yellow-500 font-bold">
            <Link>Curtains</Link>
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 bg-gray-50">
        <div>
          <h1 className="text-yellow-500 font-bold">
            <Link>Home Gift Sets</Link>
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 font-bold">
            <Link>Kitchen & Table</Link>
          </h1>
          <ul className="flex flex-col gap-1">
            <li>
              <Link>Table Runners</Link>
            </li>
            <li>
              <Link>Dinnerware & Serveware</Link>
            </li>
            <li>
              <Link>Cups and Mugs</Link>
            </li>
            <li>
              <Link>Bakeware & Cookware</Link>
            </li>
            <li>
              <Link>Kitchen Storage & Tools</Link>
            </li>
            <li>
              <Link>Bar & Drinkware</Link>
            </li>
            <li>
              <Link>Table Covers & Furnishings</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-yellow-500 font-bold">Storage</h1>
            <ul className="flex flex-col gap-1">
              <li>
                <Link>Bins</Link>
              </li>
              <li>
                <Link>Hangers</Link>
              </li>
              <li>
                <Link>Organisers</Link>
              </li>
              <li>
                <Link>Hooks & Holders</Link>
              </li>
              <li>
                <Link>Laundry Bags</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 font-bold">Brands</h1>
          <ul className="flex flex-col gap-1">
            <li>
              <Link>H&M</Link>
            </li>
            <li>
              <Link>Marks & Spencer</Link>
            </li>
            <li>
              <Link>Home Center</Link>
            </li>
            <li>
              <Link>Spaces</Link>
            </li>
            <li>
              <Link>D&apos;Decor</Link>
            </li>
            <li>
              <Link>Story@Home</Link>
            </li>
            <li>
              <Link>Pure Home & Living</Link>
            </li>
            <li>
              <Link>Swayam</Link>
            </li>
            <li>
              <Link>Raymond Home</Link>
            </li>
            <li>
              <Link>Maspar</Link>
            </li>
            <li>
              <Link>My Trident</Link>
            </li>
            <li>
              <Link>Cortina</Link>
            </li>
            <li>
              <Link>Random</Link>
            </li>
            <li>
              <Link>Ellementry</Link>
            </li>
            <li>
              <Link>ROMEE</Link>
            </li>
            <li>
              <Link>SEJ by Nisha Gupta</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeAndLivingItems;
