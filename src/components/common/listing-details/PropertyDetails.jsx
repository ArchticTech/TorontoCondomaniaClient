const PropertyDetails = ({property}) => {
  
  const formattedSqFtPriceFrom = property?.price_per_sqft_from?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const formattedSqFtPriceTo = property?.price_per_sqft_to?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <>
      <ul className="list-item row">
      <li className="col-sm-6">
          <p>
            Suite Size Range : <span>{property?.suite_size_from} sqft - {property?.suite_size_to} sqft</span>
          </p>
        </li>
        <li className="col-sm-6">
          <p>
            Price per SqFt Range : <span>{formattedSqFtPriceFrom} - {formattedSqFtPriceTo}</span>
          </p>
        </li>

        <li className="col-sm-6">
          <p>
            Status : <span>{property?.status}</span>
          </p>
        </li>
        <li className="col-sm-6">
          <p>
            Estimated Occupency in : <span>{property?.est_occupancy_month}, {property?.est_occupancy_year}</span>
          </p>
        </li>

        <li className="col-sm-6">
          <p>
            Property Type : <span>{property?.type}</span>
          </p>
        </li>
        <li className="col-sm-6">
          <p>
            City : <span>{property?.city}</span>
          </p>
        </li>

        <li className="col-sm-6 col-md-4">
          <p>
            Property ID : <span>{property?.code}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-4">
          <p>
            Stories : <span>{property?.stories}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-4">
          <p>
            Suites : <span>{property?.suites}</span>
          </p>
        </li>

        <li className="col-sm-6 col-md-4">
          <p>
            Beds : <span>{property?.beds}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-4">
          <p>
            Baths : <span>{property?.baths}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-4">
          <p>
            Ceiling Height : <span>{property?.ceiling_height}"</span>
          </p>
        </li>
        
        <li className="col-sm-6 col-md-4">
          <p>
            Suites Starting Floor : <span>{property?.suites_starting_floor}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-4">
          <p>
            Suites per Floor : <span>{property?.suites_per_floor}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-4">
          <p>
            Floor Plans : <span>{property?.floor_plans}</span>
          </p>
        </li>
      </ul>
    </>
  );
};

export default PropertyDetails;
