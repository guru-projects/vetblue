import HeaderCss from "./Header.module.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = (path) => {
    setIsActive(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos='fade-down' className={HeaderCss.head}>
      <nav className={HeaderCss.navbar}>
        <img
          src={logo}
          alt="logo"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        />
        <div className={HeaderCss.listmob}>
          <div className={HeaderCss.mobstyle}>
            <ul
              className={`${HeaderCss.list} ${isActive ? HeaderCss.active : ""}`}>
              <li onClick={() => removeActive("/")}>Home</li>
              <li onClick={() => removeActive("/products")}>Products</li>
              <li onClick={() => removeActive("/career")}>Career</li>
              <li onClick={() => removeActive("/contact")}>Contact us</li>
            </ul>
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
