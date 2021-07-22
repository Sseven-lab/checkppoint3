import React from 'react';
import Counter from './Counter';

const Card = ({ title, infos, image, description, infoSup }) => {
  return (
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
  );
};

export default Card;
