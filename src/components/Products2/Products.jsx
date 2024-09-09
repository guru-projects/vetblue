import Styles from './Products.module.css';
import chicken from '../../assets/chicken.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';

const Products = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className={Styles.products}>
          <p className={Styles.head}>Products</p>
          <div className={Styles.productContent}>
            <p className={Styles.subHead}>Polutry</p>
            <p className={Styles.content}>Superior Quality & Value <br />Added Poultry Formulations</p>
          </div>
      </div>
      <div className={Styles.image}>
      <p>Website Under Construction</p>
          <svg viewBox="-1.5 -1.5 300 300" xmlns="http://www.w3.org/2000/svg" id="Web-Buildiing-Error--Streamline-Ux" height={300} width={300} ><desc>{"Web Buildiing Error Streamline Illustration: https://streamlinehq.com"}</desc><path d="M32.554170000000006 169.29000000000002a118.80000000000001 118.80000000000001 0 1 0 237.60000000000002 0 118.80000000000001 118.80000000000001 0 1 0 -237.60000000000002 0Z" fill="#d9edff" strokeWidth={3} /><path d="M119.09700000000001 80.19000000000001a2.97 2.97 0 0 1 -2.97 2.97h-17.82a2.97 2.97 0 0 1 -2.97 -2.97v-8.91h23.76Z" fill="#90c3e4" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="m74.55888 136.62 32.67 -23.76 32.67 23.76 -65.34 0z" fill="none" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="M101.28888 106.92a5.94 5.94 0 1 0 11.88 0 5.94 5.94 0 1 0 -11.88 0Z" fill="#ffffff" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="m107.22888 83.16000000000001 0 17.82" fill="none" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="M198.87417000000002 278.20287a118.25352000000001 118.25352000000001 0 0 0 17.82 -9.67923V71.28h-17.82Z" fill="#ffffff" strokeWidth={3} /><path d="m216.69417 268.52364000000006 0 -197.24364000000003 -17.82 0 0 206.92287000000005" fill="none" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="m198.87417000000002 71.28 17.82 17.82 -17.82 17.82 17.82 17.82 -17.82 17.82 17.82 17.82 -17.82 17.82 17.82 17.82 -17.82 17.82 17.82 17.82 -17.82 17.82 17.82 17.82" fill="none" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="M199.29888 29.700000000000003h17.82v23.76h-17.82z" fill="#ffffff" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="M39.53367 71.28a1.485 1.485 0 0 1 -1.04841 -2.5363800000000003L53.757000000000005 53.46h196.02v17.82Z" fill="#ffffff" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="m217.11888000000002 29.700000000000003 -8.91 -20.790000000000003 -8.91 20.790000000000003 17.82 0z" fill="#ffffff" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="M270.567 68.31a2.97 2.97 0 0 1 -2.97 2.97h-17.82v-17.82a2.97 2.97 0 0 1 2.97 -2.97h17.82Z" fill="#90c3e4" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="m89.40888000000001 53.46 118.80000000000001 -44.550000000000004 62.370000000000005 41.580000000000005" fill="none" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="m217.11888000000002 29.700000000000003 -17.82 20.546460000000003" fill="none" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="m53.76888 53.46 17.82 17.82 17.82 -17.82 17.82 17.82 17.82 -17.82 17.82 17.82 17.82 -17.82 17.82 17.82 17.82 -17.82 17.82 17.82 17.82 -17.82 17.82 17.82" fill="none" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="m26.421120000000005 136.62 158.22378 0 0 118.34559000000002 -158.22378 0Z" fill="#90c3e4" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="M175.4379 136.62H35.64a9.207 9.207 0 0 0 -9.207 9.207v12.696750000000002h158.2119V145.82700000000003a9.207 9.207 0 0 0 -9.207 -9.207Z" fill="#ffffff" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /><path d="M35.62812 147.51396a4.6035 4.6035 0 1 0 9.207 0 4.6035 4.6035 0 1 0 -9.207 0Z" fill="#90c3e4" stroke="#4b9cd3" strokeLinejoin="round" strokeWidth={3} /><path d="M51.529500000000006 147.51396a4.6035 4.6035 0 1 0 9.207 0 4.6035 4.6035 0 1 0 -9.207 0Z" fill="#90c3e4" stroke="#4b9cd3" strokeLinejoin="round" strokeWidth={3} /><path d="M67.42791 147.51396a4.6035 4.6035 0 1 0 9.207 0 4.6035 4.6035 0 1 0 -9.207 0Z" fill="#90c3e4" stroke="#4b9cd3" strokeLinejoin="round" strokeWidth={3} /><path d="M122.61942 229.35825a8.03682 8.03682 0 0 1 -5.717250000000001 -2.3760000000000003L105.53301 215.62199999999999 94.149 226.98819000000003a8.084340000000001 8.084340000000001 0 0 1 -11.431530000000002 -11.437470000000001l11.36916 -11.366190000000001 -11.36916 -11.36916A8.084340000000001 8.084340000000001 0 0 1 94.149 181.3779l11.384010000000002 11.375100000000002 11.36916 -11.372130000000002a8.08731 8.08731 0 1 1 11.434500000000002 11.437470000000001l-11.36916 11.36916 11.36916 11.366190000000001a8.090280000000002 8.090280000000002 0 0 1 -5.717250000000001 13.807530000000002Z" fill="#ffffff" stroke="#4b9cd3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /></svg>      
      </div>
      {/* <div >
        <p className={Styles.subHead}>Products by category</p>
      </div>
      <div>
      <div className="slider-container">
      <button className="button" onClick={previous}>
          Previous
        </button>
      <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
      <button className="button" onClick={next}>
          Next
        </button>
    </div>
      </div> */}
    </div>
  )
}

export default Products;