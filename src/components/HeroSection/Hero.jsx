import Styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={Styles.hero}>
      <div className={Styles.heroContant}>
        <p className={Styles.slogan}>“Next Step Your Poultry”</p>
        <p className={Styles.heading}><span className={Styles.large}>V</span>ET<span className={Styles.large}><span  className={Styles.b}>B</span>L</span>UE</p>
      </div>
    </div>
  );
};

export default Hero;
