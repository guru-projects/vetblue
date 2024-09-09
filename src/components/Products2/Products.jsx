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
      {/* <div className={Styles.image}>
          <img src={require('../../assets/PageNotFound.png')} alt="404 png" />
      </div> */}
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
      </div>
    </div>
  )
}

export default Products;