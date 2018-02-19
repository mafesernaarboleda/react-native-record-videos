/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import Profile from './profile';
import { themesRankings, themesScores, setError } from './../../reducers/profile/actions';
import { getProfile } from './../../reducers/settings/actions';

const mapStateToProps = (state) => ({
  ...state.profile,
  ...state.settings,
});

const mapDispatchToProps = (dispatch) => ({
  themesScores: () => {
    dispatch(themesScores());
  },
  getProfile: () => {
    dispatch(getProfile());
  },
  themesRankings: () => {
    dispatch(themesRankings());
  },
  setError: (error) => {
    dispatch(setError(error));
  },
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;
