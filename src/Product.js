import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <p>{title}</p>
      <p ClassName="product__price">
        <small>CDN</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>X</p>
          ))}
      </div>
      <img src={image} alt="book image" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
