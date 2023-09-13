import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

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
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };
  const imagePath = "http://localhost:8000/public/images/";

  let content = properties?.slice(0, 12)?.map((property) => ( 
    <div className="item" key={property.id}>
      <div className="feat_property">
        <div className="thumb">
          <Image
            width={343}
            height={220}
            className="img-whp w-100 h-100 cover"
            src=''
            alt=""
          />
          <div className="thmb_cntnt">
            {/* <ul className="tag mb0">
              {item.saleTag.map((val, i) => (
                <li className="list-inline-item" key={i}>
                  <a href="#">{val}</a>
                </li>
              ))}
            </ul> */}
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
            <p className="text-thm">{property.prop_type}</p>
            <h4>
              <Link href={`/listing-details-v1/${property.id}`}>{property.prop_name}</Link>
            </h4>
            <p>
              <span className="flaticon-placeholder"></span>
              {property.prop_address}
            </p>
            <p>
              Move in <b>{property.est_occupancy_year}</b>
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
              <Link href={`/listing-details-v1/${property.id}`} className="fp_price">
                <h4>${property.prop_price_from} - ${property.prop_price_to}</h4>
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
  ));

  return (
    <>
      <Slider {...settings} arrows={false}>
        {content}
      </Slider>
    </>
  );
};

export default PropertiesSlider;
