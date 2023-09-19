const PropertyFeatures = ({propertyFeatures}) => {
  return (
    <>
      {propertyFeatures?.map((feature) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <ul className="order_list list-inline-item">
            <li>
              <span className="flaticon-tick"></span>
              {feature}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default PropertyFeatures;
