import Styles from "./Styles.module.css";

const About = () => {
  return (
    <div className={Styles.about}>
      <div className={Styles.aboutHead}>About</div>

      <div className={Styles.aboutContainer}>
        <p className={Styles.hint}>GET TO KNOW US</p>
        <p className={Styles.heading}>Our Story</p>
        <p className={Styles.content}>
          VETBLUE ANIMAL CARE PRIVATE Ltd., is a Pune based manufacturing unit
          headed by experienced Veterinarian team who has over twenty-five years
          of knowledge in the field of poultry industry. We are expertise in
          third party manufacturing of poultry medicines and feed supplements.
          We take a unified approach to animal health, building a varied and
          durable range of products to keep animals healthy. We focus on
          state-of-the-art solutions that forecast, prevent, spot, and treat
          diseases. We adhere to strict quality and regulatory standards.
        </p>
      </div>
      <div className={Styles.aboutContainer}>
      <p className={Styles.hint}>EXPLORE VETBLUE</p>
        <p className={Styles.heading}>Company profile</p>
        <p className={Styles.content}>
          VETBLUE ANIMAL CARE PRIVATE Ltd., is a Pune based manufacturing unit
          headed by experienced Veterinarian team who has over twenty-five years
          of knowledge in the field of poultry industry. We are expertise in
          third party manufacturing of poultry medicines and feed supplements.
          We take a unified approach to animal health, building a varied and
          durable range of products to keep animals healthy. We focus on
          state-of-the-art solutions that forecast, prevent, spot, and treat
          diseases. We adhere to strict quality and regulatory standards.
        </p>
      </div>
    </div>
  );
};

export default About;
