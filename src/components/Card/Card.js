import React from "react";
import sytle from './Card.module.scss';

const Card = ({ url }) => {
  return (
    <div className={sytle.card} style={{backgroundImage: `url(${url})` }}>
    </div>
  );
};

export default Card;