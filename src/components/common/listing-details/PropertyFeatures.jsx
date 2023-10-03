const PropertyFeatures = ({features}) => {
  return (
    <>
      {features?.map((feature, index) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={feature.index}>
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
