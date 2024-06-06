import Styles from './Styles.module.css';
import arrow from "../../assets/right-arrow.png";
import chicken from '../../assets/chicken.png';
import egg from '../../assets/Egg-York 1.png';

const AboutCompany = () => {
  return (
    <div className={Styles.cardContainer}>
        <div className={Styles.card}>
          <div>
            <img src={chicken} alt="chicken" />
          </div>
          <div className={Styles.cardContent}>
              <p className={Styles.head}>About Us</p>
              <p className={Styles.para}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                totam ipsam fugiat, aspernatur ut reiciendis.
              </p>
              <button className={Styles.button}>
                Read More 
              </button>
          </div>
        </div>
        <div className={Styles.card}>
          <div className={Styles.cardContent}>
              <p className={Styles.head}>Company Profile</p>
              <p className={Styles.para}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                totam ipsam fugiat, aspernatur ut reiciendis.
              </p>
              <button className={Styles.button}>
                Read More
              </button>
          </div>
          <div>
            <img src={egg} alt="chicken" />
          </div>
        </div>
        
    </div>
  )
}

export default AboutCompany