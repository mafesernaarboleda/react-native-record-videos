/**
 * @author Maria Fernanda Serna
 */

import {StyleSheet, Dimensions, Platform} from 'react-native';

import Style from './../../config/stylesheet';

const {width, height} = Dimensions.get('window');

const deviceWidth = Dimensions
  .get('window')
  .width;
const deviceHeight = Dimensions
  .get('window')
  .height;

const progressBar = Platform.select({
  android: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  ios: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden'
  }
});

const innerProgressCompleted = Platform.select({
  android: {
    height: 10,
    backgroundColor: '#B51C25'
  },
  ios: {
    height: 20,
    backgroundColor: '#B51C25'
  }
});

const innerProgressRemaining = Platform.select({
  android: {
    height: 10,
    backgroundColor: 'transparent'
  },
  ios: {
    height: 20,
    backgroundColor: 'transparent'
  }
});

const bottomOverlay = Platform.select({
  android: {
    bottom: 0,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  ios: {
    bottom: 0,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 80
  }
});

const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'transparent'
  },
  containerVideo: {
    flex: 1,
    flexDirection: 'column',
    height,
  },
  container: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#454545'
  },
  topHeight: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  header: {
    backgroundColor: '#454545',
    width,
    padding: 25,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 13,
    lineHeight: Style.FONT_SIZE,
    color: Style.LETS_GO,
    backgroundColor: 'transparent'
  },
  scrollView: {
    height: deviceHeight - 70,
    width
  },
  fullScreen: {
    height,
    width,
  },
  bottomOverlay,
  containerButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width,
  },
  containerImage: {
    width: (deviceWidth - 25) / 2,
    height: (deviceHeight + 90) / 3
  },
  titleButton: {
    fontSize: 20,
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
    opacity: 1,
    zIndex: -1,
    alignItems: 'flex-end'
  },
  textNumber: {
    fontSize: 120,
    color: '#fff',
    fontWeight: 'bold',
    opacity: 1,
    zIndex: -1
  },
  listitem: {
    opacity: 0.8,
    width: (deviceWidth - 25) / 2,
    height: (deviceHeight + 90) / 3,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  button: {
    width: (deviceWidth - 25) / 2,
    height: (deviceHeight + 90) / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    margin: 3,
    elevation: 6,
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    opacity: 1,
    shadowRadius: 2,
    shadowOpacity: 0.7
  },
  overlay: {
    position: 'absolute',
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlaySelected: {
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'transparent'
  },
  topic: {
    fontWeight: '100',
    fontSize: 15,
    color: 'red',
    backgroundColor: 'rgba(0,0,0,0.0)'
  },
  title: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  emptyVideo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  containerNoVideo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textNextVideo: {
    color: '#FFFFFF',
    fontStyle: 'italic',
  },
  progress: progressBar,
  innerProgressCompleted,
  innerProgressRemaining,
});

export default styles;
