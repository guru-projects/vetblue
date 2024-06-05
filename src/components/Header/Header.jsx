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
      <nav className={HeaderCss.navbar} >
        <img src={logo} alt="logo" />
        <div className={HeaderCss.listmob}>
            <ul className={`${HeaderCss.list} ${isActive ? HeaderCss.active : ""}`}
              onClick={removeActive}>
              <li onClick={removeActive}>Home</li>
              <li onClick={removeActive}>Products</li>
              <li onClick={removeActive}>Career</li>
              <li onClick={removeActive}>Contact</li>
            </ul>
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
