import { Link } from "react-router-dom";

function LandingPageDesktop() {
  return (
    <div className="flex flex-col gap-2">
      <div className="mt-4">
        <img
          className="w-full h-full"
          src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1709964725/ecommerce_assets/jrxo5ikc28y4edmhtkoj.png"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center relative">
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1709964408/ecommerce_assets/dszxw02rftlbcnuxrxqc.jpg" />
        <Link to={"/shop/women"}>
          <div className="w-1/2 h-full top-0 left-0 absolute opacity-0" />
        </Link>
        <Link to={"/shop/men"}>
          <div className="w-1/2 h-full top-0 right-0 absolute opacity-0" />
        </Link>
      </div>
      <div className="flex flex-col w-full h-full p-2 gap-2 bg-white">
        <Link to={"/"}>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1709979471/ecommerce_assets/f5txggi0aletubi1qozo.png" />
        </Link>
        <div className="flex w-full h-full justify-between items-center py-2 px-4">
          <Link to={"/online-fashion-store"}>
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1709978141/ecommerce_assets/ikzh7ahpnkdtwmmxuuiq.png" />
          </Link>
          <Link to={"/online-fashion-store"}>
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1709978150/ecommerce_assets/uzrfshkwbetiqmeuw4aw.png" />
          </Link>
        </div>
        <Link to={"/"}>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1709978125/ecommerce_assets/s8gctd01o1hqn8ahrvld.png" />
        </Link>
      </div>
    </div>
  );
}

export default LandingPageDesktop;
