import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="w-10/12 mx-auto">
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-sm">ONLINE SHOPPING</h2>
              <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home & Living</li>
                <li>Beauty</li>
                <li>Gift Cards</li>
                <li>Myntra Insider</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-sm">USEFUL LINKS</h2>
              <ul>
                <li>Blog</li>
                <li>Careers</li>
                <li>Site Map</li>
                <li>Corporate Information</li>
                <li>Whitehat</li>
                <li>Cleartrip</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-48">
            <h1 className="font-bold text-sm">CUSTOMER POLICIES</h1>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&C</li>
              <li>Terms Of Use</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation</li>
              <li>Return</li>
              <li>Privacy Policy</li>
              <li>Grievance Officer</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-sm">
              EXPERIENCE MYNTRA APP ON MOBILE
            </h1>
            <div className="flex gap-4">
              <button className="flex justify-center w-48 items-center p-1 gap-4 rounded-lg bg-black text-white">
                <img
                  className="h-8 w-8"
                  src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710261620/ecommerce_assets/wfbcfgjonkcyceloqnv8.png"
                />
                <div className="flex flex-col justify-start items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-xl font-bold">Google Play</span>
                </div>
              </button>
              <button className="flex justify-center w-48 items-center p-1 gap-4 rounded-lg bg-black text-white">
                <img
                  className="h-12 w-12"
                  src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710261839/ecommerce_assets/natqcjh7jjiqadjiazyy.png"
                />
                <div className="flex flex-col justify-start items-start">
                  <span className="text-xs">Download on the</span>
                  <span className=" font-bold">App Store</span>
                </div>
              </button>
            </div>
            <h1 className="font-bold text-sm">KEEP IN TOUCH</h1>
            <div className="flex gap-4 text-gray-500">
              <FaFacebookSquare size={24} />
              <FaTwitter size={24} />
              <FaYoutube size={24} />
              <FaInstagramSquare size={24} />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710263509/ecommerce_assets/vk8dlumfo4hizf3mlu67.png" />

              <div>
                <span className=" font-bold text-md">100% ORIGINAL </span>
                guarantee for all products at myntra.com
              </div>
            </div>
            <div className="flex gap-4">
              <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710263509/ecommerce_assets/kt65jwhx4t44limr4wrq.png" />
              <div>
                <span className=" font-bold text-md">
                  Returns within 14days{" "}
                </span>
                of receiving your order
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
