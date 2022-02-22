import React from 'react'
import PropTypes from "prop-types";


const FullName = ({lastname,name}) => {
  const layoutprofil= {display: "flex",}
  const myimg={with:"176",height:"209",marginTop:"3%"}
  const col2={ display: "block",marginLeft: '20%'}
  const bio={marginTop:"10%"}

  return (
    <div className='ok'>
        <h1>FullName: </h1>
        <p>{lastname} {name}</p>
        
    </div>
  )
}

FullName.defaultProps={
  lastname :'1',
  name :'Student',
};


FullName.prototype={
 lastname: PropTypes.string,
 name: PropTypes.string,
};

export default FullName 

