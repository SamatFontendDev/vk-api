import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({error}) => <div class="alert alert-info" role="alert">{error}</div>

Alert.propTypes = {
    error: PropTypes.string
}

export default Alert