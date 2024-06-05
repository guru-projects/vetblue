import Styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={Styles.hero}>
      <div className={Styles.heroContant}>
        <p className={Styles.slogan}>“Next Step Your Poultry”</p>
        <p className={Styles.heading}>The Poultry <br /> Farm Company</p>
        <p className={Styles.contant}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat.
        </p>
      </div>
    </div>
  );
};

export default Hero;
