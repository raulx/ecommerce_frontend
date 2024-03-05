/* eslint-disable react/prop-types */
import BeautyItems from "./BeautyItems";
import HomeAndLivingItems from "./HomeAndLivingItems";
import KidsItems from "./KidsItems";
import MenItems from "./MenItems";
import Studio from "./Studio";
import WomenItems from "./WomenItems";
import { Link } from "react-router-dom";
import Accordion from "../Accordion";

import UseNavigationCotext from "../../hooks/useNavigationContext";

function NavigationMenu({ menuCategory }) {
  const { setIsHover, setMenuType } = UseNavigationCotext();

  return (
    <div className="w-screen h-screen  transition-all duration-200 fixed mt-20">
      <div className="w-full h-full bg-black opacity-25 top-0 left-0 absolute"></div>
      <div
        className="bg-white fade-in-navigation-menu left-24 top-0  absolute z-10 bg-opacity-100 border shadow-xl"
        onMouseEnter={() => {
          setIsHover(true);
          setMenuType(menuCategory);
        }}
        onMouseLeave={() => {
          setIsHover(false);
          setMenuType("");
        }}
      >
        <div>
          {menuCategory == "mens" && <MenItems />}
          {menuCategory == "women" && <WomenItems />}
          {menuCategory == "homeandliving" && <HomeAndLivingItems />}
          {menuCategory == "kids" && <KidsItems />}
          {menuCategory == "beauty" && <BeautyItems />}
          {menuCategory == "studio" && <Studio />}
        </div>
      </div>
    </div>
  );
}

function PhoneNavigation() {
  const { phoneNav, setPhoneNav } = UseNavigationCotext();

  const menuItems = [
    {
      title: "men",
      children: [
        {
          title: "Topwear",
          children: [
            { title: "T-shirts", url: "/men-t-shirts" },
            { title: "Casual Shirts", url: "/men-casual-shirts" },
            { title: "Formal Shirts", url: "/men-formal-shirts" },
            { title: "Sweatshirts", url: "/men-sweatshirts" },
            { title: "Sweater", url: "/men-sweater" },
            { title: "Jackets", url: "/men-jackets" },
            { title: "Blazers & Coats", url: "/men-blazers-coats" },
            { title: "Suits", url: "/men-suits" },
            { title: "Rain Jackets", url: "/men-rain-jackets" },
          ],
        },
        {
          title: "Indian & Festive Wear",
          children: [
            { title: "Kurtas & Kurta Sets", url: "/men-kurtasandsets" },
            { title: "Sherwani", url: "/men-sherwani" },
            { title: "Nehru Jackets", url: "/men-nehru-jackets" },
            { title: "Dhotis", url: "/men-dhotis" },
          ],
        },
        {
          title: "Bottomwear",
          children: [
            { title: "Jeans", url: "/men-jeans" },
            { title: "Casual Trousers", url: "/men-casual-trousers" },
            { title: "Formal Trousers", url: "/men-formal-trousers" },
            { title: "Shorts", url: "/men-shorts" },
            { title: "Track Pants & Joggers", url: "/men-joggers" },
          ],
        },
        {
          title: "Innerwear & Sleepwear",
          children: [
            { title: "Briefs & Trunks", url: "/men-briefs" },
            { title: "Boxers", url: "/men-boxers" },
            { title: "Vests", url: "/men-vests" },
            {
              title: "Sleepwear & Loungewear",
              url: "/men-sleepwear-loungewear",
            },
            { title: "Thermals", url: "/men-thermals" },
          ],
        },
        { title: "Plus Size", url: "/men-plus-size" },
        { title: "Footwear", children: [] },
        { title: "Personal Care & Grooming", children: [] },
        { title: "Sunglasses & Frames", children: [] },
        { title: "Watches", children: [] },
        { title: "Sports & Active Wear", children: [] },
        { title: "Gadgets", children: [] },
        { title: "Fashion Accessories", children: [] },
        { title: "Bags & Backpacks", children: [] },
        { title: "Luggages & Trolleys", children: [] },
      ],
    },
    {
      title: "Women",
      children: [
        {
          title: "Indian & Fusion Wear",
          children: [
            { title: "Kurtas & Suits", url: "/women-kurtas-and-suits" },
            { title: "Kurtis,Tunics & Tops", url: "/women-kurtis-and-tunics" },
          ],
        },
      ],
    },
  ];
  return (
    <>
      {phoneNav && (
        <div
          className="h-screen w-screen fixed top-0 left-0 overflow-hidden z-10 bg-black opacity-45"
          onClick={() => setPhoneNav(false)}
        ></div>
      )}

      <div
        className={`h-screen w-3/4 bg-white z-10  fixed block md:hidden transition-all duration-75 ease-out left-0 top-0 overflow-y-scroll ${
          phoneNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full">
          <img
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1709543188/ecommerce_assets/z8c1nomlm5y80dr5sipb.png"
            className="w-full h-full"
          />
        </div>
        {menuItems.map((item, index) => {
          return (
            <Accordion key={index} title={item.title} bold>
              {item.children.map((item, index) => {
                if (item.children) {
                  return (
                    <Accordion key={index} title={item.title}>
                      <ul className="flex flex-col gap-4 mt-2">
                        {item.children.map((item, index) => {
                          return (
                            <li key={index} className="px-4">
                              <Link to={item.url}>{item.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </Accordion>
                  );
                } else {
                  return (
                    <div key={index} className="p-4 h-12">
                      <Link to={item.url}>{item.title}</Link>
                    </div>
                  );
                }
              })}
            </Accordion>
          );
        })}
      </div>
    </>
  );
}

export default NavigationMenu;
export { PhoneNavigation };
