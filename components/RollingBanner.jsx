import Image from 'next/image'

const RollingBanner = () => (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
        <Image src="/banners/dresses_sm.jpeg" alt="Unique Women's dresses at a budget" width={1000} height={500} />
        </div>
        <div className="carousel-item">
            <Image src="/banners/earings_sm.jpeg" alt="Great Silver earings" width={1000} height={500} />
        </div>
        <div className="carousel-item">
            <Image src="/banners/dresses_sm.jpeg" alt="Active wear for women" width={1000} height={500} />
        </div>
        </div>
    </div>
    );

  export default RollingBanner;