import Link from "next/link";
import Slider from "react-slick";
import global from "../../config/env";
import BedIcon from '@mui/icons-material/Bed';
import BathIcon from '@mui/icons-material/Bathtub';

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
    
    const priceFrom = property.price_from;
    const priceTo = property.price_to;

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
    <div className="item" key={property.id}>
      <div className="feat_property">
        <div className="thumb">
          <img
            width={343}
            height={220}
            className="img-whp cover"
            src={global.apiURL + 'images/' + property.image}
            alt={property.name}
          />
          <div className="thmb_cntnt">
            <ul className="tag mb0">
                {(property.vip_featured_promotion != null) ? (
                  <li className="list-inline-item">
                  <a>{property.vip_featured_promotion}</a>
                  </li>
                ) : undefined}
                {(property.isHot > 0) ? (
                  <li className="list-inline-item">
                  <a>Hot</a>
                  </li>
                ) : undefined}
            </ul>
            {/* End .tag */}

            <ul className="icon mb0">
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-transfer-1"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-heart"></span>
                </a>
              </li>
            </ul>
            {/* End .icon */}

            
          </div>
        </div>
        {/* End .thumb */}

        <div className="details">
          <div className="tc_content">
            <p className="text-thm">{property.type}</p>
            <h4>
              <Link href={`/property/${property.id}`}>{property.name}</Link>
            </h4>
            <p className="d-flex justify-content-between flex-wrap">
              <div className="my-1"><span className="flaticon-placeholder"></span> {property.address}</div>
              <div className="moveIn my-1">Move in <b>{property.est_occupancy_year}</b></div>
            </p>
            <p className="d-flex justify-content-between flex-wrap">
              <div><BedIcon /> {property.beds}</div>
              <div><BathIcon /> {property.baths}</div>
              <div></div>
              <div></div>
              <div className="my-1">{property.status}</div>
            </p>

            <ul className="prop_details mb0">
              {/* {item.itemDetails.map((val, i) => (
                <li className="list-inline-item" key={i}>
                  <a href="#">
                    {val.name}: {val.number}
                  </a>
                </li>
              ))} */}
            </ul>
          </div>
          {/* End .tc_content */}

          <div className="fp_footer">
            <ul className="fp_meta float-start mb0">
              <li className="list-inline-item">
              <Link href={`/property/${property.id}`} className="fp_price">
                <h4>{formattedPriceFrom} - {formattedPriceTo}</h4>
              </Link>
              </li>
            </ul>
            <div className="fp_pdate float-end"></div>
          </div>
          {/* End .fp_footer */}
        </div>
        {/* End .details */}
      </div>
    </div>
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
