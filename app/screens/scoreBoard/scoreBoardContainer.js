/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import ScoreBoard from './scoreBoard';
import { videosList, setError } from './../../reducers/video/actions';

const mapStateToProps = (state) => ({
  ...state.video,
});

const mapDispatchToProps = (dispatch) => ({
  videosList: (id) => {
    dispatch(videosList(id));
  },
  setError: (error) => {
    dispatch(setError(error));
  },
});

const ScoreBoardContainer = connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
export default ScoreBoardContainer;
