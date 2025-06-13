import Styles from "./Career.module.css";
import p1 from '../../assets/p1.webp';
import p2 from '../../assets/p2.webp';
import p3 from '../../assets/p3.webp';
import p4 from '../../assets/p4.webp';
import p5 from '../../assets/p5.webp';
import p6 from '../../assets/p6.webp';

const Career = () => {
  return (
    <div>
      <div className={Styles.careerSection}>
        <p className={Styles.careerSlogan}>ONE SIMPLE PROMISE: CAREERS AT VETBLUE ARE NEVER BORING</p>
        <p className={Styles.careerHead}>Ready to grow further?</p>
        <p className={Styles.careerContent}>
          VetBlue is more than a job, it’s a launch pad. A place where the
          ever-curious, caring and daring <br /> come to liberate their growth
          potential — together.
        </p>
        <button onClick={() => window.location = 'mailto:vetbluehostinger@gmail.com'}>Upload Resume</button>
        <div className={Styles.profiles}>
            <img className={Styles.img1} src={p1} alt="" />
            <img className={Styles.img2} src={p2} alt="" />
            <img className={Styles.img3} src={p3} alt="" />
            <img className={Styles.img4} src={p4} alt="" />
            <img className={Styles.img5} src={p5} alt="" />
            <img className={Styles.img6} src={p6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Career;
