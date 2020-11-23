import React from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import { Loader } from './Loader'
import PropTypes from 'prop-types';

const NavbarLeft = ({name, request}) => {
    if(name) {
        return <h4>{name}</h4>
    } else if (request) {
        return <Loader/>
    } else {
        return <Button/>
    }
}

const mapStateToProps = state => ({
    name: state.autorize.name,
    request: state.autorize.request
})

NavbarLeft.propTypes = {
    name: PropTypes.string,
    request: PropTypes.bool
}

export default connect(mapStateToProps)(NavbarLeft)