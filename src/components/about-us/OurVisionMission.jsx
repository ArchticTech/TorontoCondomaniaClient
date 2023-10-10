import Link from "next/link";
import React from "react";

const OurVisionMission = () => {
  return (
    <>
      <section className="mission_section">
        <div className="container">
          <div className="mission_header">
            <div className="mission_icon">
              <span className="icon_span">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="48"
                  viewBox="0 0 66 48"
                  fill="none"
                >
                  <path
                    d="M33 0C18.932 0 6.65986 8.7 0.673469 21.3C-0.22449 23.1 -0.22449 25.2 0.673469 27C6.65986 39.3 18.932 48 33 48C47.068 48 59.3401 39.3 65.3265 26.7C66.2245 24.9 66.2245 22.8 65.3265 21C59.3401 8.7 47.068 0 33 0ZM33 36C26.415 36 21.0272 30.6 21.0272 24C21.0272 17.4 26.415 12 33 12C39.585 12 44.9728 17.4 44.9728 24C44.9728 30.6 39.585 36 33 36Z"
                    fill="#FF3636"
                  />
                </svg>
              </span>
            </div>
            <div className="mission-text">
              <h2>Your Vision is Our Mission</h2>
              <p>Experience the future of real estate with TorontoCondomania</p>
            </div>
          </div>
          <div className="mission_cards">
            <div className="row">
              <div className="col-lg-4">
                <div className="feature_property_slider gutter-x15">
                  <div className="item" >
                    <div className="feat_property">
                      <div className="thumb">
                        <img
                          width={343}
                          height={220}
                          className="img-whp cover"
                          src="../assets/images/about/mission-advance.jpg"
                          alt={name}
                        />
                        
                      </div>
                      {/* End .thumb */}

                      <div className="details d-flex justify-content-center">
                      <div className="tc_content heading_mission" >
                          <h3 className="text-center" style={{ color: '#FF3636' }}>
                          Advanced Features
                          </h3>
                          <span className="mission_p">
                          TorontoCondomania offers a comprehensive suite of advanced features, including robust search filters, comprehensive property information, and real-time updates. We bring you the most up-to-date listings and market insights.

                          </span>

                        </div>
                      </div>
                      {/* End .details */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature_property_slider gutter-x15">
                  <div className="item" >
                    <div className="feat_property">
                      <div className="thumb">
                        <img
                          width={343}
                          height={220}
                          className="img-whp cover"
                          src="../assets/images/about/mission-seamless-interaction.jpg"
                          alt={name}
                        />
                        
                      </div>
                      {/* End .thumb */}

                      <div className="details d-flex justify-content-center">
                        <div className="tc_content heading_mission" >
                          <h3 className="text-center" style={{ color: '#FF3636' }}>
                          Seamless Interactions
                          </h3>
                          <span className="mission_p">
                           
                          We're not just a marketplace; we're a community where buyers and sellers connect seamlessly. Our platform is designed to foster meaningful interactions, enabling you to engage with realtors, explore properties, and negotiate deals.
                          </span>

                        </div>
                      </div>
                      {/* End .details */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature_property_slider gutter-x15">
                  <div className="item" >
                    <div className="feat_property">
                      <div className="thumb">
                        <img
                          width={343}
                          height={220}
                          className="img-whp cover"
                          src="../assets/images/about/mission-empowering-realtors.jpg"
                          alt={name}
                        />
                        
                      </div>
                      {/* End .thumb */}

                      <div className="details d-flex justify-content-center">
                      <div className="tc_content heading_mission" >
                          <h3 className="text-center" style={{ color: '#FF3636' }}>
                          Empowering Realtors
                          </h3>
                          <span className="mission_p">
                           
                          For realtors, TorontoCondomania is your digital partner, offering an array of advanced features to market your listings with precision. With our platform, you can effortlessly showcase your rentals to a diverse and eager audience.
                          </span>

                        </div>
                      </div>
                      {/* End .details */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurVisionMission;
