import React from "react";

const Card = ({ title, category, price, img, desc }) => {

  return (
    <div className="card">
      <img className="card__img" src={img} alt={title} />
      <div className="card__body">
        <div className="card__heading">
          <h2 className="card__title">{title}</h2>
          <h3 className="card__cate">{category}</h3>
        </div>
        <h4 className="card__price">{`$${price}`}</h4>
        <p className="card__desc">{desc}</p>
      </div>
    </div>
  )
}

export default Card;