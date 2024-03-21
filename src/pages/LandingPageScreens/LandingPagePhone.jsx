import HorizontalSlider from "../../components/HorizontalSlider";
import { FirstSliderData, SecondSliderData } from "../../utils/Data";
function LandingPagePhone() {
  return (
    <div className="bg-white mt-1">
      <div className="flex flex-col gap-4">
        <HorizontalSlider>
          {FirstSliderData.map((d) => {
            return <img key={d.imgUrl} src={d.imgUrl} className="h-16 w-16" />;
          })}
        </HorizontalSlider>
        <HorizontalSlider>
          {SecondSliderData.map((d) => {
            return <img key={d.imgUrl} src={d.imgUrl} className="h-16 w-16" />;
          })}
        </HorizontalSlider>
      </div>
    </div>
  );
}

export default LandingPagePhone;
