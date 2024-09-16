import Styles from "./Description.module.css";
import vision from '../../assets/vision-ill.png';
import mission from '../../assets/mission-ill.png';
import brand from '../../assets/brand-ill.png';

const VisionMission = () => {
  return (
    <div className={Styles.description}>
      <div className={Styles.ourPurpose}>Our Purpose</div>
      <div className={Styles.section}>
        <div className={Styles.box}>
          <img className={Styles.png} src={vision} alt='vision'></img>
          <p className={Styles.heading}>Vision</p>
          <p className={Styles.content}>
            We VETBLUE ANIMAL CARE PRIVATE Ltd., has a vision to achieve complete
            customer satisfaction and to improve healthiness of animals
            continuously in a cost-efficient manner.
          </p>
        </div>
        <div className={Styles.box}>
        <img className={Styles.png} src={mission} alt='mission'></img>
        <p className={Styles.heading}>Mission</p>
          <p className={Styles.content}>
            Our objective is a commitment to the highest quality poultry medicines
            and feed supplements for a healthy poultry atmosphere. In addition to
            our client satisfaction our main focus is to provide cost efficient
            products which aids high productivity, less mortality and healthy
          </p>
        </div>
        <div className={Styles.box}>
        <img className={Styles.png} src={brand} alt='brand'></img>
        <p className={Styles.heading}>Brand Message</p>
          <p className={Styles.content}>
            VETBLUE ANIMAL CARE PRIVATE Ltd., is a Pune based manufacturing unit
            headed by experienced Veterinarian team who has over twenty-five years
            of knowledge in the field of poultry industry. We are expertise in
            third party manufacturing of poultry medicines and feed supplements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
