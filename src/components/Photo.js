import React from 'react'
import PropTypes from 'prop-types';


const Photo = ({path}) => (
    <img src={path} className="img-thumbnail"/>
)

Photo.propTypes = {
    path: PropTypes.string.isRequired 
}

export default Photo
