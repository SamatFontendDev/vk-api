import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Friend = ({friend}) =>{
    return(
        <div>
            <div className="card">
            <img src={friend.photo_200_orig} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{`${friend.first_name} ${friend.last_name}`}</h5>
                    <p className="card-text">{friend.online ? 'В сети' : 'Не в сети'}</p>
                    <button className="btn btn-primary btn-link">
                        <Link to={`friends/${friend.id}`}>Перейти</Link>
                    </button>
                </div>
            </div>
        </div>
        
    )
}

Friend.propTypes = {
    friend: PropTypes.shape({
        photo_200_orig: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        online: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    })
}

export default connect()(Friend)