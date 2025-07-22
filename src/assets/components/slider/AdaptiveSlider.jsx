import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AdaptiveSlider() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 1500,
  
    
  };

  return (
    
      <div className="slider-container overflow-hidden" style={{ maxWidth: "1000px", margin: "0 auto", objectFit:"cover" }} >
        <Slider {...settings}>
          <div >
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" alt="img1" />
          </div>
          <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/021/011/547/small_2x/carousel-layout-templates-microblog-or-carousel-social-media-template-with-yellow-and-green-color-combination-vector.jpg" alt="img2" />
          </div>
          <div>
            <img src="https://4.bp.blogspot.com/-7PqNvIFKsq8/UQbKEibGE5I/AAAAAAAACdg/CuSEnyhDhBw/s1600/carousel_main.jpg" alt="img3" />
          </div>
        </Slider>
      </div>
    
  );
}

export default AdaptiveSlider;

