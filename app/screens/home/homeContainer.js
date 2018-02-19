/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import Home from './home';
import { themesTodayList, themesYesterdayList, setError } from './../../reducers/home/actions';
import { logout } from './../../reducers/login/actions';


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
  logout: () => {
    dispatch(logout());
  },
  setError: (error) => {
    dispatch(setError(error));
  },
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
