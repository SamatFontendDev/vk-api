import React from 'react';
import './index.css';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Friends from './components/Friends';
import Photos from './components/Photos';
import Navbar from './components/Navbar';
import FriendDetail from './components/FriendDetail';
import { connect } from 'react-redux';


const App = ({isAutorise}) => {
  return(
    <div>
      <Navbar/>
      <div className="container pt-5">
        <Route exact path="/" component={Home} exact/>
        <Route exact path="/friends" component={Friends} exact/>
        <Route exact path="/photos" component={Photos} exact/>
        <Route path='/friends/:id' component={FriendDetail} exact />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAutorise: state.autorize.name
})

export default connect(mapStateToProps)(App);
