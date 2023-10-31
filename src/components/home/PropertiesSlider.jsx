import Link from "next/link";
import Slider from "react-slick";
import global from "../../config/env";
import BedIcon from '@mui/icons-material/Bed';
import BathIcon from '@mui/icons-material/Bathtub';
import IconPropertyHeart from "../common/IconPropertyHeart";

const PropertiesSlider = ({ properties }) => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let content = properties?.slice(0, 12)?.map((property) => {
    
    const priceFrom = parseFloat(property.price_from);
    const priceTo = parseFloat(property.price_to);

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

    return ( 
      <Link
      href={
        "/property" +
        `/${property.slug}`
      }
      key={property.id}
      className="col-md-6 col-lg-6" >
      <div
        className="feat_property home7 style4"
      >
        <div className="thumb">
          <img
            width={316}
            height={220}
            className="img-whp w-100 h-100 cover"
            src={global.apiURL + "images/" + property.image}
            alt="fp1.jpg"
          />
          <div className="thmb_cntnt">
            <ul className="tag mb0">
              {property.isHot ? (
                <li className="list-inline-item" >
                  <a href="" className="text-capitalize">
                    Hot
                  </a>
                </li>
              ) : (
                ""
              )}
              <li className="list-inline-item">
                <a href="" className="text-capitalize">{property.vip_featured_promotion}</a>
              </li>
            </ul>
            <ul className="icon mb0">
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-transfer-1"></span>
                </a>
              </li>
              <IconPropertyHeart id={property.id} />
            </ul>
          </div>
        </div>
        <div className="details">
          <div className="tc_content">
            <p className="text-thm">{property.type}</p>
            <h4>
                {property.name}
            </h4>
            
            <p className="row justify-content-start">
              <div className="col-3 stat mb-2">
                <img height="19" src="https://img.icons8.com/fluency-systems-regular/555555/21/single-bed.png" alt="bed"/>
                <span className="count">{property?.beds}</span>
              </div>
              <div className="col-3 stat mb-2">
                <img height="19" src="https://img.icons8.com/fluency-systems-regular/555555/21/shower-and-tub.png" alt="shower-and-tub"/>
                <span className="count">{property?.baths}</span>
              </div>
              <div className="col-6 stat-wide mb-2">
                <img height="19" src="https://img.icons8.com/fluency-systems-regular/555555/21/fit-to-page.png" alt="land-area"/>
                <span className="count">{property?.areaMin}</span> &ndash; <span className="count">{property?.areaMax}</span> Sqft
              </div>
            </p>
            <p className="mb-2 d-flex align-items-start">
              <img height="19" src="https://img.icons8.com/fluency-systems-regular/555555/21/marker--v1.png" alt="map-marker-v1"/>
              <span className="mx-2">{property?.address}</span>
            </p>
            <p className="mb-0 box">
              <span className="mx-2">{property?.status}</span>
            </p>

            <ul className="prop_details mb0"></ul>
          </div>
          {/* End .tc_content */}

          <div className="fp_footer">
            <ul className="fp_meta float-start mb0">
              <li className="list-inline-item">
              </li>
              <li className="list-inline-item">
                  From <span className="price">{formattedPriceFrom} &ndash; {formattedPriceTo}</span>
              </li>
            </ul>
            <div className="fp_pdate float-end">{property.postedYear}</div>
          </div>
          {/* End .fp_footer */}
        </div>
      </div>
    </Link>
  )});

  return (
    <>
      <Slider {...settings} arrows={false}>
        {content}
      </Slider>
    </>
  );
};

export default PropertiesSlider;
