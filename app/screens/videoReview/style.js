/**
 * @author Maria Fernanda Serna
 */

import { StyleSheet, Dimensions, Platform } from 'react-native';
import Style from './../../config/stylesheet';

const { height, width } = Dimensions.get('window');

const itemSelect = Platform.select({
  android: {
    height: 60,
    width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  ios: {
    height: 40,
    width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});


const inputStyle = Platform.select({
  android: {
    alignItems: 'center',
    width: 270,
    color: '#ffffff',
    justifyContent: 'center',
    fontStyle: 'italic',
    fontSize: 13,
    fontWeight: 'bold',
  },
  ios: {
    alignItems: 'center',
    width: 270,
    color: '#ffffff',
    justifyContent: 'center',
    height: 30,
    fontStyle: 'italic',
    fontSize: 13,
    fontWeight: 'bold',
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
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'red',
    backgroundColor: 'transparent',
  },
  topic: {
    fontWeight: '100',
    fontSize: 15,
    color: 'red',
    backgroundColor: 'transparent',
  },
  itemSelect,
  typeButton: {
    padding: 5,
  },
  inputStyle,
  topOverlaySelected: {
    top: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  button: {
    borderRadius: 20,
    borderWidth: 7,
    borderColor: '#B51C25',
    backgroundColor: '#B51C25',
    width: 90,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyBoardStule: {
    width,
    bottom: 0,
    flex: 1,
  },
});

export default styles;
