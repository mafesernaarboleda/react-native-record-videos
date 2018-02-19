import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
import { NavigationActions } from 'react-navigation';

import styles from './style';

class VideoPlayerScore extends Component {

  constructor(props) {
    super(props);
    this.onLoad = this
      .onLoad
      .bind(this);
    this.onProgress = this
      .onProgress
      .bind(this);
    this.onBuffer = this
      .onBuffer
      .bind(this);

    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'cover',
      duration: 0.0,
      currentTime: 0.0,
      controls: false,
      paused: false,
      skin: 'custom',
      ignoreSilentSwitch: null,
      isBuffering: false,
      currentVideo: {},
      currentVideoUrl: "https://s3.amazonaws.com/marcopolo-be/public/24dbceed-6294-4409-a456-1aaaa4ef8040.mp4",
      currentVideoPosition: 0,
      currentTheme: {},
    };
  }

  componentWillMount() {
    const { state } = this.props.navigation;
    const params = state.params ? state.params : '';
    this.state.currentVideo = params.video;
    this.state.currentVideoPosition = params.position;
    this.state.currentVideoUrl = params.video.url;
    this.state.currentTheme = params.theme;
  }

  onLoad(data) {
    this.setState({ duration: data.duration });
  }

  onProgress(data) {
    this.setState({ currentTime: data.currentTime });
  }

  onBuffer({ isBuffering } : { isBuffering: boolean }) {
    this.setState({ isBuffering });
  }

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  }

  onEndHandle() {
    this.setState({ paused: false });
  }

  backPress(){
    const backAction = NavigationActions.back({ key: null });
    this.props.navigation.dispatch(backAction);
  }

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <TouchableOpacity style={styles.containerVideo}>
        <StatusBar animated hidden />
        <TouchableOpacity
            style={styles.fullScreen}>
            <Video
              ref={(ref: Video) => { this.video = ref; }}
              source={{ uri: this.state.currentVideoUrl }}
              style={styles.fullScreen}
              rate={this.state.rate}
              paused={this.state.paused}
              volume={this.state.volume}
              muted={this.state.muted}
              ignoreSilentSwitch={this.state.ignoreSilentSwitch}
              resizeMode={this.state.resizeMode}
              onLoad={this.onLoad}
              onBuffer={this.onBuffer}
              onProgress={this.onProgress}
              onEnd={() => this.onEndHandle()}
              repeat={false}
            />
          </TouchableOpacity>
        <View style={[styles.overlay, styles.topOverlaySelected]}>
          <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, marginTop:16  }}>
                <Text style={[styles.topic, { color: this.state.currentTheme ? this.state.currentTheme.color : '#FFF' }]}>
                  { this.state.currentTheme && this.state.currentTheme.title ? this.state.currentTheme.title.toUpperCase() : ''}
                </Text>
                <Text style={[styles.title, { color: this.state.currentTheme ? this.state.currentTheme.color : '#FFF' }]}>
                  { this.state.currentTheme ? this.state.currentTheme.description : '' }
                </Text>
          </View>
          <TouchableOpacity style={{ marginTop: 16, marginRight: 16 }} onPress={() => this.backPress()}>
            <Text style={{ color: this.state.currentTheme ? this.state.currentTheme.color : '#FFF', fontWeight: 'bold', fontSize: 18}}> X </Text>
          </TouchableOpacity>
        </View>

        {Platform.OS === 'android' &&
          <View
            style={
            {
              position: 'absolute',
              right: 3,
              bottom: -50,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: 220,
              zIndex: 9999,
            }}
          >
            <Text style={[styles.textNumber, { bottom: 30 }]}>
              {this.state.currentVideoPosition}
            </Text>
            <Text style={{ color: '#fff', fontSize: 18, bottom: 60 }}>
              {this.state.currentVideo.likes} pts
            </Text>
          </View>
        }
        <View style={[styles.overlay, styles.bottomOverlay]}>
            <View style={{ padding: 10 }}>
              <Text style={[styles.title, { fontWeight: 'bold', color: '#fff', fontSize: 18 }]}>
                { this.state.currentVideo && this.state.currentVideo.user ? this.state.currentVideo.user.name.toUpperCase() : ''}
              </Text>
              <Text style={[styles.title, { color: '#fff', fontSize: 18 }]}>
                {this.state.currentVideo ? this.state.currentVideo.title : ''}
              </Text>
            </View>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
              <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
            </View>
            {Platform.OS === 'ios' &&
              <View style={{ position: 'absolute', zIndex: 2000, right: 5 }}>
                <Text style={[styles.textNumber, { bottom: 50 }]}>{this.state.currentVideoPosition}</Text>
                <Text style={{ color: '#fff', fontSize: 18, bottom: 70 }}>{this.state.currentVideo.likes} pts</Text>
              </View>
            }
        </View>
      </TouchableOpacity>
    );
  }
}


export default VideoPlayerScore;
