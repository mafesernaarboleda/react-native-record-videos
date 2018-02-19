/**
 * @author Maria Fernanda Serna
 */

import React, { PropTypes, Component } from 'react';
import { Text, Image, StatusBar, TouchableOpacity, View, ScrollView,
  TouchableHighlight,
} from 'react-native';
import Camera from 'react-native-camera';
import { NavigationActions } from 'react-navigation';
import GestureRecognizer from 'react-native-swipe-gestures';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import ProgressBar from './../../components/progressBar';

const imgRecord = require('./../../images/icons-buzz/button_record.png');
const imgStopRecord = require('./../../images/icons-buzz/stop.png');
const imgCamFront = require('./../../images/icons/ic_camera_front_white.png');
const imgCamBack = require('./../../images/icons/ic_camera_rear_white.png');
const imgFlashAuto = require('./../../images/icons/ic_flash_auto_white.png');
const imgFlashOn = require('./../../images/icons/ic_flash_on_white.png');
const imgFlashOff = require('./../../images/icons/ic_flash_off_white.png');

class VideoRecorder extends Component {

  themes = [];

  constructor(props) {
    super(props);
    this.camera = null;
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.front,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
      progress: 0,
      isRecording: false,
      imgData: null,
      showCategories: false,
      categorySelected: this.themes[0],
      positionCategory: 0,
    };
  }

  componentDidMount() {
    this.setState({ progress: 0 });
    const { state } = this.props.navigation;
    const params = state.params ? state.params : '';
    if (params.theme){
      this.state.categorySelected = params.theme;
    }
    const { themesTodayList } = this.props;
    themesTodayList();
  }

  async componentWillReceiveProps(nextProps) {
    const { state } = this.props.navigation;
    const params = state.params ? state.params : '';
    if (nextProps.successThemesTodayList) {
      this.themes = await nextProps.themesToday;
      if (params.theme) {
        this.state.categorySelected = params.theme;
      } else {
          if (this.state.positionCategory >= 0 && this.state.positionCategory < this.themes.length) {
            this.setState({ categorySelected: this.themes[this.state.positionCategory] });
          }
      }
    }
  }

  changeCategory = (position) => {
    if (position >= 0 && position < this.themes.length) {
      this.state.positionCategory = position;
      this.setState({ categorySelected: this.themes[this.state.positionCategory] });
    }
  }

  takePicture = () => {
    if (this.camera) {
      this
        .camera
        .capture()
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }
  }

  startRecording = () => {
    const { navigate } = this.props.navigation;
    try {
      if (this.camera) {
        this.camera.capture({ mode: Camera.constants.CaptureMode.video })
          .then((data) => {
            console.log(data);
            this.setState({ imgData: data.path });
            navigate('Review', { path: data.path, theme: this.state.categorySelected });
          })
          .catch(err => console.error(err));
        this.setState({ isRecording: true });
        this.setTime();
      }
    } catch (error) {
      console.error('err cathc', error);
    }
  }

  setTime = () => {
    const intervarId = setInterval(() => {
      this.setState(state => ({ progress: state.progress + 0.03458 }));
    }, 1000);

    setTimeout(() => {
      this.stopRecording();
      clearInterval(intervarId);
    }, 30000);
  }

  stopRecording = () => {
    this.setState({ progress: 1 });
    if (this.camera) {
      this.setState({ isRecording: false });
      this.camera.stopCapture();
    }
  }

  switchType = () => {
    let newType;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      newType = front;
    } else if (this.state.camera.type === front) {
      newType = back;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
      },
    });
  }

  get typeIcon() {
    let icon;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      icon = imgCamBack;
    } else if (this.state.camera.type === front) {
      icon = imgCamFront;
    }

    return icon;
  }

  switchFlash = () => {
    let newFlashMode;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      newFlashMode = on;
    } else if (this.state.camera.flashMode === on) {
      newFlashMode = off;
    } else if (this.state.camera.flashMode === off) {
      newFlashMode = auto;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: newFlashMode,
      },
    });
  }

  get flashIcon() {
    let icon;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      icon = imgFlashAuto;
    } else if (this.state.camera.flashMode === on) {
      icon = imgFlashOn;
    } else if (this.state.camera.flashMode === off) {
      icon = imgFlashOff;
    }

    return icon;
  }

  changeSelect() {
    this.setState({ showCategories: true });
  }

  selectCategory(item) {
    this.setState({ categorySelected: item });
    this.setState({ showCategories: false });
  }

  onSwipeDown(gestureState) {
    this.props.navigation
               .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home'})
                    ]
                  }));
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };
    return (
      <View style={[styles.container]}>
        <StatusBar animated hidden />
      <GestureRecognizer
        onSwipeDown={(state) => this.onSwipeDown(state)}
        config={config}
        style={styles.container}>
        <Camera
          ref={(cam) => { this.camera = cam; }}
          style={styles.preview}
          aspect={this.state.camera.aspect}
          captureTarget={this.state.camera.captureTarget}
          captureQuality={Camera.constants.CaptureQuality.medium}
          captureAudio={true}
          type={this.state.camera.type}
          flashMode={this.state.camera.flashMode}
          onFocusChanged={() => {}}
          onZoomChanged={() => {}}
          defaultTouchToFocus
          mirrorImage={false}
        />
      </GestureRecognizer>
        {!this.state.showCategories ? (
          <View style={[styles.overlay, styles.topOverlaySelected]}>
              <View underlayColor={'transparent'} style={[styles.itemSelect]}>
                <View style={{ flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between'}}>
                  <View style={{ flexDirection: 'row'}}>
                  <TouchableHighlight underlayColor={'transparent'} onPress={() => this.changeCategory(this.state.positionCategory - 1)}>
                  <Icon style={{ marginTop : 12 }} name="chevron-left" size={28} color={ this.state.categorySelected ? this.state.categorySelected.color : '#fff' }/>
                  </TouchableHighlight>
                  <View style={{ marginLeft : 10 }}>
                  <Text onPress={() => this.changeSelect()} style={[styles.topic, { color: this.state.categorySelected ? this.state.categorySelected.color : '#fff' }]}>
                    {this.state.categorySelected ? this.state.categorySelected.title.toUpperCase() : ''}
                  </Text>
                  <Text onPress={() => this.changeSelect()} style={[styles.title, { color: this.state.categorySelected ? this.state.categorySelected.color : '#fff' }]}>
                    {this.state.categorySelected ? this.state.categorySelected.description : '' }
                  </Text>
                  </View>
                  </View>
                  <TouchableHighlight style={{ alignSelf: 'center', marginRight: 32, marginBottom: 5 }} underlayColor={'transparent'} onPress={() => this.changeCategory(this.state.positionCategory + 1)}>
                    <Icon name="chevron-right" size={28} color={ this.state.categorySelected ? this.state.categorySelected.color : '#fff' }/>
                  </TouchableHighlight>
                </View>
              </View>
          </View>
        ) : (
          <View style={[styles.overlay, styles.topOverlay]}>
            <ScrollView style={[styles.containerScroll]} showsHorizontalScrollIndicator={false}>
              {
                this.themes.map(item =>
                  (
                    <TouchableHighlight
                      underlayColor={'transparent'}
                      key={item._id}
                      style={[styles.item]}
                      onPress={() => this.selectCategory(item)}
                    >
                      <View>
                        <Text style={[styles.topic, { color: item.color }]}>{item.title.toUpperCase()}</Text>
                        <Text style={[styles.title, { color: item.color, marginBottom: 10 }]}>{item.description}</Text>
                      </View>
                    </TouchableHighlight>
                  ),
                )
              }
            </ScrollView>
          </View>
        )}
        <View style={styles.progressStyle}>
          <ProgressBar
            row
            progress={this.state.progress}
            duration={500}
          />
        </View>
        <View style={[styles.overlay, styles.bottomOverlay]}>
          <View>
            <Text style={{ top: 0, marginBottom: 40, color: '#fff' }}>0s</Text>
          </View>
          {!this.state.isRecording &&
            <TouchableOpacity style={styles.captureButton} onPress={this.startRecording}>
              <Image source={imgRecord} resizeMode="contain" style={{ width: 100, height: 20 }} />
            </TouchableOpacity>
          ||
            <TouchableOpacity style={styles.captureButton} onPress={this.stopRecording}>
              <Image source={imgStopRecord} resizeMode="contain" style={{
                width: 100,
                height: 20,
              }}/>
            </TouchableOpacity>
          }
          <View >
            <Text style={{ top: 0, marginBottom:40, color: '#fff' }}>30s</Text>
          </View>
        </View>

      </View>
    );
  }
}

VideoRecorder.propTypes = {
  themesTodayList: PropTypes.func.isRequired,
};

export default VideoRecorder;
