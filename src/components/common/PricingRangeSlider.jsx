import { useEffect } from "react";
import { useState } from "react";
import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";

const RangeSlider = ({priceReducer, min, max}) => {
  const [price, setPrice] = useState({ value: { min: min, max: max } });
  const dispatch = useDispatch();

  const handleOnChange = (value) => {
    setPrice({ value });
  };

  // price add to state
  useEffect(() => {
    dispatch(
      priceReducer({
        min: price.value.min,
        max: price.value.max,
      })
    );

  }, [dispatch, price]);

  return (
    <div className="nft__filter-price tp-range-slider tp-range-slider-dark mb-20">
      <div className="nft__filter-price-inner d-flex align-items-center justify-content-between">
        <div className="nft__filter-price-box">
          <div className="d-flex align-items-center">
            <span>$ </span>
            <span>{price.value.min}</span>
          </div>
        </div>
        <div className="nft__filter-price-box">
          <div className="d-flex align-items-center">
            <span>$ </span>
            <span>{price.value.max}</span>
          </div>
        </div>
      </div>

      <InputRange
        formatLabel={(value) => ``}
        maxValue={max}
        minValue={min}
        value={price.value}
        onChange={(value) => handleOnChange(value)}
      />

      <div className="slider-styled inside-slider" id="nft-slider"></div>
    </div>
  );
};

export default RangeSlider;
