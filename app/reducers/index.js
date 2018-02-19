/**
 * @author Maria Fernanda Serna
 */

import { combineReducers } from 'redux';
import home from './home/homeReducer';
import login from './login/loginReducer';
import register from './register/registerReducer';
import settings from './settings/settingsReducer';
import profile from './profile/profileReducer';
import video from './video/videoReducer';

const rootReducer = combineReducers({ login, register, home, video, settings, profile });

export default rootReducer;
