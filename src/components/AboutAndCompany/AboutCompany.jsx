import Styles from './Styles.module.css';
import arrow from "../../assets/right-arrow.png";
import chicken from '../../assets/chicken.png';
import egg from '../../assets/Egg-York 1.png';
import { useNavigate } from 'react-router-dom';

const AboutCompany = () => {

  const navigate = useNavigate();
  const navigateTo = (path) => {
      navigate(path);
      window.scrollTo(0, 0);
  }

  return (
    <div className={Styles.cardContainer}>
        <div className={Styles.card}>
          <div>
            <img src={chicken} alt="chicken" />
          </div>
          <div className={Styles.cardContent}>
              <p className={Styles.head}>About Us</p>
              <p className={Styles.para}>
              VETBLUE ANIMAL CARE PRIVATE Ltd., is a Pune based manufacturing unit headed by experienced Veterinarian team who has over twenty-five years of knowledge in the field of poultry industry.
              </p>
              <button className={Styles.button} onClick={() => navigateTo('/about')}>
                Read More 
              </button>
          </div>
        </div>
        <div className={Styles.card}>
          <div className={Styles.cardContent}>
              <p className={Styles.head}>Company Profile</p>
              <p className={Styles.para}>
              We are expertise in third party manufacturing of poultry medicines and feed supplements. We take a unified approach to animal health, building a varied and durable range of products to keep animals healthy. 
              </p>
              <button className={Styles.button} onClick={() => navigateTo('/about')}>
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