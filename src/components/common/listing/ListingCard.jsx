import Link from "next/link";
import global from '../../../config/env'

const ListingCard = ({property}) => {
    
    const priceFrom = property?.price_from;
    const priceTo = property?.price_to;

    const formattedPriceFrom = priceFrom?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    const formattedPriceTo = priceTo?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    console.log(property)

    return (
    <div className="d-inline-block" key={property?.id}>
        <div className="feat_property dropdown list">
          <div className="thumb">
            <img
              width={200}
              height={130}
              className="img-whp"
              src={global.apiURL + 'images/' + property?.image}
              alt={property?.name}
            />
            <div className="thmb_cntnt">

              <Link
                href={`/property/${property?.slug}`}
                className="fp_price"
              >
                {formattedPriceFrom} - {formattedPriceTo}
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{property?.type}</p>
              <h4>
                <Link href={`/property/${property?.slug}`}>
                  {property?.name}
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {property?.address}
              </p>
            </div>
            {/* End .tc_content */}
          </div>
        </div>
      </div>
    );
}

export default ListingCard;