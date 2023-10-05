import GlobalHeroFilter from "../common/GlobalHeroFilter";
import Image from "next/image";

const Hero = ({properties}) => {
  return (
    <section className="home-six home6-overlay">
    <div className="home-hero-image">
      <Image 
        layout="responsive"
        width={100}
        height={100}
        src='/assets/images/home/background-building.png'
        alt="Background Building Image" />
    </div>
      <div className="container">
        <div className="row posr">
          <div className="col-lg-12">
            <div className="home_content home6 row p-0">
              <div className="col-md-6"></div>
              <div className="home-text home6 text-center col-md-6">
                <h1 className="hero-title">We Bring it all together</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GlobalHeroFilter properties={properties} className="home6"/>
    </section>
  );
};

export default Hero;
