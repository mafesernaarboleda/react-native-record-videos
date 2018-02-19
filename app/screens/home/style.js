/**
 * @author Maria Fernanda Serna
 */

import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const deviceWidth = Dimensions
  .get('window')
  .width;
const deviceHeight = Dimensions
  .get('window')
  .height;


const logoContainer = Platform.select({
  android: {
    flex: 1,
    alignItems: 'center',
    height: 50,
  },
  ios: {
    flex: 1,
    alignItems: 'center',
  },
});

const logo = Platform.select({
  android: {
    width: 100,
    height: 40,
    marginTop: 6,
    marginRight: 80,
  },
  ios: {
    width: 120,
    height: 60,
    marginTop: 35,
    marginRight: 80,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#FFFFFF',
    height: 45,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2000,
  },
  topHeight: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollView: {
    height: deviceHeight,
    width: deviceWidth - 2,
  },
  containerTabs: {
    flex: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFF',
  },
  tabbar: {
    backgroundColor: '#FFFFFF',
  },
  indicator: {
    backgroundColor: '#DCC1A2',
    height: 5,
  },
  icon: {
    marginRight: 10,
    alignItems: 'flex-start',
    width: 20,
    height: 20,
  },
  nestedButtonView: {
    marginRight: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
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
    shadowColor: '#B1B1B1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    opacity: 1,
    shadowRadius: 2,
    shadowOpacity: 0.7,
  },
  text: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  containerButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: deviceWidth - 1,
    marginHorizontal: 1,
  },
  themeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: deviceWidth - 1,
    marginHorizontal: 1,
  },
  overlay: {
    position: 'absolute',
    padding: 5,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    flex: 1,
    backgroundColor: 'rgba(159, 134, 104, 0.6)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  containerImage: {
    width: (deviceWidth - 25) / 2,
    height: (deviceHeight + 90) / 3,
  },
  listitem: {
    opacity: 0.8,
    width: (deviceWidth - 25) / 2,
    height: (deviceHeight + 90) / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer,
  logo,
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    opacity: 1,
    zIndex: -1,
  },
  buttonRecord: {
      borderRadius: 50,
      borderColor: '#B51C25',
      backgroundColor: '#B51C25',
      width:70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 3,
  }
});

export default styles;
