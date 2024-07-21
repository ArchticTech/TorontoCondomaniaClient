import React, { useState } from "react";
import { storeFavoriteProperty } from "../../utils/api";

const IconPropertyHeart = ({ propertyId }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleFavoriteClick = async (e) => {
    e.preventDefault();
    
    setIsSaved(true);
    const response = await storeFavoriteProperty(propertyId);
    
    if(response.error == 'Unauthenticated') {
      console.log('You are not Logged in');
    }
    else if (response.error) {
      console.log('Error: ', response.data)
    }
  };

  return (
    <>
      <li
        className="list-inline-item"
        style={{
          color: isSaved ? "white" : "",
          backgroundColor: isSaved ? "var(--color-primary)" : "",
          opacity: isSaved ? "1" : "",
        }}
      >
        <a href="#" onClick={(e) => handleFavoriteClick(e)}>
          <span className="flaticon-heart"></span>
        </a>
      </li>
    </>
  );
};

export default IconPropertyHeart;
