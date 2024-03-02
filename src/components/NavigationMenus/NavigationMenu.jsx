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

export default NavigationMenu;
