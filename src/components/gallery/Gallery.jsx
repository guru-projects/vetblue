import { useState, useEffect, useMemo } from 'react';
import Styles from './Gallery.module.css';
import p1 from '../../assets/products/p1.jpg';
import p2 from '../../assets/products/p2.jpg';
import p3 from '../../assets/products/p3.jpg';
import p4 from '../../assets/products/p4.jpg';
import p5 from '../../assets/products/p5.jpg';
import p6 from '../../assets/products/p6.jpg';
import p7 from '../../assets/products/p7.jpg';
import p8 from '../../assets/products/p8.jpg';
import arrow from "../../assets/arrow.png";
import { useNavigate } from "react-router-dom";
const Gallery = () => {
    const navigate = useNavigate();
  const navigateTo = (path) => {
      navigate(path);
      window.scrollTo(0, 0);
  }
  const [isClient, setIsClient] = useState(false);
  
  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Memoize gallery images to prevent recreation on every render
  const galleryImages = useMemo(() => [
    p1, p2, p3, p4, p5, p6, p7, p8
  ], []);

  // Create doubled array for infinite scroll
  const infiniteImages = useMemo(() => 
    [...galleryImages, ...galleryImages], 
    [galleryImages]
  );

  // Don't render animation on server-side to prevent hydration mismatch
  if (!isClient) {
    return (
      <div>
        <div className={Styles.textContent}>
          <p className={Styles.head}>Gallery</p>
          <p className={Styles.content}>Our top selling products that you may like</p>
        </div>
        
        <div className={Styles.galleryContainer}>
          <div className={Styles.galleryContent}>
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={Styles.textContent}>
        <p className={Styles.head}>Gallery</p>
        <p className={Styles.content}>Our top selling products that you may like</p>
        <button className={Styles.button} onClick={() => navigateTo('/products')}>
                View All
              </button>
      </div>
      
      <div className={Styles.galleryContainer}>
        <div className={Styles.galleryContent}>
          {infiniteImages.map((img, index) => (
            <img
              key={`gallery-${index}`}
              src={img}
              alt={`Product ${(index % galleryImages.length) + 1}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;