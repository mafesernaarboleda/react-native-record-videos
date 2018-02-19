/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import SignIn from './signIn';
import { login, setError } from './../../reducers/login/actions';

const mapStateToProps = (state) => ({
  ...state.login,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => {
    dispatch(login(user));
  },
  setError: (error) => {
    dispatch(setError(error));
  },
});

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);
export default SignInContainer;
