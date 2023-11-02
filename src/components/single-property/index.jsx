import { useEffect, useState, useRef } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import DetailsContent from "../../components/listing-details-v1/DetailsContent";
import Sidebar from "../../components/listing-details-v1/Sidebar";
import Head from "next/head";
import global from "../../config/env";
import IconPropertyHeart from "../common/IconPropertyHeart";
import { useRouter } from "next/router";

const PropertyView = ({assignmentVal, property, assignment}) => {
  const router = useRouter();

  const handleCompare = () => {
    const compareParam = `compare=${property.id}`;
  
    router.push(`/compare?${compareParam}`);
  };

  const priceFrom = parseFloat(property?.price_from);
  const priceTo = parseFloat(property?.price_to);

  const formattedPriceFrom = priceFrom.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const formattedPriceTo = priceTo.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const popupRef = useRef(null);
  const imageRef = useRef(null);
  const [popupImage, setPopupImage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  
  const [imageIndex, setImageIndex] = useState(-1);

  const images = [property?.image, ...property?.images];

  useEffect(() => {
    // Check if we are running on the client side before manipulating the DOM
    if (typeof window !== 'undefined' && imageIndex >= 0) {
      const popup = popupRef.current;
      const image = imageRef.current;

      if (popup && image) { 
        const imageURL = global.apiURL + 'images/' + images[imageIndex];
        console.log(imageIndex);
        
        popup.style.display = 'flex';
        image.src = imageURL;
      }
    }
    else {
      const popup = popupRef.current;
      popup.style.display = 'none';
    }
  }, [images, imageIndex]);

  const nextImage = () => {
    if (imageIndex < images.length - 1)
    {
      setImageIndex(imageIndex + 1);
    }
    else {
      setImageIndex(0);
    }
  }
  const previousImage = () => {
    if (imageIndex > 0)
    {
      setImageIndex(imageIndex + 1);
    }
    else {
      setImageIndex(images.length - 1);
    }
  }
  const showImage = (imageIndex) => {
    if (imageIndex >= 0 && imageIndex < images.length)
    {
      setImageIndex(imageIndex);
    }
  }
  const hidePopup = () => {
      setImageIndex(-1);
  }
  

  return (
    <>
      <Head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
      </Head>

      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Single Property --> */}
      <section className="listing-title-area mt85 md-mt0">
        <div className="container">
          <Gallery>
            <div className="row mb30">
              <div className="col-lg-7 col-xl-8">
                <div className="single_property_title mt30-767">
                  <h2>{property?.name}</h2>
                  <p>{property?.address}</p>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="single_property_social_share position-static transform-none">
                  <div className="price float-start fn-400">
                    <h3>
                      {formattedPriceFrom} &ndash; {formattedPriceTo}
                    </h3>
                  </div>

                  <div className="spss style2 mt20 text-end tal-400">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <a href="#" onClick={handleCompare}>
                          <span className="compare_btn flaticon-transfer-1"></span>
                        </a>
                      </li>
                      <IconPropertyHeart id={property.id}/>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-share"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-printer"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End activity and social sharing */}
                </div>
              </div>
            </div>
            {/* End .row */}

            <div ref={popupRef} id="popup">
                <div
                  className="arrow"
                  onClick={() => previousImage()}
                  > <i className="fa fa-angle-left"></i></div>
                <img ref={imageRef} id="popupImage" src="" alt="" onClick={() => hidePopup()}/>
                <div
                  className="arrow"
                  onClick={() => nextImage()}
                > <i className="fa fa-angle-right"></i></div>
            </div>

            <div className="row property-images">
              <div className="col-sm-7 col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="spls_style_two mb30-520">
                        <div role="button" onClick={() => showImage(0)}>
                          <img
                            width={752}
                            height={450}
                            className="img-fluid w100 cover lds-1"
                            src={global.apiURL + 'images/' + property.image}
                            alt={property?.name}
                          />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .col-sm-7 .col-lg-8 */}

              <div className="col-sm-5 col-lg-4">
                <div className="row">
                  {property?.images?.slice(0, 6).map((image, i) => (
                    <div className="col-6" key={i}>
                      <div className="spls_style_two img-gallery-box mb24">
                        <div role="button" onClick={() => showImage(i+1)}>
                          <img
                            width={170}
                            height={133}
                            className="img-fluid w100 cover"
                            src={global.apiURL + 'images/' + image}
                            alt={property?.name}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End  col-sm-5 col-lg-4 */}
            </div>
            {/* End .row */}
          </Gallery>
        </div>
      </section>
      {/* {console.log(property)}; */}

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <DetailsContent assignmentVal={assignmentVal} property={property} assignment={assignment}/>
            </div>
            {/* End details content .col-lg-8 */}

            <div className="col-lg-4 col-xl-4">
              <Sidebar property={property}/>
            </div>
            {/* End sidebar content .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
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
    </>
  );
};

export default PropertyView;

