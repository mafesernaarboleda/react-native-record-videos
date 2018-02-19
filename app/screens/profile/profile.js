/**
 * @author Maria Fernanda Serna
 */

import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-native-elements';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import ThemeRanking from './themeRanking';
import ThemeNotification from './themeNotification';
import SpinnerComponent from './../../components/spinner';
import _ from 'lodash';
import styles from './style';

const menu = require('./../../images/icons-buzz/menu-settings.png');
const imgBack = require('./../../images/icons-buzz/forward.png');
const background = require('./../../images/bg-new-account.png');
const buzzLogo = require('./../../images/buzz.png');
const iconYesterdayNoTab = require('./../../images/icons-buzz/yesterday-icon-2.png');
const iconTodayTab = require('./../../images/icons-buzz/today-icon-1-black.png');
const iconYesterdayTab = require('./../../images/icons-buzz/yesterday-icon-1-black.png');
const iconTodayNoTab = require('./../../images/icons-buzz/today-icon-2.png');

class Profile extends Component {

  themesScoresCol = { theme: { title: '', color: '#000' }, score: '' };
  themesScoresList = [this.themesScoresCol, this.themesScoresCol, this.themesScoresCol, this.themesScoresCol];
  profile = null;

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      iconYesterday: iconYesterdayNoTab,
      iconToday: iconTodayTab,
      profileName: '',
      routes: [
        {
          key: '1',
          title: '',
          icon: 'bell',
          name: 'NOTIFICATIONS',
        }, {
          key: '2',
          title: '',
          icon: 'clock-o',
          name: 'ENTRIES',
        },
      ],
    };
  }

  componentDidMount() {
    const { themesScores, getProfile } = this.props;
    getProfile();
    themesScores();
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.successThemesScores) {
      this.themesScoresList = await nextProps.themesScoresList;
    }
    if (nextProps.successGetProfile) {
      this.profile = await nextProps.profile;
      this.setState({ profileName: this.profile.alias });
    }
  }

  handleChangeTab = (index) => {
    this.setState({ index });
    if (this.state.index === 1) {
      this.setState({ iconYesterday: iconYesterdayNoTab });
      this.setState({ iconToday: iconTodayTab });
    } else {
      this.setState({ iconYesterday: iconYesterdayTab });
      this.setState({ iconToday: iconTodayNoTab });
    }
  };

  scoreAverage() {
    let total = 0;
    for (const i = 0; i < this.themesScoresList.length; i++) {
      total += this.themesScoresList[i].score;
    }
    return total / this.themesScoresList.length;
  }

  renderHeader = props => (<TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabbar}
    tabStyle={styles.tab}
    labelStyle={styles.label}
    renderIcon={this.renderIcon}/>);

  renderIcon = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          <View style={styles.nestedButtonView}>
            <Image style={styles.icon} resizeMode="contain" source={this.state.iconToday}/>
            <View>
              <Text style={styles.text}>{route.name}</Text>
            </View>
          </View>
        );
      case '2':
        return (
          <View style={styles.nestedButtonView}>
            <View>
              <Text style={styles.text}>{route.name}</Text>
            </View>
            <Image
              style={[styles.icon, { marginLeft: 10 }]}
              resizeMode="contain"
              source={this.state.iconYesterday}
            />
          </View>
        );
      default:
        return null;
    }
  };

  renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <ThemeNotification ref="notification" {...this.props}/>;
      case '2':
        return <ThemeRanking ref="ranking" {...this.props}/>;
      default:
        return null;
    }
  }

  backPress() {
    const backAction = NavigationActions.back({ key: null });
    this.props.navigation.dispatch(backAction);
  }

  settings() {
    this
      .props
      .navigation
      .navigate('Settings');
  }

  render() {
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        <Image source={background} style={[styles.container]} resizeMode="cover" >
          <View style={styles.header}>
            <View style={{ marginLeft: 10, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.settings()}>
                <Image source={menu} resizeMode="contain" style={{ marginLeft: 10, width: 25, height: 27 }} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image style={styles.logo} source={buzzLogo} resizeMode="contain" />
            </View>
            <View style={{ marginRight: 10 }}>
              <TouchableOpacity onPress={() => this.backPress()}>
                <Image source={imgBack} resizeMode="contain" style={{ marginLeft: 10, width: 20, height: 20 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.topHeight}>
            <View style={styles.viewUser}>
              <View style={styles.user}>
                <Text style={styles.textName}>{this.state.profileName.toUpperCase()}</Text>
                <Text style={styles.textQuantity}>{this.scoreAverage()}</Text>
                <Text style={[styles.textTheme, { color: '#000' }]}>AVG. SCORE</Text>
              </View>
             <Grid style={styles.themes}>
                <Col>
                {
                  this.themesScoresList[0] ?
                  <Row containerStyle={[styles.cols, styles.rows, styles.textGrid]}>
                    <Text style={styles.textQuantity}>{ this.themesScoresList[0].score}</Text>
                    <Text style={[styles.textTheme, { color: this.themesScoresList[0].theme.color }]}>{this.themesScoresList[0].theme.title.toUpperCase()}</Text>
                  </Row> :
                  <Row containerStyle={[styles.rows, styles.textGrid]}>
                    <Text style={styles.textQuantity}></Text>
                    <Text style={styles.textTheme} ></Text>
                  </Row>
                }
                {
                  this.themesScoresList[2] ?
                  <Row containerStyle={[styles.rows, styles.textGrid]}>
                    <Text style={styles.textQuantity}>{ this.themesScoresList[2].score}</Text>
                    <Text style={[styles.textTheme, { color: this.themesScoresList[2].theme.color }]}>{this.themesScoresList[2].theme.title.toUpperCase()}</Text>
                  </Row> :
                  <Row containerStyle={[styles.rows, styles.textGrid]}>
                    <Text style={styles.textQuantity}></Text>
                    <Text style={styles.textTheme} ></Text>
                  </Row>
                }
              </Col>

              <Col>
              { this.themesScoresList[1] ?
                <Row containerStyle={[styles.cols, styles.textGrid]}>
                  <Text style={styles.textQuantity}>{this.themesScoresList[1].score}</Text>
                  <Text style={[styles.textTheme, { color: this.themesScoresList[1].theme.color }]}>{this.themesScoresList[1].theme.title.toUpperCase()}</Text>
                  </Row> :
                  <Row containerStyle={[styles.cols, styles.textGrid]}>
                  <Text style={styles.textQuantity}></Text>
                  <Text style={styles.textTheme}></Text>
                  </Row>
              }
              { this.themesScoresList[3] ?
                <Row containerStyle={styles.textGrid}>
                  <Text style={styles.textQuantity}>{this.themesScoresList[3].score}</Text>
                  <Text style={[styles.textTheme, { color: this.themesScoresList[3].theme.color }]}>{ this.themesScoresList[3].theme.title.toUpperCase()}</Text>
                </Row>:
                <Row containerStyle={styles.textGrid}>
                <Text style={styles.textQuantity}></Text>
                <Text style={styles.textTheme}></Text>
              </Row>
              }
                </Col>
            </Grid>
            </View>
              <ThemeRanking {...this.props}></ThemeRanking>
          </View>
        </Image>
         {loading === true
              ? <SpinnerComponent loading={loading} color={'#000'} />
              : null
            }
      </View>
    );
  }
}

Profile.propTypes = {
  loading: PropTypes.bool.isRequired,
  themesScores: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
};

export default Profile;
