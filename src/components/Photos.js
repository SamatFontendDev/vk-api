import React from 'react'
import { connect } from 'react-redux'
import {getProfilePhotosAction} from '../redux/actions/getProfilePhotosAction'
import { getSavedPhotosAction } from '../redux/actions/getSavedPhotosAction'
import { getWallPhotosAction } from '../redux/actions/getWallPhotosAction'
import { Loader } from './Loader'
import Photo from './Photo'
import PropTypes from 'prop-types';

const Photos = ({
  requestProfile, 
  photosProfile, 
  getProfilePhotos, 
  photosWall, 
  requestWall, 
  photosSaved, 
  requestSaved,
  getWallPhotos,
  getSavedPhotos
}) => {
   return (
      <div className="row">
          <div className="col-md-4">
            <button onClick={getProfilePhotos} type="button" className="mb-5 btn btn-primary">Получить фотографии профиля</button>
            <div>
                {requestProfile ? <Loader/> : photosProfile.map(item => <Photo key={item.id} path={item.sizes[2].url} />)}
            </div>
          </div>
          <div className="col-md-4">
            <button onClick={getWallPhotos} type="button" className="mb-5 btn btn-secondary">Получить фотографии со стены</button>
            <div>
                {requestWall ? <Loader/> : photosWall.map(item => <Photo key={item.id} path={item.sizes[2].url} />)}
            </div>
          </div>
          <div className="col-md-4">
            <button onClick={getSavedPhotos} type="button" className="mb-5 btn btn-dark">Получить сохраненные фотографии</button>
            <div>
                {requestSaved ? <Loader/> : photosSaved.map(item => <Photo key={item.id} path={item.sizes[2].url} />)}
            </div>
          </div>
      </div>
   )
}
const mapStateToProps = state => ({
    requestProfile: state.photosProfile.request,
    photosProfile: state.photosProfile.photos,
    photosWall: state.photosWall.photos,
    requestWall: state.photosWall.request,
    photosSaved: state.savedPhotos.photos,
    requestSaved: state.savedPhotos.request
})

const mapDispatchToProps = {
    getProfilePhotos: getProfilePhotosAction,
    getWallPhotos: getWallPhotosAction,
    getSavedPhotos: getSavedPhotosAction
}

Photos.propTypes = {
    requestProfile: PropTypes.bool.isRequired,
    photosProfile: PropTypes.array.isRequired,
    photosWall: PropTypes.array.isRequired,
    requestWall: PropTypes.bool.isRequired,
    photosSaved: PropTypes.array.isRequired,
    requestSaved: PropTypes.bool.isRequired,
    getProfilePhotos: PropTypes.func.isRequired,
    getWallPhotos: PropTypes.func.isRequired,
    getSavedPhotos: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)