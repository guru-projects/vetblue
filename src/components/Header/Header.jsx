import HeaderCss from "./Header.module.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className={HeaderCss.head}>
      <nav className={HeaderCss.navbar}>
        <img src={logo} alt="logo" />
        <div className={HeaderCss.listmob}>
            <div className={`${HeaderCss.list} ${isActive ? HeaderCss.active : ""}`}
              onClick={removeActive}>
              <p onClick={removeActive}>Home</p>
              <p onClick={removeActive}>Produucts</p>
              <p onClick={removeActive}>Career</p>
              <p onClick={removeActive}>Contact</p>
            </div>
        </div>
        <div
          className={`${HeaderCss.hamburger} ${
            isActive ? HeaderCss.active : ""
          }`}
          onClick={toggleActiveClass}>
          <span className={HeaderCss.bar}></span>
          <span className={HeaderCss.bar}></span>
          <span className={HeaderCss.bar}></span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
