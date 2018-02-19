/**
 * @author Maria Fernanda Serna
 */

import {StyleSheet, Dimensions, Platform} from 'react-native';

import Style from './../../config/stylesheet';

const {width, height} = Dimensions.get('window');

const containerInputs = Platform.select({
  android: {
      width: Style.CARD_WIDTH - 25,
      marginLeft: 30,
      backgroundColor: '#ffffff',
      minHeight: height * 0.8,
      paddingLeft: 25,
      paddingTop: 20,
      paddingBottom: 40,
      paddingRight: 25,
      marginTop: 40,
  },
  ios: {
      width: Style.CARD_WIDTH - 25,
      marginLeft: 30,
      backgroundColor: '#ffffff',
      height: Style.CARD_HEIGHT + 330,
      paddingLeft: 25,
      paddingTop: 20,
      paddingBottom: 40,
      paddingRight: 25,
      marginTop: 40,
  },
});

const button = Platform.select({
  android: {
      width: Style.CARD_WIDTH - 25,
      marginLeft: 30,
      marginTop: -20,
  },
  ios: {
    width: Style.CARD_WIDTH - 25,
    marginLeft: 30,
    marginTop: -10,
  },
});

const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'transparent',
  },
  container: {
    flex: 5,
    flexDirection: 'column',
  },
  topHeight: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#000',
    height: 70,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerHelp: {
    flex: 1,
    marginRight: 10,
    alignItems: 'flex-end',
  },
  containerInputs,
  text: {
    fontSize: 13,
    lineHeight: Style.FONT_SIZE,
    color: Style.LETS_GO,
    backgroundColor: 'transparent',
  },
  inputStyle: {
    alignItems: 'center',
    width: Style.CARD_WIDTH - 105,
    justifyContent: 'center',
    marginBottom: 10,
  },
  button,
  buttonNewAccount: {
    backgroundColor: '#98eccf',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    backgroundColor: 'transparent',
    height: 40,
    width: Style.CARD_WIDTH - 25,
    marginLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textBottom: {
    fontWeight: 'bold',
    color: '#6D6865',
    fontSize: 10,
    textDecorationLine: 'underline',
  },
  logo: {
    width: 120,
    height: 60,
  },
  title: {
    flex: 1,
    width,
    height: 70,
    marginTop: 10,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    zIndex: 2000,
  },
  containerText: {
    width: Style.CARD_WIDTH - 25,
    marginLeft: 30,
    backgroundColor: 'transparent',
    height,
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 15,
    marginTop: 40,
  },
  titleTextPage: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  titlePage: {
    backgroundColor: 'transparent',
    width,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

});

export default styles;
