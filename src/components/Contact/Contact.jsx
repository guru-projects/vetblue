import Styles from "./Contact.module.css";
import call from "../../assets/telephone.png";
import location from "../../assets/location.png";

const Contact = () => {
  return (
    <div>
      <div className={Styles.contact}>
        <div className={Styles.heading}>
          <h1>Contact us</h1>
        </div>
        <div className={Styles.cardContainer}>
          <div className={Styles.card}>
            <div className={Styles.title}>
              <p className={Styles.head}>Rest of India</p>
              <p className={Styles.content}>Vetblue Animal Care Private Limited</p>
            </div>
            <div className={Styles.location}>
              <div className={Styles.locationHead}>
                <img src={location} alt="location" />
                <p>Find us</p>
              </div>
              <div className={Styles.locationContent}>
                <p>
                  Flat No: A/104, Palash -24, <br />
                  Daxin Laxmi Nagar, Moshi, <br />
                  Pune - 412105 <br />
                  Maharashtra, India.
                </p>
              </div>
            </div>
            <div className={Styles.call}>
              <div className={Styles.callHead}>
                <img src={call} alt="call" />
                <p>Call us</p>
              </div>
              <div className={Styles.callContent}>
                <p>+91 123 456 xxxx</p>
              </div>
            </div>
          </div>
          <div className={Styles.card}>
            <div className={Styles.title}>
              <p className={Styles.head}>South India</p>
              <p className={Styles.content}>Vetblue Animal Care Private Limited</p>
            </div>
            <div className={Styles.location}>
              <div className={Styles.locationHead}>
                <img src={location} alt="location" />
                <p>Find us</p>
              </div>
              <div className={Styles.locationContent}>
                <p>
                  No: 14, Electrical and Electronics Industrial Estate, <br />
                  Hosur - 635109 <br />
                  Tamil Nadu, India.
                </p>
              </div>
            </div>
            <div className={Styles.call}>
              <div className={Styles.callHead}>
                <img src={call} alt="call" />
                <p>Call us</p>
              </div>
              <div className={Styles.callContent}>
                <p>+91 123 456 xxxx</p>
              </div>
            </div>
          </div>
                </div>
        </div>
    </div>
  );
};

export default Contact;
