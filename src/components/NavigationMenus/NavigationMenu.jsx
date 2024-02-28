/* eslint-disable react/prop-types */
import BeautyItems from "./BeautyItems";
import HomeAndLivingItems from "./HomeAndLivingItems";
import KidsItems from "./KidsItems";
import MenItems from "./MenItems";
import Studio from "./Studio";
import WomenItems from "./WomenItems";

function NavigationMenu({ itemsType }) {
  return (
    <div className="w-screen h-screen transition-all duration-200 fixed mt-20">
      <div className="w-full h-full bg-black opacity-45 top-0 left-0 absolute"></div>
      <div className="w-5/6 animate-fadeIn  bg-white h-96 left-24 top-0  absolute z-10 bg-opacity-100 border shadow-xl">
        <div>
          {itemsType == "mens" && <MenItems />}
          {itemsType == "women" && <WomenItems />}
          {itemsType == "homeandliving" && <HomeAndLivingItems />}
          {itemsType == "kids" && <KidsItems />}
          {itemsType == "beauty" && <BeautyItems />}
          {itemsType == "studio" && <Studio />}
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
