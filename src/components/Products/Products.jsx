import Styles from './Products.module.css';
import chicken from '../../assets/chicken.png';
import {Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Products = () => {
  return (
    <div>
      <div className={Styles.products}>
          <div className={Styles.productContent}>
            <p className={Styles.head}>Products</p>
            <p className={Styles.subHead}>Polutry</p>
            <p className={Styles.content}>Superior Quality & Value <br />Added Poultry Formulations</p>
          </div>
      </div>
      <div >
        <p className={Styles.subHead}>Products by category</p>
      </div>
      <div className={Styles.carosul}>
      <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation]}
      // spaceBetween={30}
      slidesPerView={5}
      centeredSlides={true}
      navigation
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide><img src={chicken} alt="product" /></SwiperSlide>
      <SwiperSlide><img src={chicken} alt="product" /></SwiperSlide>
      <SwiperSlide><img src={chicken} alt="product" /></SwiperSlide>
      <SwiperSlide><img src={chicken} alt="product" /></SwiperSlide>
      <SwiperSlide><img src={chicken} alt="product" /></SwiperSlide>
      <SwiperSlide><img src={chicken} alt="product" /></SwiperSlide>
      <SwiperSlide><img src={chicken} alt="product" /></SwiperSlide>
      <SwiperSlide><img src={chicken} alt="product" /></SwiperSlide>
      <SwiperSlide><img src={chicken} alt="product" /></SwiperSlide>
      <SwiperSlide><img src={chicken} alt="product" /></SwiperSlide>
    </Swiper>
      </div>
    </div>
  )
}

export default Products;