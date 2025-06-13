import Styles from './Gallery.module.css';
import p1 from '../../assets/products/p1.jpg';
import p2 from '../../assets/products/p2.jpg';
import p3 from '../../assets/products/p3.jpg';
import p4 from '../../assets/products/p4.jpg';
import p5 from '../../assets/products/p5.jpg';
import p6 from '../../assets/products/p6.jpg';
import p7 from '../../assets/products/p7.jpg';
import p8 from '../../assets/products/p8.jpg';

const Gallery = () => {
  // Create an array with all product images repeated for infinite scroll effect
  const galleryImages = [
    p1, p2, p3, p4, p5, p6, p7, p8,
  ];

  return (
    <div>
      <div className={Styles.textContent}>
        <p className={Styles.head}>Gallery</p>
        <p className={Styles.content}>Our top selling products that you may like</p>
      </div>
      
      <div className={Styles.gallery}>
        <div className={Styles.galleryContent}>
          {galleryImages.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`Product ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;