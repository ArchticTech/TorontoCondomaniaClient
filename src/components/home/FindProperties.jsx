import Image from "next/image";
import { useDispatch } from "react-redux";
import { addCity } from "../../features/properties/propertiesSlice";
import Router from "next/router";

const FindProperties = ({cities}) => {

  const dispatch = useDispatch();
  const submitHandler = (city) => {
    dispatch(addCity(city));
    Router.push("/properties");
  };
  return (
    <>
      {cities.map((city) => (
        <div className={`col-lg-4 ${city.column}`} key={city.id}>
          {/* onClick={dispatch(addLocation(city.name))} */}
          <a onClick={() => submitHandler(city.name)} className="properti_city home5 d-block">
            <div className="thumb">
              <Image
                width={650}
                height={352}
                className="img-fluid w100 h-100 cover"
                src={city.img}
                alt="pc1.jpg"
              />
            </div>
            <div className="overlay">
              <div className="details">
                <div className="left">
                  <h4>{city.name}</h4>
                </div>
                <p>{city.count} Properties</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
