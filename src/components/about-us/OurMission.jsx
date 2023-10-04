import Image from "next/image";
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "80,123",
      meta: "Customers to date",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "$74 Billion",
      meta: "In home sales",
    },
    {
      id: 3,
      icon: "flaticon-transfer",
      number: "$468 Million",
      meta: "In Savings",
    },
  ];

  return (
    <>
      <div className="col-10">
        <div className="about_content " style={{ textAlign:'' }}>
          <p className="large">
          Welcome to TorontoCondomania, where innovation meets real estate excellence. At TorontoCondomania, we've reimagined the way buyers, sellers, and realtors interact in the dynamic world of real estate. Our mission is to bring it all together for a seamless, efficient, and exceptional real estate experience in Ontario, Canada.
          </p>
          <h3>Our Vision</h3>
          <p>
          We believe in the power of technology to transform the real estate industry. With our cutting-edge platform, we're redefining how properties are bought and sold. Whether you're a seasoned realtor looking to expand your reach or a discerning buyer or seller seeking the perfect deal, TorontoCondomania is here to make your real estate journey smoother, smarter, and more satisfying.
          </p>
          <h3>Empowering Realtors</h3>
          <p>
          For realtors, TorontoCondomania is your digital partner, offering an array of advanced features to market your listings with precision. With our platform, you can effortlessly showcase preconstruction projects, rentals, assignments, and MLS listings to a diverse and eager audience. We empower you to harness your full potential and excel in the competitive real estate marketplace.
          </p>
          <h3>Seamless Interactions</h3>
          <p>
          We're not just a marketplace; we're a community where buyers and sellers connect seamlessly. Our platform is designed to foster meaningful interactions, enabling you to engage with realtors, explore properties, and negotiate deals—all in one place. Say goodbye to the hassle of traditional real estate transactions; we've made it easy for you to buy or sell your dream property with confidence.
          </p>
          <h3>Advanced Features</h3>
          <p>
          TorontoCondomania offers a comprehensive suite of advanced features, including robust search filters, comprehensive property information, and real-time updates. We bring you the most up-to-date listings and market insights, so you can make informed decisions.
          </p>
          <p>Experience the future of real estate with TorontoCondomania. Join us today, and let's embark on a journey where innovation and excellence converge to create exceptional real estate opportunities for everyone. Together, we'll bring it all together—your dream property, your real estate success, and your satisfaction.</p>
          

          <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <Image
            width={461}
            height={509}
            priority
            className="img-fluid w100 cover"
            src="/assets/images/about/1.jpg"
            alt="1.jpg"
          />
          <PopupVideo />
        </div>
      </div> */}
    </>
  );
};

export default OurMission;
