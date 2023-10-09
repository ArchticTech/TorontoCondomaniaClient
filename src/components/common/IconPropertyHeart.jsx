import React, { useState } from "react";

const IconPropertyHeart = ({ id }) => {
    const [isSaved, setIsSaved] = useState(false);
  const handleFavoriteClick = async (e, propertyId) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/storeFavorite/${propertyId}`, {
        // method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsSaved(true);
        // Handle success (e.g., show a success message)
      } else {
        // Handle errors (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network or other errors
    }

    // Use the propertyId for further processing, e.g., send it to your API to add to favorites
    console.log(`Clicked on property with ID: ${propertyId}`);
  };
  return (
    <>
      <li className="list-inline-item">
        <a href="#" onClick={(e) => handleFavoriteClick(e, id)}>
          <span className="flaticon-heart" style={{ color: isSaved ? "red" : "" }} ></span>
        </a>
      </li>
    </>
  );
};

export default IconPropertyHeart;
