import Carousel from "../../components/Carousel";

function LandingPageDesktop() {
  return (
    <div className="bg-white py-8 mt-2 flex flex-col gap-12">
      <Carousel slides={6} autoslide={true} autoSlideInterval={5000}>
        <div className="flex">
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710159736/ecommerce_assets/ktkhudzxgoavqddcglxg.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710160079/ecommerce_assets/dx8tubaqkrzyownl4v7q.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710160244/ecommerce_assets/yt4j0gopkdkugqaoh2c2.png" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710161519/ecommerce_assets/tecmgel3tsv4xt8ussgq.png" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710162130/ecommerce_assets/ciiizwaqmpgxbhybmlz7.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710161326/ecommerce_assets/mzkaaaqjj6xj9ohljtk0.jpg" />
        </div>
      </Carousel>
      <div className="text-4xl uppercase font-bold my-8">
        <h1 className="ml-12 tracking-widest" style={{ color: "#3E4152" }}>
          Medal worthy brands to bag
        </h1>
      </div>
      <Carousel></Carousel>
    </div>
  );
}

export default LandingPageDesktop;
