import Link from "next/link";
import findProperties from "../../data/cityPropertiesCount";
import Image from "next/image";
import { addLocation } from "../../pages/properties/index";
import { useDispatch } from "react-redux";

const FindProperties = ({cities}) => {
  const dispatch = useDispatch()
  return (
    <>
      {cities.map((city) => (
        <div className={`col-lg-4 ${city.column}`} key={city.id}>
          {/* onClick={dispatch(addLocation(city.name))} */}
          <Link href="/properties" className="properti_city home5 d-block">
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
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
