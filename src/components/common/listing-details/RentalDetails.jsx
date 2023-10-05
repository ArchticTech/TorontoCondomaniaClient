const PropertyDetails = ({ rental }) => {
  const formattedMonthlyRent = rental?.price_per_sqft_from?.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }
  );

  return (
    <>
      <ul className="list-item row">
        <li className="col-sm-6 col-md-6">
          <p>
            Square .ft : <span>{rental?.sqft} sqft </span>
          </p>
        </li>
        <li className="col-sm-6 col-md-6">
          <p>
            Status : <span>{rental?.status == 1 ? "Active" : "In Active"}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-6">
          <p>
            Availability Date : <span>{rental?.availability_date}</span>
          </p>
        </li>

        <li className="col-sm-6 col-md-6">
          <p>
            Rent Type : <span>{rental?.type}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-6">
          <p>
            City : <span>{rental?.city}</span>
          </p>
        </li>

        {/* <li className="col-sm-6 col-md-4">
          <p>
            Property ID : <span>{rental?.code}</span>
          </p>
        </li> */}
        <li className="col-sm-6 col-md-6">
          <p>
            Security Deposit : <span>{rental?.security_deposit}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-6">
          <p>
            Beds : <span>{rental?.beds}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-6">
          <p>
            Baths : <span>{rental?.baths}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-6">
          <p>
            Basement :{" "}
            <span>
              {rental?.basement_available == 1 ? "Available" : "Not Available"}
            </span>
          </p>
        </li>

        <li className="col-sm-6 col-md-6">
          <p>
            Parking :{" "}
            <span>
              {rental?.parking_available == 1 ? "Available" : "Not Available"}
            </span>
          </p>
        </li>

        <li className="col-sm-6 col-md-6">
          <p>
            Laundry :{" "}
            <span>
              {rental?.laundry_located == 1 ? "Available" : "Not Available"}
            </span>
          </p>
        </li>
        <li className="col-sm-6 col-md-6">
          <p>
            Smoking :{" "}
            <span>
              {rental?.smoking_policy == 1 ? "Allowed" : "Not Allowed"}
            </span>
          </p>
        </li>
        <li className="col-sm-6 col-md-6">
          <p>
            Pet Policy :{" "}
            <span>
              {rental?.pet_policy == 1 ? "Available" : "Not Available"}
            </span>
          </p>
        </li>
      </ul>
    </>
  );
};

export default PropertyDetails;
