import React from 'react'
import PropTypes from "prop-types";


const ProfilePhoto = props => {
  
  return (
    <div>
        <img src={props.children}/>
    </div>
  )
}

ProfilePhoto.defaultProps={
 children :"/defaultimg.png",
};

export default ProfilePhoto
