import GlobalHeroFilter from "../common/GlobalHeroFilter";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="home-six home6-overlay">
      <div className="container">
        <div className="row posr">
          <div className="col-lg-12">
            <div className="home_content home6 row">
              <div className="home-hero-image col-md-6">
                <Image 
                  layout="fill"
                  src='/assets/images/home/background-building.png'
                  alt="Background Building Image" />
              </div>
              <div className="home-text home6 text-center col-md-6">
                <h2 className="hero-title">Enjoy The Finest Homes</h2>
                <p className="hero-description">
                  From as low as $10 per day with limited time offer discounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GlobalHeroFilter className="home6"/>
    </section>
  );
};

export default Hero;
