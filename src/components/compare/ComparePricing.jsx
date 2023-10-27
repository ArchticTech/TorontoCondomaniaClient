import Image from "next/image";
import comparePricingContent from "../../data/comparePricing";
import global from "../../config/env";
import { useState } from "react";

const ComparePricing = ({ compareProperty, removeProperty }) => {
  // const handleResetProperty2 = () => {
  //   removeProperty2();
  // };

  // const handleResetProperty3 = () => {
  //   removeProperty3();
  // };

  return (
    <>
      {/* {comparePricingContent.map((item) => ( */}
      {compareProperty.slice(0, 3).map((item) => (
        <li className="list-inline-item" key={item.id}>
          <ul className="mc_child_list two text-center">
            <li>
              <div className="membership_header">
                <div className="thumb">
                  <a style={{ cursor:'pointer' }} onClick={() => removeProperty(item.id)}>
                  <span className="flaticon-close"></span>
                </a>
                  <img
                    width={200}
                    height={130}
                    className="img-whp"
                    src={global.apiURL + "images/" + item?.image}
                    alt={item?.name}
                  />
                  <div className="price">
                    {item?.price_to}
                    {/* <span className="mnth">/to</span> */}
                  </div>
                </div>
                <div className="details">
                  <h4>{item?.name}</h4>
                  <p className="py-2">{item?.type}</p>
                </div>
              </div>
            </li>
            <li>
              <a href="#">{item?.city}</a>
            </li>
            <li>
              <a href="#">{item?.beds}</a>
            </li>
            <li>
              <a href="#">{item?.baths}</a>
            </li>
            <li>
              <a href="#">{item?.vip_featured_promotion}</a>
            </li>
            <li>
              <a href="#">{item?.yearBuilt}</a>
            </li>
            <li>
              <a  href="#">
                {item?.status}
              </a>
            </li>
          </ul>
        </li>
      ))}
    </>
  );
};

export default ComparePricing;
