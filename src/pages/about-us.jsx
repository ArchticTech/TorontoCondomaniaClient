import dynamic from "next/dynamic";
import AboutUs from "../components/about-us";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>About us</title>
        <meta name="title" content="About us" />
        <meta name="description" content="Explore our open positions and learn more about how we're building the future of new construction home buying at TorontoCondoMania. Take a look and let us show you." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://torontocondomania.ca/about" />
        <meta property="og:title" content="About us" />
        <meta property="og:description" content="Explore our open positions and learn more about how we're building the future of new construction home buying at TorontoCondoMania. Take a look and let us show you." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://torontocondomania.ca/about" />
        <meta property="twitter:title" content="About us" />
        <meta property="twitter:description" content="Explore our open positions and learn more about how we're building the future of new construction home buying at TorontoCondoMania. Take a look and let us show you." />
      </Head>
      <AboutUs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });