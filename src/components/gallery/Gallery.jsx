import Styles from './Gallery.module.css';
import chicken from '../../assets/chicken.png';

const Gallery = () => {
  return (
    <div>
      <div className={Styles.image}>
          <img src={require('../../assets/404.png')} alt="404 png" />
      </div>
        {/* <div className={Styles.textContent}>
            <p className={Styles.head}>Gallery</p>
            <p className={Styles.content}>Our top selling product that you may like</p>
        </div>
        <div className={Styles.gallery}>
          <div className={Styles.galleryContent}>
            <img src={chicken} alt="chicken" />
            <img src={chicken} alt="chicken" />
            <img src={chicken} alt="chicken" />
            <img src={chicken} alt="chicken" />
            <img src={chicken} alt="chicken" />
            <img src={chicken} alt="chicken" />
            <img src={chicken} alt="chicken" />
            <img src={chicken} alt="chicken" />
            <img src={chicken} alt="chicken" />
            <img src={chicken} alt="chicken" />
          </div>
    </div> */}
    </div>
  );
};

export default Gallery;
