/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import VideoReview from './videoReview';
import { videoUpload, setError } from './../../reducers/video/actions';

const mapStateToProps = (state) => ({
  ...state.video,
});

const mapDispatchToProps = (dispatch) => ({
  videoUpload: (data) => {
    dispatch(videoUpload(data));
  },
  setError: (error) => {
    dispatch(setError(error));
  },
});

const VideoRecorderContainer = connect(mapStateToProps, mapDispatchToProps)(VideoReview);
export default VideoRecorderContainer;
