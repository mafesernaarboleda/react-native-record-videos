/**
 * @author Maria Fernanda Serna
 */

import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';


const { height, width } = Dimensions.get('window');

const progressBar = Platform.select({
  android: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  ios: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

const bottomOverlay = Platform.select({
  android: {
    bottom: 0,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  ios: {
    bottom: 0,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 80,
  },
});

const innerProgressCompleted = Platform.select({
  android: {
    height: 10,
    backgroundColor: '#B51C25',
  },
  ios: {
    height: 20,
    backgroundColor: '#B51C25',
  },
});

const innerProgressRemaining = Platform.select({
  android: {
    height: 10,
    backgroundColor: 'transparent',
  },
  ios: {
    height: 20,
    backgroundColor: 'transparent',
  },
});

const nextVideo = Platform.select({
  android: {
    flexDirection: 'column',
    top: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ios: {
    flexDirection: 'column',
    top: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    height,
    width,
  },
  fullScreenBlur: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    height,
    width,
  },
  overlay: {
    position: 'absolute',
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlaySelected: {
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  bottomOverlay,
  captureButton: {
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 40,
    margin: 5,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    opacity: 4,
    shadowRadius: 2,
    shadowOpacity: 0.7,
    alignItems: 'center',
  },
  topic: {
    fontWeight: '100',
    fontSize: 15,
    color: 'red',
    backgroundColor: 'rgba(0,0,0,0.0)',
  },
  nextVideo,
  emptyVideo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  nextCategory: {
    flexDirection: 'column',
    top: 190,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textNextVideo: {
    color: '#FFFFFF',
    fontStyle: 'italic',
  },
  secondsNextVideo: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 35,
  },
  bottomLikes: {
    bottom: 0,
    flex: 2,
    backgroundColor: 'rgba(0,0,0,0.0)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
  },
  progress: progressBar,
  innerProgressCompleted,
  innerProgressRemaining,
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  title: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  button: {
    width: 220,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B51C25',
    borderColor: '#B51C25',
    borderRadius: 20,
    borderWidth: 7,
  },
});

export default styles;
