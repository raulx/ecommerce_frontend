import HorizontalSlider from "../../components/HorizontalSlider";
import { FirstSliderData, SecondSliderData } from "../../utils/Data";
import Carousel from "../../components/Carousel";
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
      <img
        className="my-4"
        src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931162/ecommerce_assets/mobilescreenassets/s5wmdyshxcjs5b2t3gvj.jpg"
      />
      <div className="my-2">
        <Carousel slides={8} speed={300}>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125393/ecommerce_assets/mobilescreenassets/qj89yjrh5jw0xxet4sup.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125394/ecommerce_assets/mobilescreenassets/wtrxol69gnhpw49zrm6d.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125394/ecommerce_assets/mobilescreenassets/dgavt7dxmb4kwunj7lpt.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125393/ecommerce_assets/mobilescreenassets/xrwbxldbcxoi552xeu72.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125393/ecommerce_assets/mobilescreenassets/khjanlhyd89v7dbnfthq.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125393/ecommerce_assets/mobilescreenassets/qyshigmygkdedsa6hwfq.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125393/ecommerce_assets/mobilescreenassets/zr16dzf3ln9svnx9arbo.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711126967/ecommerce_assets/mobilescreenassets/fimb4b7rlwysekjkqxjf.jpg" />
        </Carousel>
      </div>
      <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711177024/ecommerce_assets/mobilescreenassets/ore0fq9optpjslg9lbvk.jpg" />
      <div className="flex my-2">
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931165/ecommerce_assets/mobilescreenassets/owxcuov03rhw9qjrzglo.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931161/ecommerce_assets/mobilescreenassets/qls0m4hkb32lk9mpoyvn.jpg" />
        </div>
      </div>
    </div>
  );
}

export default LandingPagePhone;
