import Link from "next/link";

// import properties from "../../../data/properties";
import Image from "next/image";
import global from "../../../config/env";
import { useEffect, useState } from "react";

const FavouritProducts = ({ favProperties }) => {
  const [favoriteProperties, setFavoriteProperties] = useState(favProperties);

  const handleDeleteProperty = async (propertyId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/deleteFavorite/${propertyId}`,
        {
          // method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete property");
      }

      // Remove the deleted property from the UI
      setFavoriteProperties((prevProperties) =>
      prevProperties.filter((property) => property.id !== propertyId)
    );
      // You can update the state or re-fetch the updated list of favorite properties here
    } catch (error) {
      console.error("Error:", error);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  let content = favoriteProperties?.slice(0, 4)?.map((item) => (
    <div className="feat_property list favorite_page" key={item.id}>
      <div className="thumb">
        <img
          width={150}
          height={220}
          className="img-whp cover"
          // src={item.image}
          src={global.apiURL + "images/" + item.image}
          alt="fp1.jpg"
        />
        <div className="thmb_cntnt">
          <ul className="tag mb0">
            <li className="list-inline-item">
              <a href="#">{item.type}</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .thumb */}

      <div className="details">
        <div className="tc_content">
          <h4>
            <Link href={`/property/${item.slug}`}>{item.name}</Link>
          </h4>
          <p>
            <span className="flaticon-placeholder"></span> {item.address}
          </p>
          {/* <a className="fp_price text-thm" href="#">
            ${item.price_from}
            
          </a> */}
          <h3 style={{ color: "#000" }}>
            ${item.price_from} - ${item.price_to}
          </h3>
        </div>
      </div>
      {/* End details */}

      <ul className="view_edit_delete_list mb0 mt35">
        <li
          className="list-inline-item delete_fav"
          // data-toggle="tooltip"
          // data-placement="top"
          // title="Delete"
        >
          {/* <a href="#">
            <span className="flaticon-garbage"></span>
          </a> */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleDeleteProperty(item.id);
            }}
            className="deleteFavoriteButton"
          >
            <span className="flaticon-garbage"></span>
          </a>
        </li>
      </ul>
      {/* view_edit_delete_list */}
    </div>
  ));

  return <>{content}</>;
};

export default FavouritProducts;
