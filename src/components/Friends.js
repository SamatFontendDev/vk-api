import React from 'react'
import { connect } from 'react-redux'
import { getFriendsAction } from '../redux/actions/getFriendsAction'
import Friend from './Friend'
import { Loader } from './Loader'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const Friends = ({getFriends, friends, request}) => {

    useEffect(() => {
        getFriends()
    }, [])
    
    return (
        <div>
            <div className="friend-wrap">
                {request ? <Loader/> : friends.map(friend => <Friend key={friend.id} friend={friend} />)}
            </div>
        </div>
        
    )
}

const mapStateToProps = state => ({
    friends: state.friends.friends,
    request: state.friends.request,
})

const mapDispatchToProps = {
    getFriends: getFriendsAction
}

Friends.propTypes = {
    friends: PropTypes.array,
    request: PropTypes.bool,
    getFriends: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)