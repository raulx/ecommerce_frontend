/* eslint-disable react/prop-types */
import BeautyItems from "./BeautyItems";
import HomeAndLivingItems from "./HomeAndLivingItems";
import KidsItems from "./KidsItems";
import MenItems from "./MenItems";
import Studio from "./Studio";
import WomenItems from "./WomenItems";
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
      </div>
    </>
  );
}

export default NavigationMenu;
export { PhoneNavigation };
