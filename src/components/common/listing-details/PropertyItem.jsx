const PropertyItem = ({property}) => {
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <a href="#">{property?.type}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Beds: {property?.beds}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Baths: {property?.baths}</a>
      </li>
    </ul>
  );
};

export default PropertyItem;
