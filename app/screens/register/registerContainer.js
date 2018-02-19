/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import Register from './register';
import { register, addYoutubeToken, setError } from './../../reducers/register/actions';

const mapStateToProps = (state) => ({
  ...state.register,
});

const mapDispatchToProps = (dispatch) => ({
  register: (user) => {
    dispatch(register(user));
  },
  addYoutubeToken: (token) => {
    dispatch(addYoutubeToken(token));
  },
  setError: (error) => {
    dispatch(setError(error));
  },
});

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);
export default RegisterContainer;
