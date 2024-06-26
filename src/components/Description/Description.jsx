import Styles from "./Description.module.css";
import vision from "../../assets/vission.png";
import mission from "../../assets/mission.png";
import message from "../../assets/message.png";
import arrow from "../../assets/arrow.png";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
      navigate(path);
      window.scrollTo(0, 0);
  }

  return (
    <div className={Styles.animate}>
      <div className={Styles.cardContainer}>
        <div className={Styles.card}>
          <img src={vision} alt="" />
          <p className={Styles.head}>Vision</p>
          <p className={Styles.para}>
            We vetblue animal care private Ltd., has a vision to achieve
            complete customer satisfaction.
          </p>
          <button className={Styles.button} onClick={() => navigateTo('/visionmission')}>
            Read More <img className={Styles.arrow} src={arrow} alt="" />
          </button>
        </div>
        <div className={Styles.card}>
          <img src={mission} alt="" />
          <p className={Styles.head}>Mission</p>
          <p className={Styles.para}>
            Our objective is a commitment to the highest quality poultry
            medicines and feed supplements for a healthy poultry.
          </p>
          <button className={Styles.button} onClick={() => navigateTo('/visionmission')}>
            Read More <img className={Styles.arrow} src={arrow} alt="" />
          </button>
        </div>
        <div className={Styles.card}>
          <img src={message} alt="" />
          <p className={Styles.head}>Brand Message</p>
          <p className={Styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            totam ipsam fugiat, aspernatur ut reiciendis.
          </p>
          <button className={Styles.button} onClick={() => navigateTo('/visionmission')}>
            Read More <img className={Styles.arrow} src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
