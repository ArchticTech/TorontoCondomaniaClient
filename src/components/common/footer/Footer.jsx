import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>About Site</h4>
          <p>
          Experience a fast, secure, and up-to-the-minute real estate platform in the GTA. We&apos;re changing how you buy, sell, and rent. Let&apos;s make it happen together
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/service">Services</Link>
            </li>
            <li>
              <Link href="/customer-support">Support Center</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:support@torontocondomania.ca">support@torontocondomania.ca</a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/RBRJkZNitnXWKgZG7">254 -  7777 Weston Rd, Woodstock, ON</a>
            </li>
            <li>
              <a href="tel:+16476996675">+1 (647) 699 - 6675</a>
            </li>
            <li>
              <a href="tel:+18077894756">+1 (807) 789 - 4756</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Follow us</h4>
          <ul className="mb30">
            <Social />
          </ul>
          <h4>Subscribe</h4>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
