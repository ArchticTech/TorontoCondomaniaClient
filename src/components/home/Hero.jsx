import GlobalHeroFilter from "../common/GlobalHeroFilter";

const Hero = ({ properties }) => {
  return (
    <section className="home-six">
      <div className="container home_header">
        <h1 className="home-hero-title">
          Find, Compare <span> Condos </span> & <span> Town </span>
        </h1>
        <h2 className="home-hero-para">
          Find your New Construction Home in Toronto & GTA
        </h2>
      </div>
      <GlobalHeroFilter properties={properties} className="home6" />
    </section>
  );
};

export default Hero;
