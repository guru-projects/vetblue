import Styles from "./Description.module.css";
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
        <div className={Styles.svg}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Ar-View-See-Through-Eye--Streamline-Ultimate" height={24} width={24} ><desc>{"AR View See Through Eye Streamline Icon: https://streamlinehq.com"}</desc><path stroke="#282828" strokeLinecap="round" strokeLinejoin="round" d="M11.9996 0.835243C8.93115 0.784241 5.75763 2.92783 3.76248 5.12394c-0.20942 0.2325 -0.32532 0.53433 -0.32532 0.84724s0.1159 0.61474 0.32532 0.84723c1.951 2.14968 5.11614 4.34349 8.23712 4.29179 3.121 0.0517 6.2862 -2.14211 8.2394 -4.29179 0.2095 -0.23249 0.3254 -0.53432 0.3254 -0.84723s-0.1159 -0.61474 -0.3254 -0.84724C18.2416 2.92783 15.0681 0.784241 11.9996 0.835243Z" strokeWidth={1.5} /><path stroke="#282828" strokeLinecap="round" strokeLinejoin="round" d="M14.3957 5.97321c0 0.47384 -0.1405 0.93705 -0.4038 1.33104 -0.2632 0.39399 -0.6374 0.70107 -1.0752 0.8824 -0.4378 0.18133 -0.9195 0.22878 -1.3842 0.13634 -0.4648 -0.09245 -0.8917 -0.32063 -1.2267 -0.65569 -0.33508 -0.33506 -0.56326 -0.76195 -0.6557 -1.22669 -0.09244 -0.46474 -0.045 -0.94646 0.13634 -1.38424 0.18133 -0.43778 0.48836 -0.81195 0.88236 -1.07521 0.394 -0.26326 0.8572 -0.40377 1.3311 -0.40377 0.6354 0 1.2448 0.25242 1.6941 0.70172 0.4493 0.4493 0.7017 1.05869 0.7017 1.6941Z" strokeWidth={1.5} /><path stroke="#282828" strokeLinecap="round" strokeLinejoin="round" d="M16.2045 20.4688c2.0076 -0.3986 3.7235 -1.0735 4.9307 -1.9395 1.2072 -0.866 1.8516 -1.8841 1.8516 -2.9256 0 -1.3967 -1.1575 -2.7361 -3.218 -3.7236m-15.53761 0c-1.0153 0.4866 -1.82681 1.0664 -2.38162 1.7084 -0.83156 0.9622 -1.04914 2.021 -0.62521 3.0425 0.42392 1.0215 1.47031 1.9598 3.00684 2.6963 1.53653 0.7364 3.49418 1.238 5.62541 1.4411 0.70929 0.0677 1.42719 0.1012 2.14339 0.1012h1.0122" strokeWidth={1.5} /><path stroke="#282828" strokeLinecap="round" strokeLinejoin="round" d="m10.852 18.5736 2.296 2.296 -2.296 2.296" strokeWidth={1.5} /></svg>
            <p className={Styles.head}>Vision</p>
        </div>
          <p className={Styles.para}>
            We vetblue animal care private Ltd., has a vision to achieve
            complete customer satisfaction.
          </p>
          <button className={Styles.button} onClick={() => navigateTo('/visionmission')}>
            Read More <img className={Styles.arrow} src={arrow} alt="" />
          </button>
        </div>
        <div className={Styles.card}>
        <div className={Styles.svg}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Multiple-Actions-Flag--Streamline-Ultimate" height={24} width={24} ><desc>{"Multiple Actions Flag Streamline Icon: https://streamlinehq.com"}</desc><path d="M14.25 12.75h9v6h-9z" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path d="m14.25 12.75 0 10.5" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path d="M3 3.75a3 3 0 1 0 6 0 3 3 0 1 0 -6 0Z" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path d="M11.25 13.5a5.25 5.25 0 0 0 -10.5 0v2.25H3l0.75 7.5h4.5l0.75 -7.5h2.25Z" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path d="M13.875 3.375a2.625 2.625 0 1 0 5.25 0 2.625 2.625 0 1 0 -5.25 0Z" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path d="M20.4 9a4.5 4.5 0 0 0 -7.285 -0.71" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /></svg>
            <p className={Styles.head}>Mission</p>
        </div>
          <p className={Styles.para}>
            Our objective is a commitment to the highest quality poultry
            medicines and feed supplements for a healthy poultry.
          </p>
          <button className={Styles.button} onClick={() => navigateTo('/visionmission')}>
            Read More <img className={Styles.arrow} src={arrow} alt="" />
          </button>
        </div>
        <div className={Styles.card}>
        <div className={Styles.svg}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Messages-Bubble-Quotation--Streamline-Ultimate" height={24} width={24} ><desc>{"Messages Bubble Quotation Streamline Icon: https://streamlinehq.com"}</desc><g><path d="M12.75 0.75a10.49 10.49 0 0 0 -8.92 16l-3.08 6.5 6.47 -3.08A10.5 10.5 0 1 0 12.75 0.75Z" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><g><path d="M15 10.5A0.75 0.75 0 0 0 15 9h0a0.75 0.75 0 1 0 0 1.5" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path d="M15.17 13.76a2.79 2.79 0 0 0 1.62 -2.38c0 -1 -0.51 -2.26 -1.67 -2.37" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /></g><g><path d="M9.76 10.5a0.75 0.75 0 0 0 0 -1.5h0a0.75 0.75 0 1 0 0 1.5" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path d="M9.92 13.76a2.79 2.79 0 0 0 1.62 -2.38c0 -1 -0.51 -2.26 -1.67 -2.37" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /></g></g></svg>
            <p className={Styles.head}>Brand Message</p>
        </div>
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
