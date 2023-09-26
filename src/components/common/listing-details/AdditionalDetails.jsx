const AdditionalDetails = ({property}) => {

  const formattedParkingPrice = property?.parking_price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const formattedLockerPrice = property?.locker_price.toLocaleString('en-US', {
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
            Architect : <span>{property.architect}</span>
          </p>
        </li>
        <li className="col-sm-6">
          <p>
            Designer : <span>{property.designer}</span>
          </p>
        </li>
        <li className="col-sm-6">
          <p>
            Developer : <span>{property.developer}</span>
          </p>
        </li>
        <li className="col-sm-6">
          <p>
            Development : <span>{property.development}</span>
          </p>
        </li>
        
        <li className="col-sm-6 col-md-4">
          <p>
            Minimum Deposit : <span>{property?.min_deposit_percentage}%</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-4">
          <p>
            Parking Price : <span>{formattedParkingPrice}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-4">
          <p>
            Locker Price : <span>{formattedLockerPrice}</span>
          </p>
        </li>
      </ul>
    </>
  );
};

export default AdditionalDetails;
