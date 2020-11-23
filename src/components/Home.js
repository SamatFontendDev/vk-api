import React from 'react';
import { connect } from 'react-redux';
import Alert from './Alert';
import PropTypes from 'prop-types';

const Home = ({name, error}) => {
    if(error) return <Alert error={error} />
    return <h2>{name ? `Добро пожаловать ${name}` : `Пожалуйста авторизуйтесь`}</h2>
}

const mapStateToProps = state => ({
    name: state.autorize.name,
    error: state.autorize.error
})

Home.propTypes = {
    name: PropTypes.string,
    error: PropTypes.string
}
    
export default connect(mapStateToProps)(Home)