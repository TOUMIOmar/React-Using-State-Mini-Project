import React from 'react'
import PropTypes from "prop-types";


const Bio = ({knowledge,expertisetest,expscore}) => {
  return (
      <>
      <h1>BIO:</h1>
        <p>Creative task-driven Full Stack Web Developer with over 3 years of experience in web design and development. Equipped with knowledge in {knowledge}, and other programming languages apart from expertise in testing, {expertisetest}. Received {expscore}%+ experience scores on every web application built for Softwares.</p>
      </>
    
  )
}
Bio.defaultProps={
  knowledge:'Python',
  expertisetest:'UI/UX interface designing',
  expscore:'20'
};
Bio.prototypes={
  knowledge: PropTypes.string ,
  expertisetest: PropTypes.string,
  expscore: PropTypes.string
};
export default Bio


