/* eslint-disable react/prop-types */
import MenItems from "./DesktopMenuItems/MenItems";
import WomenItems from "./DesktopMenuItems/WomenItems";
import KidsItems from "./DesktopMenuItems/KidsItems";
import HomeAndLivingItems from "./DesktopMenuItems/HomeAndLivingItems";
import BeautyItems from "./DesktopMenuItems/BeautyItems";
import Studio from "./DesktopMenuItems/Studio";

import UseNavigationContext from "../../hooks/useNavigationContext";

function DesktopNavigationMenu({ menuCategory }) {
  const { setIsHover, setMenuType } = UseNavigationContext();

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

export default DesktopNavigationMenu;
