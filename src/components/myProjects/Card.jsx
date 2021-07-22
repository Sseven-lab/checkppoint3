import React from 'react';


//import './Card.css';

const Card = ({title, infos, image, description, infoSup}) => {
    return (
    <div>
    <div> {title}</div>
    <p> {infos} </p>
    <p> {description}</p>
    <p>{infoSup}</p>

    </div>
    );
  }

//   SurveyIcons.propTypes = {
//     image: PropTypes.string.isRequired,
//     name2: PropTypes.string,
//     name3: PropTypes.string,
//   };
  
//   SurveyIcons.defaultProps = {
//     name2: '',
//     name3: '',
//   };

  export default Card;