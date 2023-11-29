import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation: React.FC = () => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getHeaderClassName = () => {
    if (location.pathname === '/signup') {
      return 'signup_header'; // Apply different CSS class for the '/signup' route
    } else if(location.pathname === '/') {
      return 'login_header'; // Apply default CSS class for other routes
    }
    else if(location.pathname === "/aboutus")
    return 'header_aboutus';
    else return 'header'
  };

  const renderImage = () => {
    if (windowWidth <= 767) {
      if (location.pathname === "/")
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <circle cx="30.5" cy="30.5" r="30.5" fill="#EAD9C2" />
          </svg>
        );

      else if (location.pathname === "/signup")
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <circle cx="30.5" cy="30.5" r="30.5" fill="#CBB59E" />
          </svg>
        );
      else {
        return <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="61"
          viewBox="0 0 189 189"
          fill="none"
        >
          <circle cx="94.5" cy="94.5" r="94.5" fill="#FDDDAB" />
        </svg>
      }
    } else if (windowWidth >= 768 && windowWidth <= 1023) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="125"
          height="125"
          viewBox="0 0 189 189"
          fill="none"
        >
          <circle cx="94.5" cy="94.5" r="94.5" fill="#FDDDAB" />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="189"
          height="189"
          viewBox="0 0 189 189"
          fill="none"
        >
          <circle cx="94.5" cy="94.5" r="94.5" fill="#FDDDAB" />
        </svg>
      );
    }
  };
  return (
    <header className={getHeaderClassName()}>
      <div className="logo_circle">{renderImage()}</div>
      <nav className={location.pathname === '/'? 'nav_login': "nav"}>
        <ul>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">FAQ's</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">Our Services</NavLink>
          </li>
          <li>
            <NavLink to="/paymentupi">Payment</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          {windowWidth > 767 && <li>
            <NavLink to="/">Login</NavLink>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
