/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import Settings from './settings';
import { logout } from './../../reducers/login/actions';
import { getProfile, updateProfile, setError } from './../../reducers/settings/actions';

const mapStateToProps = (state) => ({
  ...state.login,
  ...state.settings,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
  getProfile: () => {
    dispatch(getProfile());
  },
  updateProfile: (data) => {
    dispatch(updateProfile(data));
  },
  setError: (error) => {
    dispatch(setError(error));
  }
});

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);
export default SettingsContainer;
