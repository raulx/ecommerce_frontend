import HorizontalSlider from "../../components/HorizontalSlider";
import { FirstSliderData, SecondSliderData } from "../../utils/Data";
import AutoSlider from "../../components/AutoSlider";
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
      <div className="py-4">
        <AutoSlider>
          <img
            className="h-24 w-60"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711198171/ecommerce_assets/mobilescreenassets/nfe1kwmqkcglyeykvkyz.jpg"
          />
          <img
            className="h-24 w-60"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711198171/ecommerce_assets/mobilescreenassets/nduwedgtyv70lknkvlkr.jpg"
          />
          <img
            className="h-24 w-60"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711198171/ecommerce_assets/mobilescreenassets/b4po9roz5bsom04c58cx.jpg"
          />
          <img
            className="h-24 w-60"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711198171/ecommerce_assets/mobilescreenassets/mzncpazd8simmjkroegr.jpg"
          />
        </AutoSlider>
      </div>
      <div className="py-4">
        <h1 className="p-2 font-bold">FEATURED BRANDS</h1>
        <HorizontalSlider>
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711211991/ecommerce_assets/mobilescreenassets/qpcqp4prqgy0l28jthcy.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711211991/ecommerce_assets/mobilescreenassets/gdnynuqwy9q3eq0cm1f0.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711211991/ecommerce_assets/mobilescreenassets/x5hhw4gianoqyceugqp6.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711211991/ecommerce_assets/mobilescreenassets/vogpkznylvgpehrt3hpe.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711211991/ecommerce_assets/mobilescreenassets/eokddgqezaqapffdn62i.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711211991/ecommerce_assets/mobilescreenassets/njlcyw8xi9axai2cqtdd.jpg"
          />
        </HorizontalSlider>
      </div>
      <div className="bg-[rgb(173,216,231)] px-2 py-4">
        <div className="flex justify-between px-4">
          <div>
            <h1 className="font-bold">Trending men&apos;s wear</h1>
            <p>Dapper Fits to Rock Every Look!</p>
          </div>
          <button className="bg-red-500 flex justify-center items-center w-24 h-8 rounded-lg text-xs text-white">
            Explore More
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 py-4">
          <img
            className=" h-32"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601831/ecommerce_assets/mobilescreenassets/xxfzd63z2holu1fhgnb9.jpg"
          />
          <img
            className=" h-32"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601831/ecommerce_assets/mobilescreenassets/a6yckb7wkgnjbcdanafq.jpg"
          />
          <img
            className=" h-32"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601831/ecommerce_assets/mobilescreenassets/bd5usx4llchzycl0swtl.jpg"
          />
          <img
            className=" h-32"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601225/ecommerce_assets/mobilescreenassets/dzirv1zamppqapn5u81l.jpg"
          />
          <img
            className=" h-32"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601225/ecommerce_assets/mobilescreenassets/akfleyhhtitxcbgqyivj.jpg"
          />
          <img
            className=" h-32"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601226/ecommerce_assets/mobilescreenassets/oc4e8blp7r9qhyc0bztg.jpg"
          />
          <img
            className=" h-32"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601831/ecommerce_assets/mobilescreenassets/etuyyzgvsj8vdq9pfebv.jpg"
          />
          <img
            className=" h-32"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601226/ecommerce_assets/mobilescreenassets/uhlctzyqwn5p2hvpfxiq.jpg"
          />
        </div>
        <div>
          <h1 className="font-bold">Explore super saver deals</h1>
          <AutoSlider>
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601831/ecommerce_assets/mobilescreenassets/zt3sq1azovvgtj4vkgsd.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601226/ecommerce_assets/mobilescreenassets/tozmtw7vmenpc0zpyekf.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601226/ecommerce_assets/mobilescreenassets/cnodzq3wnzxsleiwtwqg.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601226/ecommerce_assets/mobilescreenassets/qosmqlyg8panms7k0ixx.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601226/ecommerce_assets/mobilescreenassets/iuqawv5jxxkz2xu9hd3c.jpg"
            />
          </AutoSlider>
        </div>
      </div>
    </div>
  );
}

export default LandingPagePhone;
