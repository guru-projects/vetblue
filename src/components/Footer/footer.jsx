import Styles from "./footer.module.css";
import logo from '../../assets/logo.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos='fade-up' className={Styles.footer}>
      <hr className={Styles.line} />
      <div className={Styles.footerContent}>
        <div className={Styles.footerLogo}>
          <img src={logo} alt="logo" />
          <p>Your natural candle made for your home and for your poultry.</p>
        </div>
        <div className={Styles.contact}>
          <p className={Styles.head}>Contact us</p>
          <p className={Styles.content}>
            13, Orion Business Park, 4th Floor, Kapurbawdi, Next to Cinewonder
            Mall, Ghodbunder Road, Thane (W) – 400610, <br /> Mumbai, India.
            <br /> E: info@glamac.com
          </p>
        </div>
        <div className={Styles.products}>
          <p className={Styles.head}>Products</p>
          <p className={Styles.content}>Poultry</p>
        </div>
      </div>
      <div className={Styles.copyRights}>
        &copy; {year} All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
