import React from "react";

const OurServices = () => {
  return (
    <>
      <section className="services_section_about">
        <div className="container">
          <div className="mission_header">
            <div className="mission_icon">
              <span className="icon_span">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="67"
                  height="75"
                  viewBox="0 0 67 75"
                  fill="none"
                >
                  <path
                    d="M0 38.3031V40.1773V73.29H16.0774V68.6266L16.1335 68.6487C20.3278 70.2862 26.3094 71.7246 32.2358 74.2126L32.6786 74.3956L33.1339 74.2712C34.9978 73.7625 39.9966 71.9377 45.9808 69.6809C51.965 67.4242 58.8033 64.7683 63.8792 62.7114C66.3128 61.7234 67.611 58.5275 66.7167 55.6906V55.6831V55.6756C65.7771 52.7734 63.0636 51.4937 60.7423 52.3299L45.089 57.9451C45.0749 56.0326 44.2602 54.1481 42.9374 52.9302L42.8564 52.857L42.7691 52.7984C36.0835 48.1228 35.505 47.5427 26.1055 41.6779L25.6752 41.407L25.1887 41.4656C21.9654 41.8705 16.508 42.9267 16.0774 43.0104V38.303L0 38.3031ZM25.039 45.2727C33.6359 50.6474 34.6154 51.4605 40.973 55.91C41.976 56.8507 42.2406 58.0013 41.6278 59.0361C41.2954 59.5981 40.9688 59.8191 40.4865 59.9146C40.0091 60.0092 39.3388 59.9094 38.5844 59.5193C35.7086 57.9599 34.1503 56.9564 30.9823 54.8705L29.5916 53.9553L28.0325 57.2205L29.4232 58.1429C32.6016 60.2357 34.293 61.3204 37.2499 62.9235L37.2563 62.931H37.2687C38.4777 63.5639 39.7614 63.8533 41.0168 63.6045C41.7194 63.4653 42.3915 63.1191 42.9937 62.6235L61.6779 55.9102C62.4202 55.6428 63.4102 56.0782 63.7172 56.9937C64.0071 57.9301 63.6532 58.837 62.8378 59.168C57.7965 61.211 50.9718 63.8666 45.008 66.1156C39.2131 68.301 34.3313 70.0419 32.766 70.4936C26.7852 68.0509 20.8559 66.5423 17.1377 65.0907L16.0775 64.6734V46.8176L16.3394 46.7663C16.3394 46.7663 21.8106 45.7174 25.039 45.2727Z"
                    fill="#FF3636"
                  />
                  <path
                    d="M46.6545 0C47.2878 0 47.9562 0.329741 48.7312 1.2226C49.5061 2.11546 50.3104 3.55258 50.995 5.41751C51.7436 7.45679 52.3354 10.0181 52.7349 12.8703H40.574C40.9736 10.0181 41.5653 7.45679 42.314 5.41751C42.9986 3.55258 43.8028 2.11546 44.5778 1.2226C45.3527 0.32974 46.0212 0 46.6545 0ZM40.5491 1.30313C40.1306 2.11525 39.7336 2.97599 39.3829 3.93136C38.4512 6.46919 37.7778 9.52874 37.3498 12.8703H30.4524C32.2728 7.5273 35.9437 3.31552 40.5491 1.30313ZM52.7599 1.30313C57.3642 3.31557 61.0374 7.52709 62.8566 12.8703H55.9591C55.5311 9.52874 54.8578 6.46919 53.9261 3.93136C53.5754 2.97599 53.1783 2.11525 52.7599 1.30313ZM29.5107 16.6186H29.7227H36.9819C36.9039 17.8855 36.8447 19.1657 36.8447 20.4914C36.8447 21.817 36.9039 23.0973 36.9819 24.3642H29.7227H29.5107C29.307 23.1093 29.1926 21.8171 29.1926 20.4914C29.1926 19.1657 29.307 17.8733 29.5107 16.6186ZM40.1811 16.6186H53.1278C53.2131 17.8784 53.2713 19.1625 53.2713 20.4914C53.2713 21.8203 53.2131 23.1043 53.1278 24.3642H40.1811C40.0958 23.1043 40.0377 21.8203 40.0377 20.4914C40.0377 19.1625 40.0958 17.8784 40.1811 16.6186ZM56.3271 16.6186H63.5862H63.792C63.9955 17.8733 64.1101 19.1657 64.1101 20.4914C64.1101 21.8171 63.9955 23.1093 63.792 24.3642H63.5862H56.3271C56.4051 23.0973 56.4643 21.817 56.4643 20.4914C56.4643 19.1657 56.4051 17.8855 56.3271 16.6186ZM30.4524 28.1125H37.3498C37.7778 31.454 38.4512 34.5136 39.3829 37.0514C39.7336 38.0068 40.1306 38.8675 40.5491 39.6796C35.9441 37.6657 32.2727 33.4565 30.4524 28.1125ZM40.574 28.1125H52.7349C52.3354 30.9646 51.7436 33.526 50.995 35.5652C50.3104 37.4302 49.5061 38.8746 48.7312 39.7675C47.9562 40.6603 47.2878 40.9901 46.6545 40.9901C46.0212 40.9901 45.3527 40.6603 44.5778 39.7675C43.8028 38.8746 42.9986 37.4302 42.314 35.5652C41.5653 33.526 40.9736 30.9646 40.574 28.1125ZM55.9591 28.1125H62.8566C61.0376 33.4568 57.3638 37.6656 52.7599 39.6796C53.1783 38.8675 53.5754 38.0068 53.9261 37.0514C54.8578 34.5136 55.5311 31.454 55.9591 28.1125Z"
                    fill="#FF3636"
                  />
                </svg>
              </span>
            </div>
            <div className="mission-text">
              <h2>Exploring Excellence: Discover Our Services</h2>
              <p>Experience the future of real estate with TorontoCondomania</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="feature_property_slider gutter-x15">
                <div className="item">
                  <div className="feat_property">
                    <div className="details d-flex justify-content-center">
                      <div className="tc_content heading_mission">
                        <h3
                          className="text-center"
                          style={{ color: "#FF3636" }}
                        >
                          Pre-Construction Condo and Townhouse Buying
                        </h3>
                        <span className="mission_p">
                          Are you looking to invest in property in the booming Greater Toronto Area (GTA) real estate market? With our pre-construction condo and townhouse buying services, we at TorontoCondomania can help you find and secure the perfect condo or townhouse unit before it&apos;s even built. We&apos;ll guide you through the entire process, from researching different projects to negotiating the best possible price. 
                          Our team of experienced real estate professionals has a proven track record of helping clients find and buy pre-construction condos and townhouses in the GTA. We&apos;re experts in the market, and we&apos;ll use our knowledge to help you make informed decisions. We&apos;ll also keep you updated on the latest developments in the market, so you can always be ahead of the game.
                        </span>
                      </div>
                    </div>
                    {/* End .details */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature_property_slider gutter-x15">
                <div className="item">
                  <div className="feat_property">
                    <div className="details d-flex justify-content-center">
                      <div className="tc_content heading_mission">
                        <h3
                          className="text-center"
                          style={{ color: "#FF3636" }}
                        >
                          Assignment Sales
                        </h3>
                        <span className="mission_p">
                          If you&apos;re looking to sell your pre-construction condo or townhouse in the GTA before it&apos;s built, we can help you find a buyer through our assignment sales services. We&apos;ll market your property to our network of qualified investors, and we&apos;ll handle all the paperwork and legalities involved in the sale.
                          We have a strong track record of helping clients sell their pre-construction condos and townhouses through assignment sales. We&apos;ll work with you to get the best possible price for your property, and we&apos;ll ensure that the sale is completed smoothly and efficiently.
                          Contact us today to learn more about our pre-construction condo and townhouse buying and assignment sales services in the GTA.
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
      </section>
    </>
  );
};

export default OurServices;
