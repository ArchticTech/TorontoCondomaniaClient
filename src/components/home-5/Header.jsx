import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMenuContent from "../common/header/HeaderMenuContent";
import Image from "next/image";

const Header = () => {
  const [showSearchButton, setShowSearchButton] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 100) {
        // You can adjust the threshold as needed
        setShowSearchButton(true);
      } else {
        setShowSearchButton(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showSearchButton]);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`header-nav menu_style_home_one home5 navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">
        {/* <!-- Ace Responsive Menu --> */}
        <div className="d-flex align-items-center flex-wrap home6-nav">
          <Link href="/" className="navbar_brand float-start dn-smd">
            <Image
              width={40}
              height={45}
              className="logo1 img-fluid contain"
              src="/assets/images/header-logo.png"
              alt="header-logo.png"
            />
            <Image
              width={40}
              height={45}
              className="logo2 img-fluid contain"
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <span>FindHouse</span>
          </Link>
          {/* site logo brand */}
          {showSearchButton && (
            <div className="ht_left_widget float-left header_search_section">
              <ul>
                <li className="list-inline-item dn-1440">
                  <div className="ht_search_widget">
                    <div className="header_search_widget">
                      <form className="form-inline mailchimp_form d-flex flex-row align-items-center flex-wrap">
                        <input
                          type="text"
                          className="form-control"
                          id="inlineFormInputName2"
                          placeholder="What are you looking for?"
                        />
                        <button type="submit" className="btn btn-primary">
                          <span className="flaticon-magnifying-glass"></span>
                        </button>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}

          <nav className="ms-auto">
            <HeaderMenuContent />
          </nav>
          {/* End .navbar */}
        </div>
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
