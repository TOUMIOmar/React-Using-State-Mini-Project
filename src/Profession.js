import React from 'react'
import PropTypes from "prop-types";


const Profession = ({profession}) => {
  return (
    <div>
        <h1>Profession :</h1>
        <p>I'am a student in {profession}</p>
    </div>
  )
}

Profession.defaultProps={
  profession :'go my code',
   
 };
 Profession.prototypes={
   profession: PropTypes.string,
   
 };
export default Profession


