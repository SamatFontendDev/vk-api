import React from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../redux/actions/autorizeAction';
import PropTypes from 'prop-types';

const Button = ({handleLogin}) => {
   return(
        <button onClick={handleLogin} type="button" className="btn btn-primary">Авторизоваться</button>
    )
    
}

Button.propTypes = {
    handleLogin: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    handleLogin: handleLogin 
}

export default connect(null,mapDispatchToProps)(Button)