const AdditionalAssignmentDetails = ({ property }) => {
  // Assuming `dateString` is passed as a prop or obtained from some data source
  const tentativedateString = property.tentative_occ_date; // e.g., "2023-10-11T15:30:00"
  const date = new Date(tentativedateString);

  const tentativeday = date.getDate();
  const tentativemonth = date.getMonth() + 1; // Month is zero-based
  const tentativeyear = date.getFullYear();

  // Ensure that day, month, and year are formatted with leading zeros if needed
  const tentativeformattedDay = tentativeday < 10 ? `0${tentativeday}` : tentativeday;
  const tentativeformattedMonth = tentativemonth < 10 ? `0${tentativemonth}` : tentativemonth;

  const purchasedateString = property.tentative_occ_date; // e.g., "2023-10-11T15:30:00"
  const purchasedate = new Date(purchasedateString);

  const purchaseday = purchasedate.getDate();
  const purchasemonth = purchasedate.getMonth() + 1; // Month is zero-based
  const purchaseyear = purchasedate.getFullYear();

  // Ensure that day, month, and year are formatted with leading zeros if needed
  const purchaseformattedDay = purchaseday < 10 ? `0${purchaseday}` : purchaseday;
  const purchaseformattedMonth = purchasemonth < 10 ? `0${purchasemonth}` : purchasemonth;

  return (
    <>
      <ul className="list-item row">
        <li className="col-sm-6">
          <p>
            Assignment Unit No : <span>{property.unit_no}</span>
          </p>
        </li>
        <li className="col-sm-6">
          <p>
            Assignment Floor No : <span>{property.floor_no}</span>
          </p>
        </li>
        <li className="col-sm-6">
          <p>
            Purchase Price : <span>{property.purchase_price}</span>
          </p>
        </li>
        <li className="col-sm-6">
          <p>
            Tentative Occ. Date : <span>{`${tentativeformattedDay}-${tentativeformattedMonth}-${tentativeyear}`}</span>
          </p>
        </li>

        <li className="col-sm-6 col-md-6">
          <p>
            Purchase Date : <span>{`${purchaseformattedDay}-${purchaseformattedMonth}-${purchaseyear}`}</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-6">
          <p>
            Cooperation Percentage :{" "}
            <span>{property.cooperation_percentage}%</span>
          </p>
        </li>
        <li className="col-sm-6 col-md-6">
          <p>
            Deposit Paid : <span>{property.deposit_paid}</span>
          </p>
        </li>
      </ul>
    </>
  );
};

export default AdditionalAssignmentDetails;
