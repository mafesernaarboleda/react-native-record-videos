/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import VideoPlayer from './videoPlayer';
import { videosList, voteVideo, setError } from './../../reducers/video/actions';
import { themesTodayList } from './../../reducers/home/actions';

const mapStateToProps = (state) => ({
  ...state.video,
  ...state.home,
  ...state.login,
});

const mapDispatchToProps = (dispatch) => ({
  videosList: (id) => {
    dispatch(videosList(id));
  },
  themesTodayList: () => {
    dispatch(themesTodayList());
  },
  voteVideo: (data) => {
    dispatch(voteVideo(data));
  },
  setError: (error) => {
    dispatch(setError(error));
  },
});

const VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
export default VideoPlayerContainer;
