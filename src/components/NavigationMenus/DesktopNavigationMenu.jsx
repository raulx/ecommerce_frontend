/* eslint-disable react/prop-types */
import MenItems from "./DesktopMenuItems/MenItems";
import WomenItems from "./DesktopMenuItems/WomenItems";
import KidsItems from "./DesktopMenuItems/KidsItems";
import HomeAndLivingItems from "./DesktopMenuItems/HomeAndLivingItems";
import BeautyItems from "./DesktopMenuItems/BeautyItems";
import Studio from "./DesktopMenuItems/Studio";

import UseNavigationContext from "../../hooks/useNavigationContext";
import ProfileMenu from "./DesktopMenuItems/ProfileMenu";

function DesktopNavigationMenu({ menuCategory }) {
  const { setIsHover, setMenuType } = UseNavigationContext();

  const handleMouseEnter = () => {
    setIsHover(true);
    setMenuType(menuCategory);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    setMenuType("");
  };
  return (
    <>
      {menuCategory === "profile" ? (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute top-20 right-4 w-96"
        >
          <ProfileMenu />
        </div>
      ) : (
        <>
          <div className="w-screen h-screen  transition-all duration-200 fixed mt-20">
            <div className="w-full h-full bg-black opacity-25 top-0 left-0 absolute"></div>
            <div
              className="bg-white fade-in-navigation-menu left-24 top-0  absolute z-10 bg-opacity-100 border shadow-xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
        </>
      )}
    </>
  );
}

export default DesktopNavigationMenu;
