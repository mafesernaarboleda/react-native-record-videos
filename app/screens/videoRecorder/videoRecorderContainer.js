/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import VideoRecorder from './videoRecorder';
import { themesTodayList, themesYesterdayList, setError } from './../../reducers/home/actions';

const mapStateToProps = (state) => ({
  ...state.home,
});

const mapDispatchToProps = (dispatch) => ({
  themesTodayList: () => {
    dispatch(themesTodayList());
  },
  themesYesterdayList: () => {
    dispatch(themesYesterdayList());
  },
  setError: (error) => {
    dispatch(setError(error));
  },
});

const VideoRecorderContainer = connect(mapStateToProps, mapDispatchToProps)(VideoRecorder);
export default VideoRecorderContainer;
