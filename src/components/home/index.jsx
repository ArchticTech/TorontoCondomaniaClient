import MobileMenu from "../common/header/MobileMenu";
import PropertiesSlider from "./PropertiesSlider";
import FindProperties from "./FindProperties";
import Header from "./Header";
import CallToAction from "../common/CallToAction";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import PopupSignInUp from "../common/PopupSignInUp";
import HowitWorks from "../common/HowitWorks";
import Hero from "./Hero";
import Link from "next/link";
import RentalSlider from "./RentalSlider";
import { useEffect } from "react";
import ClearAllFilters from "../common/listing/ClearAllFilters";
import clearallrentals from "../common/listing/clearallrentals";
import { useDispatch } from "react-redux";
import OurExperts from "../common/OurExperts";
import HomeLoan from "../common/HomeLoan";
import BlogSlider from "./BlogSlider";
import OurPartnerSlider from "./OurPartnerSlider";

const Index = ({ properties, assignments, rentals, cities }) => {
  
  const dispatch = useDispatch();

  const clearHandler = () => {
    ClearAllFilters(dispatch);
    clearallrentals(dispatch);
  };

  useEffect(() => {
    // Call the clearHandler function when the home route is rendered
    clearHandler();
  }, []);
  return (
    <div className="home">
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* implement a filter button component on react using tableau dashboard if I gave you the code .It would a filter component created in the same way as the Sidebar component and can be implemented on the different pages such as Average Credit hours and the other dashboards */}

      {/* <!-- Home Design --> */}
      <Hero properties={properties} />

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="d-none d-lg-block property-city pb30" style={{ padding:'0' }}>
        <div className="container">
          <div className="main_cities_header">
            <div className="main_cities_header_left">
              <div className="mission_icon">
                <span className="icon_span">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="62"
                    height="76"
                    viewBox="0 0 62 76"
                    fill="none"
                  >
                    <path
                      d="M60.1708 24.839C56.5605 7.71122 42.7041 0 30.5324 0C30.5324 0 30.5324 0 30.498 0C18.3606 0 4.46975 7.67415 0.859507 24.802C-3.16334 43.9317 7.70178 60.1327 17.5354 70.3278C21.18 74.1093 25.8563 76 30.5324 76C35.2085 76 39.8847 74.1093 43.4949 70.3278C53.3285 60.1327 64.1936 43.9688 60.1708 24.839ZM30.5324 43.4127C24.5497 43.4127 19.7016 38.1854 19.7016 31.7346C19.7016 25.2839 24.5497 20.0566 30.5324 20.0566C36.5151 20.0566 41.3631 25.2839 41.3631 31.7346C41.3631 38.1854 36.5151 43.4127 30.5324 43.4127Z"
                      fill="#FF3636"
                    />
                  </svg>
                </span>
              </div>
              <div className="mission-text">
                <h3>Find properties in GTA&apos;s top cities</h3>
                <p>
                  New Homes Trending around GTA
                </p>
              </div>
            </div>
            <div className="view-all">
              <Link className="float-end" href="/properties">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                  >
                    <path
                      d="M0.550304 4.19681C2.24517 1.53345 4.72511 0 7.33711 0C8.64311 0 9.91243 0.381529 11.0717 1.09323C12.2309 1.81226 13.2728 2.86146 14.1239 4.19681C14.8576 5.34874 14.8576 7.2197 14.1239 8.37162C12.429 11.0423 9.94911 12.5684 7.33711 12.5684C6.03111 12.5684 4.76179 12.1869 3.60253 11.4752C2.44327 10.7562 1.40141 9.70697 0.550304 8.37162C-0.183404 7.22704 -0.183404 5.34874 0.550304 4.19681ZM7.33711 9.25207C8.98062 9.25207 10.3013 7.92406 10.3013 6.28789C10.3013 4.65171 8.98062 3.3237 7.33711 3.3237C5.6936 3.3237 4.37293 4.65171 4.37293 6.28789C4.37293 7.92406 5.6936 9.25207 7.33711 9.25207Z"
                      fill="#292D32"
                    />
                    <path
                      d="M7.33828 4.19019C8.4902 4.19019 9.42932 5.12932 9.42932 6.28858C9.42932 7.4405 8.4902 8.37965 7.33828 8.37965C6.18636 8.37965 5.23987 7.4405 5.23987 6.28858C5.23987 5.13665 6.18636 4.19019 7.33828 4.19019Z"
                      fill="#292D32"
                    />
                  </svg>
                </span>{" "}
                View All
              </Link>
            </div>
          </div>
          <div className="row find_cities_row">
            <FindProperties cities={cities} />
          </div>
        </div>
      </section>

      {/* <!-- Feature Properties --> */}
      {(() => {
        if (properties.length >= 3) {
          return (
            <section
              id="feature-property"
              className="property-city pb30 bg-ptrn1"
            >
              <div className="container">
                <div className="row">
                  <div className="main_cities_header">
                    <div className="main_cities_header_left">
                      <div className="mission_icon">
                        <span className="icon_span">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                            fill="none"
                          >
                            <path
                              d="M62.5575 27.969L58.2066 22.9143C57.3748 21.9545 56.703 20.163 56.703 18.8833V13.4446C56.703 10.0535 53.9197 7.27018 50.5285 7.27018H45.0899C43.8422 7.27018 42.0187 6.59835 41.0589 5.76656L36.0042 1.41565C33.7967 -0.471882 30.1816 -0.471882 27.9422 1.41565L22.9193 5.79855C21.9596 6.59835 20.136 7.27018 18.8883 7.27018H13.3537C9.96258 7.27018 7.17927 10.0535 7.17927 13.4446V18.9153C7.17927 20.163 6.50744 21.9545 5.70764 22.9143L1.38872 28.001C-0.466813 30.2085 -0.466813 33.7916 1.38872 35.999L5.70764 41.0857C6.50744 42.0455 7.17927 43.8371 7.17927 45.0847V50.5554C7.17927 53.9465 9.96258 56.7298 13.3537 56.7298H18.8883C20.136 56.7298 21.9596 57.4017 22.9193 58.2334L27.9742 62.5844C30.1816 64.4719 33.7967 64.4719 36.0362 62.5844L41.0909 58.2334C42.0507 57.4017 43.8422 56.7298 45.1219 56.7298H50.5605C53.9517 56.7298 56.735 53.9465 56.735 50.5554V45.1167C56.735 43.869 57.4068 42.0455 58.2386 41.0857L62.5895 36.031C64.4451 33.8236 64.4451 30.1765 62.5575 27.969ZM45.2819 25.9535L29.8297 41.4057C29.3818 41.8535 28.774 42.1095 28.1342 42.1095C27.4943 42.1095 26.8865 41.8535 26.4386 41.4057L18.6964 33.6636C17.7686 32.7358 17.7686 31.2002 18.6964 30.2724C19.6242 29.3447 21.1598 29.3447 22.0875 30.2724L28.1342 36.3189L41.8907 22.5623C42.8185 21.6346 44.3541 21.6346 45.2819 22.5623C46.2096 23.4901 46.2096 25.0257 45.2819 25.9535Z"
                              fill="#FF3636"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="mission-text">
                        <h4>Featured Properties</h4>
                        <p>
                          Featured Developments around GTA
                        </p>
                      </div>
                    </div>
                    <div className="view-all">
                      <Link className="float-end" href="/properties">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="13"
                            viewBox="0 0 15 13"
                            fill="none"
                          >
                            <path
                              d="M0.550304 4.19681C2.24517 1.53345 4.72511 0 7.33711 0C8.64311 0 9.91243 0.381529 11.0717 1.09323C12.2309 1.81226 13.2728 2.86146 14.1239 4.19681C14.8576 5.34874 14.8576 7.2197 14.1239 8.37162C12.429 11.0423 9.94911 12.5684 7.33711 12.5684C6.03111 12.5684 4.76179 12.1869 3.60253 11.4752C2.44327 10.7562 1.40141 9.70697 0.550304 8.37162C-0.183404 7.22704 -0.183404 5.34874 0.550304 4.19681ZM7.33711 9.25207C8.98062 9.25207 10.3013 7.92406 10.3013 6.28789C10.3013 4.65171 8.98062 3.3237 7.33711 3.3237C5.6936 3.3237 4.37293 4.65171 4.37293 6.28789C4.37293 7.92406 5.6936 9.25207 7.33711 9.25207Z"
                              fill="#292D32"
                            />
                            <path
                              d="M7.33828 4.19019C8.4902 4.19019 9.42932 5.12932 9.42932 6.28858C9.42932 7.4405 8.4902 8.37965 7.33828 8.37965C6.18636 8.37965 5.23987 7.4405 5.23987 6.28858C5.23987 5.13665 6.18636 4.19019 7.33828 4.19019Z"
                              fill="#292D32"
                            />
                          </svg>
                        </span>{" "}
                        View All
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="feature_property_slider gutter-x15">
                      <PropertiesSlider properties={properties} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })()}

      {/* <!-- How it works --> */}
      
      <section id="how_it_works" className="how_it_works pb30">
        <div className="container">
          <div className="row px-3">
            <div className="col-lg-6">
              <div className="main-title text-center text-md-start">
                <h5>How it works?</h5>
                <h5>
                  <span
                    style={{
                      color: "#292D32",
                      fontWeight: "300",
                    }}
                  >
                  Find a
                  </span>
                  {" "} Perfect Home
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
            <HowitWorks />
          </div>
        </div>
      </section>

      {/* <!-- Recently Added Rentals --> */}
      {(() => {
        if (rentals.length >= 3) {
          return (
            <section
              id="feature-property"
              className="property-city pb30 bg-ptrn1"
            >
              <div className="container">
                <div className="row">
                  <div className="main_cities_header">
                    <div className="main_cities_header_left">
                      <div className="mission_icon">
                        <span className="icon_span">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="67"
                            height="67"
                            viewBox="0 0 67 67"
                            fill="none"
                          >
                            <path
                              d="M10.0213 20.0425C4.4762 20.0425 0 24.5187 0 30.0638V56.7874C0 62.3325 4.4762 66.8087 10.0213 66.8087H15.032C18.7065 66.8087 21.7129 63.8023 21.7129 60.1278V26.7234C21.7129 23.0489 18.7065 20.0425 15.032 20.0425H10.0213ZM13.3618 50.1065C13.3618 51.4761 12.226 52.6118 10.8565 52.6118C9.48687 52.6118 8.35112 51.4761 8.35112 50.1065V36.7447C8.35112 35.3751 9.48687 34.2394 10.8565 34.2394C12.226 34.2394 13.3618 35.3751 13.3618 36.7447V50.1065Z"
                              fill="#FF3636"
                            />
                            <path
                              d="M56.7876 0H36.7449C31.1998 0 26.7236 4.4762 26.7236 10.0213V56.7876C26.7236 62.3327 31.1998 66.8089 36.7449 66.8089H38.4151C39.3505 66.8089 40.0854 66.074 40.0854 65.1387V53.4471C40.0854 51.6099 41.5886 50.1067 43.4258 50.1067H50.1067C51.9439 50.1067 53.4471 51.6099 53.4471 53.4471V65.1387C53.4471 66.074 54.182 66.8089 55.1174 66.8089H56.7876C62.3327 66.8089 66.8089 62.3327 66.8089 56.7876V10.0213C66.8089 4.4762 62.3327 0 56.7876 0ZM42.5907 36.7449C42.5907 38.1145 41.4549 39.2502 40.0854 39.2502C38.7158 39.2502 37.58 38.1145 37.58 36.7449V20.0427C37.58 18.6731 38.7158 17.5373 40.0854 17.5373C41.4549 17.5373 42.5907 18.6731 42.5907 20.0427V36.7449ZM55.9525 36.7449C55.9525 38.1145 54.8167 39.2502 53.4471 39.2502C52.0776 39.2502 50.9418 38.1145 50.9418 36.7449V20.0427C50.9418 18.6731 52.0776 17.5373 53.4471 17.5373C54.8167 17.5373 55.9525 18.6731 55.9525 20.0427V36.7449Z"
                              fill="#FF3636"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="mission-text">
                        <h5>Rentals added recently</h5>
                        <p>
                          Experience the future of real estate with
                          TorontoCondomania
                        </p>
                      </div>
                    </div>
                    <div className="view-all">
                      <Link className="float-end" href="/rentals">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="13"
                            viewBox="0 0 15 13"
                            fill="none"
                          >
                            <path
                              d="M0.550304 4.19681C2.24517 1.53345 4.72511 0 7.33711 0C8.64311 0 9.91243 0.381529 11.0717 1.09323C12.2309 1.81226 13.2728 2.86146 14.1239 4.19681C14.8576 5.34874 14.8576 7.2197 14.1239 8.37162C12.429 11.0423 9.94911 12.5684 7.33711 12.5684C6.03111 12.5684 4.76179 12.1869 3.60253 11.4752C2.44327 10.7562 1.40141 9.70697 0.550304 8.37162C-0.183404 7.22704 -0.183404 5.34874 0.550304 4.19681ZM7.33711 9.25207C8.98062 9.25207 10.3013 7.92406 10.3013 6.28789C10.3013 4.65171 8.98062 3.3237 7.33711 3.3237C5.6936 3.3237 4.37293 4.65171 4.37293 6.28789C4.37293 7.92406 5.6936 9.25207 7.33711 9.25207Z"
                              fill="#292D32"
                            />
                            <path
                              d="M7.33828 4.19019C8.4902 4.19019 9.42932 5.12932 9.42932 6.28858C9.42932 7.4405 8.4902 8.37965 7.33828 8.37965C6.18636 8.37965 5.23987 7.4405 5.23987 6.28858C5.23987 5.13665 6.18636 4.19019 7.33828 4.19019Z"
                              fill="#292D32"
                            />
                          </svg>
                        </span>{" "}
                        View All
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="feature_property_slider gutter-x15">
                      <RentalSlider rentals={rentals} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })()}

      {/* <!-- Featured Assignments --> */}
      {(() => {
        if (assignments.length >= 3) {
          return (
            <section
              id="feature-assignment"
              className="property-city pb30 bg-ptrn1"
            >
              <div className="container">
                <div className="row">
                  <div className="main_cities_header">
                    <div className="main_cities_header_left">
                      <div className="mission_icon">
                        <span className="icon_span">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="65"
                            height="64"
                            viewBox="0 0 65 64"
                            fill="none"
                          >
                            <path
                              d="M60.356 19.0917L39.549 2.44607C35.4829 -0.794103 29.1296 -0.825869 25.0951 2.41431L4.2881 19.0917C1.30206 21.4742 -0.508629 26.2391 0.1267 29.9875L4.12927 53.9394C5.0505 59.308 10.0378 63.5329 15.4699 63.5329H49.1425C54.511 63.5329 59.5936 59.2127 60.5148 53.9077L64.5174 29.9558C65.0892 26.2391 63.2785 21.4742 60.356 19.0917ZM34.6887 50.8263C34.6887 52.1287 33.6087 53.2088 32.3062 53.2088C31.0038 53.2088 29.9238 52.1287 29.9238 50.8263V41.2964C29.9238 39.994 31.0038 38.9139 32.3062 38.9139C33.6087 38.9139 34.6887 39.994 34.6887 41.2964V50.8263Z"
                              fill="#FF3636"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="mission-text">
                        <h5>Assignments Added Recently </h5>
                        <p>
                          Experience the future of real estate with
                          TorontoCondomania
                        </p>
                      </div>
                    </div>
                    <div className="view-all">
                      <Link className="float-end" href="/assignments">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="13"
                            viewBox="0 0 15 13"
                            fill="none"
                          >
                            <path
                              d="M0.550304 4.19681C2.24517 1.53345 4.72511 0 7.33711 0C8.64311 0 9.91243 0.381529 11.0717 1.09323C12.2309 1.81226 13.2728 2.86146 14.1239 4.19681C14.8576 5.34874 14.8576 7.2197 14.1239 8.37162C12.429 11.0423 9.94911 12.5684 7.33711 12.5684C6.03111 12.5684 4.76179 12.1869 3.60253 11.4752C2.44327 10.7562 1.40141 9.70697 0.550304 8.37162C-0.183404 7.22704 -0.183404 5.34874 0.550304 4.19681ZM7.33711 9.25207C8.98062 9.25207 10.3013 7.92406 10.3013 6.28789C10.3013 4.65171 8.98062 3.3237 7.33711 3.3237C5.6936 3.3237 4.37293 4.65171 4.37293 6.28789C4.37293 7.92406 5.6936 9.25207 7.33711 9.25207Z"
                              fill="#292D32"
                            />
                            <path
                              d="M7.33828 4.19019C8.4902 4.19019 9.42932 5.12932 9.42932 6.28858C9.42932 7.4405 8.4902 8.37965 7.33828 8.37965C6.18636 8.37965 5.23987 7.4405 5.23987 6.28858C5.23987 5.13665 6.18636 4.19019 7.33828 4.19019Z"
                              fill="#292D32"
                            />
                          </svg>
                        </span>{" "}
                        View All
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="feature_property_slider gutter-x15">
                      <PropertiesSlider properties={assignments} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })()}

      {/* <!-- Our Experts --> */}
      <section id="our_experts" className="d-none d-md-block our_experts">
        <div className="container">
          <OurExperts />
        </div>
      </section>

      {/* <!-- Home loan options --> */}
      <section id="home_loan" className="home_loan">
        <div className="container">
          <HomeLoan />
        </div>
      </section>

      {/* <!-- News & Articles --> */}
      <section id="news-articles" className="news-articles pb40 pt40">
        <div className="container">
          <div className="row">
            <div className="main_cities_header">
              <div className="main_cities_header_left">
                <div className="mission_icon">
                  <span className="icon_span">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="58"
                      viewBox="0 0 64 58"
                      fill="none"
                    >
                      <path
                        d="M0 0V41.4286L8 33.1429H16V8.28571H40V0H0ZM24 16.5714V49.7143H56L64 58V16.5714H24Z"
                        fill="#FF3636"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mission-text">
                  <h5>News & Articles</h5>
                  <p>
                    Experience the future of real estate with TorontoCondomania
                  </p>
                </div>
              </div>
              <div className="view-all">
                <Link className="float-end" href="/blogs">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                    >
                      <path
                        d="M0.550304 4.19681C2.24517 1.53345 4.72511 0 7.33711 0C8.64311 0 9.91243 0.381529 11.0717 1.09323C12.2309 1.81226 13.2728 2.86146 14.1239 4.19681C14.8576 5.34874 14.8576 7.2197 14.1239 8.37162C12.429 11.0423 9.94911 12.5684 7.33711 12.5684C6.03111 12.5684 4.76179 12.1869 3.60253 11.4752C2.44327 10.7562 1.40141 9.70697 0.550304 8.37162C-0.183404 7.22704 -0.183404 5.34874 0.550304 4.19681ZM7.33711 9.25207C8.98062 9.25207 10.3013 7.92406 10.3013 6.28789C10.3013 4.65171 8.98062 3.3237 7.33711 3.3237C5.6936 3.3237 4.37293 4.65171 4.37293 6.28789C4.37293 7.92406 5.6936 9.25207 7.33711 9.25207Z"
                        fill="#292D32"
                      />
                      <path
                        d="M7.33828 4.19019C8.4902 4.19019 9.42932 5.12932 9.42932 6.28858C9.42932 7.4405 8.4902 8.37965 7.33828 8.37965C6.18636 8.37965 5.23987 7.4405 5.23987 6.28858C5.23987 5.13665 6.18636 4.19019 7.33828 4.19019Z"
                        fill="#292D32"
                      />
                    </svg>
                  </span>{" "}
                  View All
                </Link>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <BlogSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Partners --> */}
      <section id="our-partners" className="our-partners pb40 pt40 bg-ptrn2">
        <div className="container">
          <div className="row">
            <div className="main_cities_header">
              <div className="main_cities_header_left">
                <div className="mission_icon">
                  <span className="icon_span">
                    <img
                      src="../../assets/images/home/OUR-PARTNERT-ICON.svg"
                      style={{ width: "71px", height: "46px", fill: "#ff3636" }}
                      alt=""
                    />
                  </span>
                </div>
                <div className="mission-text">
                  <h6>Toronto Platinum Developers / Builders</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <OurPartnerSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}
      {/* <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <CallToAction />
        </div>
      </section> */}

      {/* <!-- Our Footer --> */}
      <section className="footer_one home5">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </div>
  );
};

export default Index;