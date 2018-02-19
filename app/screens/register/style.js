/**
 * @author Maria Fernanda Serna
 */

import { StyleSheet, Dimensions } from 'react-native';

import Style from './../../config/stylesheet';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'transparent',
  },
  container: {
    flex: 5,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#000',
    height: 70,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerInputs: {
    width: Style.CARD_WIDTH - 25,
    marginLeft: 30,
    backgroundColor: '#ffffff',
    paddingLeft: 25,
    paddingTop: 60,
    paddingBottom: 40,
    paddingRight: 25,
    marginTop: 85,
    minHeight: height * 0.1,
  },
  topHeight: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
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
  button: {
    width: Style.CARD_WIDTH - 25,
    marginLeft: 30,
  },
  buttonNewAccount: {
    marginBottom: 10,
    backgroundColor: '#98eccf',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAccount: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  textManage: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
  },
  bottom: {
    width: Style.CARD_WIDTH - 25,
    marginLeft: 25,
    marginTop: - 5,
    backgroundColor: 'transparent',
    height: 40,
    justifyContent: 'space-around',
  },
  textBottom: {
    fontWeight: 'bold',
    color: '#6D6865',
    fontSize: 10,
  },
  title: {
    flex: 1,
    width,
    height: 70,
    marginTop: 115,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    zIndex: 2000,
  },
});

export default styles;
