/**
 * @author Maria Fernanda Serna
 */

import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

const topOverlay = Platform.select({
  android: {
    top: 0,
    height: 220,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  ios: {
    top: 0,
    height: 220,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});

const topOverlaySelected = Platform.select({
  android: {
    top: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  ios: {
    top: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
});

const itemSelect = Platform.select({
  android: {
    height: 60,
    width,
  },
  ios: {
    height: 40,
    width,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScroll: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 1,
    zIndex: 2000,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.0)',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay,
  topOverlaySelected,
  item: {
    height: 65,
    width: width - 56,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 10,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: '#848484',
  },
  itemSelect,
  bottomOverlay: {
    bottom: 0,
    flex: 1,
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'transparent',
    borderRadius: 40,
  },
  typeButton: {
    padding: 5,
  },
  flashButton: {
    padding: 5,
  },
  buttonsSpace: {
    width: 10,
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
  progressStyle: {
    position: 'absolute',
    bottom: 74,
    zIndex: 2000,
    width,
    flexDirection: 'row',
  },
});

export default styles;
