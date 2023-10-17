import GlobalHeroFilter from "../common/GlobalHeroFilter";
import Image from "next/image";

const Hero = ({ properties }) => {
  return (
    <section className="home-six">
      {/* <div className="home-hero-image">
        <Image
          layout="responsive"
          width={100}
          height={100}
          src="/assets/images/home/header.png"
          alt="Background Building Image"
          style={{ backgroundPosition:'center',backgroundSize:'cover' }}
        />
      </div> */}
      <div className="container home_header">
        {/* <div className="row posr">
          <div className="col-lg-12">
            <div className="home_content home6 row p-0">
              <div className="home-text home6 text-center col-md-6">
                <h1 className="hero-title">Discover Hidden Gems In The <span> GTA </span> Real Estate</h1>
                <p>Skip the hassle of showing, repairs and months of uncertainty with a simple selling experience.</p>
              </div>
            </div>
          </div>
        </div> */}
        <h1 className="home-hero-title">
          Discover Hidden Gems In The <span> GTA </span> Real Estate
        </h1>
        <p className="home-hero-para">
          Skip the hassle of showing, repairs and months of uncertainty with a
          simple selling experience.
        </p>
      </div>
      <GlobalHeroFilter properties={properties} className="home6" />
    </section>
  );
};

export default Hero;
