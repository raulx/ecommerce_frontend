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
        {
          title: "Footwear",
          children: [
            { title: "Casual Shoes", url: "/men-casual-shoes" },
            { title: "Sports Shoes", url: "/men-sports-shoes" },
            { title: "Formal Shoes", url: "/men-formal-shoes" },
            { title: "Sneakers", url: "/men-sneakers" },
            { title: "Flip Flops", url: "/men-flip-flops" },
            { title: "Socks", url: "/men-socks" },
          ],
        },
        {
          title: "Personal Care & Grooming",
          url: "/men-personal-care-and-grooming",
        },
        { title: "Sunglasses & Frames", url: "/men-sunglasses-and-frames" },
        { title: "Watches", url: "/men-watches" },
        {
          title: "Sports & Active Wear",
          children: [
            { title: "Sports Shoes", url: "/men-sports-shoes" },
            { title: "Sports Sandals", url: "/men-sports-sandals" },
            { title: "Active T-Shirts", url: "/men-active-t-shirts" },
            {
              title: "Track Pants & Shorts",
              url: "/men-trackpants-and-shorts",
            },
            {
              title: "Tracksuits",
              url: "/men-tracksuits",
            },
            {
              title: "Jackets & Sweatshirts",
              url: "/men-jackets-and-sweatshirts",
            },
            {
              title: "Sports Accessories",
              url: "/men-sports-accessories",
            },
            {
              title: "Swimwear",
              url: "/men-swimwear",
            },
          ],
        },
        {
          title: "Gadgets",
          children: [
            { title: "Smart Wearables", url: "/men-smart-wearables" },
            { title: "Fitness Gadgets", url: "/men-fitness-gadgets" },
            { title: "Headphones", url: "/men-headphones" },
            { title: "Speakers", url: "/men-speakers" },
          ],
        },
        {
          title: "Fashion Accessories",
          children: [
            { title: "Wallets", url: "/men-wallets" },
            { title: "Belts", url: "/men-belts" },
            {
              title: "Perfumes & Body Mists",
              url: "/men-perfumes-and-body-mists",
            },
            {
              title: "Trimmers",
              url: "/men-trimmers",
            },
            { title: "Deodrants", url: "/men-deodrants" },
            {
              title: "Ties,Cufflinks & Pocket Squares",
              url: "/men-ties-cufflinks-and-pocket-squares",
            },
            {
              title: "Accessory Gift Sets",
              url: "/men-accessory-gift-sets",
            },
            {
              title: "Caps & Hats",
              url: "/men-caps-and-hats",
            },
            {
              title: "Mufflers,Scarves & Gloves",
              url: "/men-mufflers-scarves-and-gloves",
            },
            { title: "Phone Cases", url: "/phone-cases" },
            {
              title: "Rings & Wristwear",
              url: "/men-rings-and-wristwear",
            },
            {
              title: "Helmets",
              url: "/men-helmets",
            },
          ],
        },
        { title: "Bags & Backpacks", url: "/bags-bagpacks" },
        { title: "Luggages & Trolleys", url: "/Luggage-and-trolleys" },
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
            { title: "Sarees", url: "/women-sarees" },
            { title: "Ethnic Wear", url: "/women-ethnic-wear" },
            {
              title: "Leggings,Salwars & Churidars",
              url: "/women-leggings-salwars-and-churidars",
            },
            {
              title: "Skirts & Plazzos",
              url: "/women-skirts-and-plazzos",
            },
            {
              title: "Dress Materials",
              url: "/women-dress-materials",
            },
            { title: "Lehenga Cholis", url: "/women-lehenga-cholis" },
            { title: "Dupatta & Shawls", url: "/women-dupatta-and-shawls" },
            { title: "Jackets", url: "/women-jackets" },
          ],
        },
        {
          title: "Belts,Scarves & More",
          url: "/women-belts-scarves-and-more",
        },
        {
          title: "Watches & Wearables",
          url: "/women-watches-and-wearables",
        },
        {
          title: "Western Wear",
          children: [
            { title: "Dresses", url: "/women-dresses" },
            { title: "Tops", url: "/women-tops" },
            { title: "Tshirts", url: "/women-tshirts" },
            { title: "Jeans", url: "/women-jeans" },
            { title: "Trousers & Capris", url: "/women-trouser-and-capris" },
            { title: "Shorts & Skirts", url: "/women-shorts-and-skirts" },
            { title: "Co-ords", url: "/women-co-ords" },
            { title: "Playsuits", url: "/women-playsuits" },
            { title: "Jumpsuits", url: "/women-playsuit" },
            { title: "Shrugs", url: "/women-shrugs" },
            {
              title: "Sweaters & Sweatshirts",
              url: "/women-sweater-and-sweatshirts",
            },
            { title: "Jackets & Coats", url: "/women-jackets-and-coats" },
            { title: "Blazers & Waistcoats", url: "/women-blazers-and-coats" },
          ],
        },
        {
          title: "Plus Size",
          url: "/women-plus-size",
        },
        { title: "Maternity", url: "/women-maternity" },
        { title: "Sunglasses & Frames", url: "/women-sunglasses-and-frames" },
        {
          title: "Footwear",
          children: [
            { title: "Flats", url: "/women-flats" },
            { title: "Casual Shoes", url: "/women-casual-shoes" },
            { title: "Heels", url: "/women-heels" },
            { title: "Boots", url: "/women-boots" },
            { title: "Sports Shoes & Floaters", url: "/women-floaters" },
          ],
        },
        {
          title: "Sports & Active Wear",
          children: [
            { title: "Clothing", url: "/women-clothing" },
            { title: "Footwear", url: "/women-footwear" },
            { title: "Sports Accessories", url: "/sports-accessories" },
            { title: "Sports Equipment", url: "/sports-equipment" },
          ],
        },
        {
          title: "Lingerie & Sleepwear",
          children: [
            { title: "Bra", url: "/women-bra" },
            { title: "Briefs", url: "/women-briefs" },
            { title: "Shapewear", url: "/women-shapewear" },
            {
              title: "Sleepwear & Loungewear",
              url: "/women-sleepwear-and-loungewear",
            },
            { title: "Swimwear", url: "/women-swimwear" },
            {
              title: "Camisoles & Thermals",
              url: "/women-camisoles-and-thermals",
            },
          ],
        },
        {
          title: "Beauty & Personal Care",
          children: [
            { title: "Makeup", url: "/women-makeup" },
            { title: "Skincare", url: "/women-skincare" },
            { title: "Premium Beauty", url: "/women-beauty-products" },
            { title: "Lipsticks", url: "/women-lipsticks" },
            { title: "Fragrances", url: "/women-fragrances" },
          ],
        },
        {
          title: "Gadgets",
          children: [
            { title: "Smart Wearables", url: "/women-smart-wearables" },
            { title: "Fitness Gadgets", url: "/women-fitness-gadgets" },
            { title: "Headphones", url: "/women-headphones" },
            { title: "Speakers", url: "/women-speakers" },
          ],
        },
        {
          title: "Jewellery",
          children: [
            { title: "Fashion Jewellery", url: "/women-fashion-jewellery" },
            { title: "Fine Jewellery", url: "/women-fine-jewellery" },
            { title: "Earrings", url: "/women-earrings" },
          ],
        },
        { title: "Backpacks", url: "/women-backpacks" },
        {
          title: "Handbags,Bags & Wallets",
          url: "/women-handbags-and-wallets",
        },
        { title: "Luggage & Trolleys", url: "/women-luggage-and-trolleys" },
      ],
    },
    {
      title: "Kids",
      children: [
        {
          title: "Boys Clothing",
          children: [
            { title: "T-Shirts", url: "/boys-tshirts" },
            { title: "Shirts", url: "/boys-shirts" },
            { title: "Shorts", url: "/boys-shorts" },
            { title: "Jeans", url: "/boys-jeans" },
            { title: "Trousers", url: "/boys-trousers" },
            { title: "Clothing Sets", url: "/boys-clothing-sets" },
            { title: "Ethnic Wear", url: "/boys-ethnic-wear" },
            {
              title: "Track Pants & Pyjamas",
              url: "/boys-trackpants-and-pyjamas",
            },
            {
              title: "Jackets,Sweater & Sweatshirts",
              url: "/boys-jackets-sweater-and-sweatshirts",
            },
            { title: "Party Wear", url: "/boys-party-wear" },
            {
              title: "Innerwear & Thermals",
              url: "/boys-innerwear-and-thermals",
            },
            {
              title: "Nightwear & Loungewear",
              url: "/boys-nightwear-and-loungewear",
            },
            { title: "Value Packs", url: "/boys-value-packs" },
          ],
        },
        {
          title: "Girls Clothing",
          children: [
            { title: "Dresses", url: "/girls-dresses" },
            { title: "Tops", url: "/girs-tops" },
            { title: "Tshirts", url: "/girls-tshirts" },
            { title: "Clothing Sets", url: "/girts-clothing-sets" },
            { title: "Lehenga Choli", url: "/girls-lehenga-choli-sets" },
            { title: "Kurta Sets", url: "/girls-kurta-sets" },
            { title: "Party wear", url: "/girls-party-wear" },
            {
              title: "Dungarees & Jumpsuits",
              url: "/girls-dungarees-and-jumpsuits",
            },
            { title: "Skirts & Shorts", url: "/girls-skirts-and-shorts" },
            { title: "Tights & Leggings", url: "/girls-leggings" },
            {
              title: "Jeans, Trousers & Capris",
              url: "/girls-jeans-trousers-and-capris",
            },
            {
              title: "Jackets,Sweater & Sweatshirts",
              url: "/girls-jackets-sweater-and-sweatshirts",
            },
            {
              title: "Nightwear & Loungewear",
              url: "/girls-nightwear-and-loungewear",
            },
            { title: "Value Packs", url: "/girls-value-packs" },
          ],
        },
        { title: "Footwear", children: [] },
        { title: "Toys & Games", children: [] },
        { title: "Infants", children: [] },
        { title: "Home & Bath", url: "/home-and-bath" },
        { title: "Personal Care", url: "/personal-care" },
        { title: "Kids Accessories", children: [] },
        { title: "Brands", children: [] },
        { title: "Age", children: [] },
      ],
    },
    { title: "Home & Living", children: [] },
    { title: "Beauty", children: [] },
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
