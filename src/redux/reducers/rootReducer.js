import { combineReducers } from "redux";
import { autorizeReducer } from "./autorizeReducer";
import { getFriendsReducer } from "./getFriendsReducer";
import { getProfileInfoReducer } from "./getProfileInfoReducer";
import { getProfilePhotosReducer } from "./getProfilePhotosReducer";
import { getSavedPhotosReducer } from "./getSavedPhotoReducer";
import {getWallPhotosReducer} from './getWallPhotosReducer';


export const rootReducer = combineReducers({
    autorize: autorizeReducer,
    photosProfile: getProfilePhotosReducer,
    photosWall: getWallPhotosReducer,
    savedPhotos: getSavedPhotosReducer,
    friends: getFriendsReducer,
    friend: getProfileInfoReducer
})