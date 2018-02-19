import React, { PropTypes, Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
  Animated,
  Keyboard,
} from 'react-native';
import Video from 'react-native-video';
import { BlurView } from 'react-native-blur';
import GestureRecognizer from 'react-native-swipe-gestures';
import { NavigationActions } from 'react-navigation';
import SpinnerComponent from './../../components/spinner';
import styles from './style';

const iconLike = require('./../../images/icons-buzz/icon_like.png');
const iconDisLike = require('./../../images/icons-buzz/icon_dislike.png');

class VideoPlayer extends Component {

  videos = [];

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
      counter: 5,
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
      currentTheme: { videos: null },
      currentVideoUrl: 'https://s3.amazonaws.com/marcopolo-be/public/8bf8d459-068a-48b9-9e21-674a2d8bc910.mp4',
      lengthVideoPlayed: 0,
      lengthThemes: 0,
      showNextTheme: false,
      viewRef: null,
      loading: true,
    };
    this.keyboardHeight = new Animated.Value(0);
  }

  componentWillMount() {
    const { videosList } = this.props;
    const { state } = this.props.navigation;
    const params = state.params ? state.params : '';
    this.setState({ currentTheme: params.theme });
    videosList(params.theme._id);
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.successVideoList) {
      this.state.loading = nextProps.loading;
      this.videos = await nextProps.videosListById;
      if (this.videos.length > 0){
        this.setState({ currentVideoUrl: this.videos[0].url });
        this.setState({ currentVideo: this.videos[0] });
      }
    }
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
    if (this.state.lengthVideoPlayed !== this.videos.length) {
      this.autoNextVideo();
    } else {
      this.backPress();
    }
  }

  handlerVote(vote) {
    const { voteVideo } = this.props;
    const data = {
      vote,
      idTheme: this.state.currentTheme._id,
      idVideo: this.state.currentVideo.id,
    };

    if (vote === 'likes') {
      const likes = (this.state.currentVideo.likes) + 1;
      this.state.currentVideo.likes = likes;
    } else {
      const dislikes = (this.state.currentVideo.dislikes) + 1;
      this.state.currentVideo.dislikes = dislikes;
    }
    this.setState({ lengthVideoPlayed: this.state.lengthVideoPlayed + 1 });
    voteVideo(data);
    if (this.state.lengthVideoPlayed !== this.videos.length) {
      this.setState({ paused: true });
      this.setState({ showResultVideo: true });
      this.autoNextVideo();
    } else {
      this.backPress();
    }
  }

  autoNextVideo() {
    this.setState({ counter: 5 });
    const intervalId = setInterval(() => {
      this.setState({ counter: this.state.counter - 1 });
      if (this.state.counter === 0) {
        this.nextVideoHandle();
      }
    }, 1000);
    this.state.intervalId = intervalId;
  }

  nextVideoHandle() {
    clearInterval(this.state.intervalId);
    if (this.videos) {
      if (this.state.lengthVideoPlayed !== this.videos.length) {
        const currentVideo = this.videos[this.state.lengthVideoPlayed];
        this.setState({ currentVideo });
        this.state.currentVideoUrl = currentVideo.url;
        this.setState({ paused: false });
        this.setState({ showResultVideo: false });
        this.state.showNextTheme = false;
      } else {
        this.backPress();
      }
    } else {
      this.backPress();
    }
  }

  onSwipeDown() {
    this.backPress();
  }

  keyboardWillShow = () => {
    this.setState({ showHeader: false });
  };

  keyboardWillHide = () => {
    this.setState({ showHeader: true });
  };

  backPress() {
    this.setState({ paused: true });
    this.props.navigation
               .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [
                     NavigationActions.navigate({ routeName: 'Home' })
                    ],
                  }));
  }

  videoRecorder(){
    this.props.navigation
    .dispatch(NavigationActions.reset(
      {
         index: 0,
         actions: [
          NavigationActions.navigate({ routeName: 'Video', params: { theme: this.state.currentTheme } })],
       }));
  }

  renderVideoByTheme = () => {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

      return (
        <View>
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
        repeat={true}
      />
    {this.state.showResultVideo &&
      <TouchableOpacity
        style={[styles.overlay, styles.fullScreenBlur]}
        onPress={() => this.nextVideoHandle()}
      >
        {Platform.OS === 'ios' &&
          <BlurView
            style={[styles.absolute, styles.fullScreenBlur]}
            viewRef={this.state.viewRef}
            blurType="light"
            blurAmount={10}
          />
        }
        <TouchableOpacity style={[styles.overlay, styles.topOverlaySelected]}>
          <TouchableOpacity style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, marginTop:16 }} >
            <Text style={[styles.topic, { color: this.state.currentTheme ? this.state.currentTheme.color : '#FFF' }]}>
              { this.state.currentTheme ? this.state.currentTheme.title.toUpperCase() : ''}
            </Text>
            <Text style={[styles.title, {color: this.state.currentTheme ? this.state.currentTheme.color : '#FFF' }]}>
              { this.state.currentTheme ? this.state.currentTheme.description : '' }
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <View style={[styles.fullScreenBlur]}>
          {
            // Cuando hay mas videos y mas categorias
            this.state.lengthVideoPlayed !== this.videos.length && (
              <View style={[styles.nextVideo]} onPress={() => this.nextVideoHandle()}>
                <Text style={styles.secondsNextVideo}>{this.state.counter}</Text>
                <Text style={styles.textNextVideo}>for next video or tap now</Text>
              </View>
            )
          }
        </View>
        <View style={[styles.overlay, styles.bottomLikes, { bottom: 90 }]}>
          <View style={[styles.captureButton, { backgroundColor: '#FFEDEB', width: 70, height: 70, justifyContent: 'center' }]}>
            <Text style={{ color: '#FFF', fontSize: 14, fontWeight: 'bold', textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 } }}>
              {this.state.currentVideo ? this.state.currentVideo.dislikes : 0 }
            </Text>
            <Image style={{ width: 25, height: 25 }} source={iconDisLike} resizeMode="contain" />
          </View>
          <View style={[styles.captureButton, { backgroundColor: '#F2FCE3', width: 70, height: 70, justifyContent: 'center' }]}>
            <Text style={{ color: '#FFF', fontSize: 14, fontWeight: 'bold', textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 } }}>
              {this.state.currentVideo ? this.state.currentVideo.likes : 0}
            </Text>
            <Image style={{ width: 25, height: 25 }} source={iconLike} resizeMode="contain" />
          </View>
        </View>

      </TouchableOpacity>
    }

    {
      // pasado 2 segundos muestra los likes
      this.state.currentTime > 2 && !this.state.showResultVideo && (
        <View style={[styles.overlay, styles.bottomLikes, { bottom: 90 }]}>
          <TouchableOpacity
            style={[styles.captureButton, { backgroundColor: '#FFEDEB', width: 70, height: 70, justifyContent: 'center' }]}
            onPress={() => this.handlerVote('dislikes')}
          >
            <Image style={{width:50, height:50}} source={iconDisLike} resizeMode="contain"/>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.captureButton, { backgroundColor: '#F2FCE3', width: 70, height: 70, justifyContent: 'center' }]}
            onPress={() => this.handlerVote('likes')}
          >
            <Image style={{width:50, height:50}} source={iconLike} resizeMode="contain"/>
          </TouchableOpacity>
        </View>
      )
    }

    {!this.state.showResultVideo &&
      <TouchableOpacity style={[styles.overlay, styles.topOverlaySelected]}>
        <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, marginTop:16  }}>
          <Text style={[styles.topic, { color: this.state.currentTheme ? this.state.currentTheme.color : '#FFF' }]}>
            { this.state.currentTheme && this.state.currentTheme.title ? this.state.currentTheme.title.toUpperCase() : ''}
          </Text>
          <Text style={[styles.title, { color: this.state.currentTheme ? this.state.currentTheme.color : '#FFF' }]}>
            { this.state.currentTheme ? this.state.currentTheme.description : '' }
          </Text>
        </View>
      </TouchableOpacity>
    }

      <View style={[styles.overlay, styles.bottomOverlay]}>
        <View style={{ padding: 10 }}>
          <Text style={[styles.title, { fontWeight: 'bold', color: '#fff', fontSize: 18 }]}>
            { this.state.currentVideo && this.state.currentVideo.user ? this.state.currentVideo.user.alias.toUpperCase() : ''}
          </Text>
          <Text style={[styles.title, { color: '#fff', fontSize: 18 }]}>
            {this.state.currentVideo ? this.state.currentVideo.title : ''}
          </Text>
        </View>
        <View style={styles.progress}>
          <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
          <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
        </View>
        </View>

      </View>
    );
  }


  render() {
    const { loading } = this.props;
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };
    if (this.state.loading) {
      return (
        <GestureRecognizer
          onSwipeDown={(state) => this.onSwipeDown(state)}
          config={config}
          style={styles.container}>
          <View style={styles.container}>
            <StatusBar animated hidden />
            {this.state.currentTheme.videos ?
            <SpinnerComponent loading={loading} color={"#fff"}/>:
            <View style={[styles.emptyVideo]}>
               <TouchableOpacity onPress={() => this.videoRecorder()} style={styles.button}>
                 <Text style={styles.textNextVideo}>No videos posted, be the first!</Text>
               </TouchableOpacity>
            </View>
            }
          </View>
        </GestureRecognizer>
      );
      } else {
            return (
              <GestureRecognizer
                onSwipeDown={(state) => this.onSwipeDown(state)}
                config={config}
                style={styles.container}>
                <View style={styles.container}>
                  <StatusBar animated hidden />
                  {this.videos.length > 0 ?
                    this.renderVideoByTheme() :
                    <View style={[styles.emptyVideo]}>
                      <Text style={styles.textNextVideo}>no videos for topic</Text>
                    </View>
                  }
                </View>
              </GestureRecognizer>
            );
      }
  }
}

VideoPlayer.propTypes = {
  loading: PropTypes.bool.isRequired,
  videosList: PropTypes.func.isRequired,
  voteVideo: PropTypes.func.isRequired,
};

export default VideoPlayer;
