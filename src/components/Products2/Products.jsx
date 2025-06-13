import { useState } from 'react';
import Styles from './Products.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import p1 from '../../assets/products/p1.jpg';
import p2 from '../../assets/products/p2.jpg';
import p3 from '../../assets/products/p3.jpg';
import p4 from '../../assets/products/p4.jpg';
import p5 from '../../assets/products/p5.jpg';
import p6 from '../../assets/products/p6.jpg';
import p7 from '../../assets/products/p7.jpg';
import p8 from '../../assets/products/p8.jpg';

const imageList = [p1, p2, p3, p4, p5, p6, p7, p8];

const Products = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div>
      <div className={Styles.products}>
        <p className={Styles.head}>Products</p>
        <div className={Styles.productContent}>
          <p className={Styles.subHead}>Poultry</p>
          <p className={Styles.content}>
            Superior Quality & Value <br />Added Poultry Formulations
          </p>
        </div>
      </div>

      <div>
        <p className={Styles.subHead}>Products by category</p>
      </div>

      <div className={Styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Default to 1 slide
          navigation
          loop={true} // Enable infinite loop
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: false // Keep autoplay after user interaction
          }}
          breakpoints={{
            480: { 
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: { 
              slidesPerView: 2,
              spaceBetween: 15
            },
            1024: { 
              slidesPerView: 3,
              spaceBetween: 20
            },
            1200: { 
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
        >
          {imageList.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className={Styles.imageContainer} onClick={() => setFullscreenImage(img)}>
                <img className={Styles.image} src={img} alt={`product${idx}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {fullscreenImage && (
        <div className={Styles.fullscreenOverlay} onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} className={Styles.fullscreenImage} alt="Fullscreen" />
        </div>
      )}
    </div>
  );
};

export default Products;