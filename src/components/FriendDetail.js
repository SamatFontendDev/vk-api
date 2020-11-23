import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getProfileInfoAction } from '../redux/actions/getProfileInfoAction';
import PropTypes from 'prop-types';


const FriendDetail = ({getInfo, friend}) => {
    var {id} = useParams();

    useEffect(() => {
        getInfo(id)
    }, [])

    return(
        <div>
            {friend.length && <div className="card bg-dark text-white">
                <img src={friend[0].photo_max_orig} className="card-img" alt={friend[0].first_name}/>
                <div className="card-img-overlay">
                    <h5 className="card-title black">{friend[0].first_name}</h5>
                </div>
            </div>}
            
        </div>
    )
}

const mapStateToProps = state => ({
    friend: state.friend.info,
    request: state.friend.request
})

const mapDispatchToProps = dispatch => {
    return{
        getInfo: id => {
            dispatch(getProfileInfoAction(id))
        }
    }
}

FriendDetail.propTypes = {
    friend: PropTypes.array,
    request: PropTypes.bool,
    getInfo: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendDetail)