import Styles from "./Description.module.css";
import vision from "../../assets/vission.png";
import mission from "../../assets/mission.png";
import message from "../../assets/message.png";
import arrow from "../../assets/arrow.png";

const Description = () => {
  return (
    <div className={Styles.animate}>
      <div className={Styles.cardContainer}>
        <div className={Styles.card}>
          <img src={vision} alt="" />
          <p className={Styles.head}>Vision</p>
          <p className={Styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            totam ipsam fugiat, aspernatur ut reiciendis.
          </p>
          <button className={Styles.button}>
            Read More <img className={Styles.arrow} src={arrow} alt="" />
          </button>
        </div>
        <div className={Styles.card}>
          <img src={mission} alt="" />
          <p className={Styles.head}>Mission</p>
          <p className={Styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            totam ipsam fugiat, aspernatur ut reiciendis.
          </p>
          <button className={Styles.button}>
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
          <button className={Styles.button}>
            Read More <img className={Styles.arrow} src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
