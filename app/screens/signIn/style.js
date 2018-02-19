/**
 * @author Maria Fernanda Serna
 */

import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import Style from './../../config/stylesheet';

const { width, height } = Dimensions.get('window');

const containerHelp = Platform.select({
  android: {
    marginRight: 10,
    alignItems: 'flex-end',
  },
  ios: {
    flex: 1,
    marginRight: 10,
    alignItems: 'flex-end',
  },
});

const header = Platform.select({
  android: {
    backgroundColor: 'transparent',
    height: 60,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ios: {
    backgroundColor: 'transparent',
    height: 70,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const buttonNewAccount = Platform.select({
  android: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#98eccf',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ios: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#98eccf',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const logo = Platform.select({
  android: {
    marginBottom: 20,
    width: Style.CARD_WIDTH - 25,
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ios: {
    marginBottom: 40,
    width: Style.CARD_WIDTH - 25,
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height,
  },
  topHeight: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: (height - 100),
  },
  containerHelp,
  helpText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  header,
  containerInputs: {
    width: Style.CARD_WIDTH - 25,
    marginLeft: 30,
    backgroundColor: '#ffffff',
    padding: 25,
    height: Style.CARD_HEIGHT,
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
  buttonLets: {
    backgroundColor: Style.LETS_GO,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonNewAccount,
  logo,
});

export default styles;
