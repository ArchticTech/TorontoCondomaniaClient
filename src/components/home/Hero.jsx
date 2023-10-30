import GlobalHeroFilter from "../common/GlobalHeroFilter";

const Hero = ({ properties }) => {
  return (
    <section className="home-six">
      <div className="container home_header">
        <h1 className="home-hero-title">
          Discover Hidden Gems In<br className="head_br"/> The <span> GTA </span> Real Estate
        </h1>
        <p className="home-hero-para">
          Skip the hassle of showing, repairs and months of uncertainty with a
          simple selling experience.
          Skip the hassle of showing, repairs and months of uncertainty with a
          simple selling experience.
        </p>
      </div>
      <GlobalHeroFilter properties={properties} className="home6" />
    </section>
  );
};

export default Hero;
