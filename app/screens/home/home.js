import React, { PropTypes, Component } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import GestureRecognizer from 'react-native-swipe-gestures';
import * as Animatable from 'react-native-animatable';

import SpinnerComponent from './../../components/spinner';
import VideoPreviewToday from './videoPreviewToday';
import VideoPreviewYesterday from './videoPreviewYesterday';

import styles from './style';

const imgBack = require('./../../images/icons-buzz/icon_user.png');
const buzzLogo = require('./../../images/buzz.png');
const iconYesterdayNoTab = require('./../../images/icons-buzz/yesterday-icon-2.png');
const iconTodayTab = require('./../../images/icons-buzz/today-icon-1.png');
const iconYesterdayTab = require('./../../images/icons-buzz/yesterday-icon-1.png');
const iconTodayNoTab = require('./../../images/icons-buzz/today-icon-2.png');

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      iconYesterday: iconYesterdayNoTab,
      iconToday: iconTodayTab,
      routes: [
        {
          key: '1',
          title: '',
          icon: 'bell',
          name: 'Today',
        }, {
          key: '2',
          title: '',
          icon: 'clock-o',
          name: 'Yesterday',
        },
      ],
    };
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.successLogin === false) {
      this
        .props
        .navigation
        .navigate('SignIn');
    }
  }

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

  backPress() {
    this
      .props
      .navigation
      .navigate('Profile');
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

  renderHeader = props => (<TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabbar}
    tabStyle={styles.tab}
    labelStyle={styles.label}
    renderIcon={this.renderIcon}/>);

  renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <VideoPreviewToday ref="today" {...this.props}/>;
      case '2':
        return <VideoPreviewYesterday ref="yesterday" {...this.props} />;
      default:
        return null;
    }
  }

  onSwipeUp() {
    this.props.navigation.navigate('Video');
  }

  renderFooter = () => {
    const { themesToday } = this.props;
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };
    if (themesToday.length > 0) {
      return (
      <GestureRecognizer
          onSwipeUp={() => this.onSwipeUp()}
          config={config}
          style={[styles.overlay, styles.bottomOverlay]}
      >
        <View style={[styles.overlay, styles.bottomOverlay]}>
        <Animatable.View animation="pulse" easing="ease-in-out-sine" iterationCount="infinite">
          <TouchableOpacity onPress={() => this.onSwipeUp()} style={styles.buttonRecord}>
            <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>REC</Text>
          </TouchableOpacity>
        </Animatable.View>
        </View>
      </GestureRecognizer>);
    }
  };

  render() {
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar animated hidden />
        <View style={styles.topHeight}>
          <View style={styles.header}>
            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity
                style={[styles.typeButton, { marginRight: 30 }]}
                onPress={() => this.backPress()}>
                <Image style={{ width: 20, height: 20 }} source={imgBack} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image style={styles.logo} source={buzzLogo} resizeMode="contain" />
            </View>
          </View>
          <View style={styles.containerTabs}>
            <TabViewAnimated
              {...this.props}
              ref="tabBar"
              navigationState={this.state}
              renderScene={this.renderScene}
              renderHeader={this.renderHeader}
              onRequestChangeTab={this.handleChangeTab}
              renderFooter={this.renderFooter}
            />
          </View>
        </View>
        { loading
          ? <SpinnerComponent loading={loading} color={'#000'} />
          : null}
      </View>
    );
  }
}


Home.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Home;
