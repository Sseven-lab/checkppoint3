import React from 'react';
import Counter from './Counter';

const Card = ({ title, infos, image, description, infoSup, idproject }) => {
  return (
    <div id={idproject}>
      <img src={image} alt="screenshot projet" />
      <div>
        <div> {title}</div>
        <div>
          <p> {infos} </p>
          <p> {description}</p>
          <p>{infoSup}</p>
        </div>
        <div>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default Card;
