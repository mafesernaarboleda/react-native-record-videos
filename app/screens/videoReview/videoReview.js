/**
 * @author Maria Fernanda Serna
 */

import React, { PropTypes, Component } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Video from 'react-native-video';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Icon from 'react-native-vector-icons/FontAwesome';
import GestureRecognizer from 'react-native-swipe-gestures';
import { NavigationActions } from 'react-navigation';

import SpinnerComponent from './../../components/spinner';

import styles from './style';


class VideoReview extends Component {

  constructor(props) {
    super(props);

    this.video = Video;

    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'cover',
      duration: 0.0,
      currentTime: 0.0,
      paused: false,
      repeat: true,
      fullscreen: true,
      description: '',
      theme: this.props.navigation.state.params.theme,
      path: this.props.navigation.state.params.path,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.successUploadVideo) {
    this.showAlert('Video saved correctly', 'Success');
    this.props.navigation
               .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home'})
                    ]
    }));
  }
 if (!nextProps.successUploadVideo && nextProps.apiError !== '') {
    this.showAlert(nextProps.apiError, 'Error');
    this.props.navigation
               .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home' }),
                    ],
                 }));
  }
  }

  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  onEnd = () => {
    this.setState({ repeat: true });
    this.video.seek(0);
  };

  componentWillMount() {
    this.setState({
      path: this.props.navigation.state.params.path,
      theme: this.props.navigation.state.params.theme,
    });
  }

  componentWillUnmount() {
    this.video = null;
  }

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true });
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  }

  uploadVideo() {
    const { videoUpload } = this.props;
    const data = {
      video: {
        title: this.state.description,
        description: this.state.description,
      },
      path: this.state.path,
      theme: this.state.theme._id,
    };
    videoUpload(data);
  }

  showAlert(message, type) {
    Alert.alert(type, message, [
      {
        text: 'Ok',
        onPress: () => {
          return true;
        },
      },
    ]);
  }

  onSwipeDown() {
    this.setState({ paused: !this.state.paused });
    this.props.navigation
               .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home'})
                    ]
    }));
  }

  onRecButton () {
    this.setState({ paused: !this.state.paused });
    this.props.navigation
               .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Video'})
                    ]
    }));
  }

  renderRateControl(rate) {
    const isSelected = (this.state.rate === rate);
    return (
      <TouchableOpacity onPress={() => { this.setState({ rate }); }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { loading } = this.props;
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };
    return (
        <GestureRecognizer
        onSwipeDown={() => this.onSwipeDown()}
        config={config}
        style={styles.container}>
      <View style={styles.container}>
        <View
          style={styles.fullScreen}>
          <Video
            ref={(ref: Video) => { this.video = ref; }}
          /* For ExoPlayer */
            source={{ uri: "file://51D96972-A850-4995-9E0A-8B6A2A36D939.mov" }}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            repeat={this.state.repeat}
            playInBackground={false}
          />
        </View>
        <View style={[styles.overlay, styles.topOverlaySelected, { flexDirection: 'row' }]}>
          <View style={{ flex: 1, alignItems: 'flex-start' }} >
            <TouchableHighlight underlayColor={'transparent'} style={[styles.itemSelect]}>
              <View>
                <Text style={[styles.topic, { color: this.state.theme ? this.state.theme.color : '#fff' }]}>
                  {this.state.theme ? this.state.theme.title.toUpperCase() : ''}
                </Text>
                <Text style={[styles.title, { color: this.state.theme ? this.state.theme.color : '#fff' }]}>
                  {this.state.theme ? this.state.theme.description : '' }
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <TouchableOpacity style={{ alignItems: 'flex-end', marginRight: 10 }} onPress={() => this.onRecButton()} >
                <Icon name="history" size={25} color={this.state.theme ? this.state.theme.color : '#fff'}/>
          </TouchableOpacity>
        </View>
        {
          Platform.OS === 'ios' && (
            <KeyboardAvoidingView behavior="position" style={styles.keyBoardStule}>
              <View style={[styles.overlay, styles.bottomOverlay]}>
                <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1 }}>
                  <TextInput
                    onChangeText={description => this.setState({ description })}
                    value={this.state.description}
                    style={styles.inputStyle}
                    placeholder="enter your caption (25 characters max.)"
                    placeholderTextColor="#ffffff"
                    selectionColor="#ffffff"
                    underlineColorAndroid="#ffffff"
                    maxLength={25}
                  />
                  </View>
                  <TouchableOpacity onPress={() => this.uploadVideo()} style={styles.button}>
                    <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>
                      POST
                    </Text>
                  </TouchableOpacity>
                  <KeyboardSpacer />
              </View>
            </KeyboardAvoidingView>
          ) || (
            <View style={[styles.overlay, styles.bottomOverlay]}>
              <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1, bottom: 0 }}></View>
                <TextInput
                  onChangeText={description => this.setState({ description })}
                  value={this.state.description}
                  style={styles.inputStyle}
                  placeholder="enter your caption (25 characters max.)"
                  placeholderTextColor="#ffffff"
                  selectionColor="#ffffff"
                  underlineColorAndroid="#ffffff"
                  maxLength={25}
                />
                <TouchableOpacity onPress={() => this.uploadVideo()} style={styles.button}>
                  <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>
                    POST
                  </Text>
                </TouchableOpacity>
                <KeyboardSpacer />
            </View>
          )
        }

          {loading === true
          ? <SpinnerComponent loading={loading} color={"#000"}/>
          : null}
      </View>
      </GestureRecognizer>
    );
  }
}

VideoReview.propTypes = {
  loading: PropTypes.bool.isRequired,
  videoUpload: PropTypes.func.isRequired,
  apiError: PropTypes.string.isRequired,
};

export default VideoReview;
