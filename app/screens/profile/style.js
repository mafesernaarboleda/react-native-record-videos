/**
 * @author Maria Fernanda Serna
 */

import { StyleSheet, Dimensions } from 'react-native';

import Style from './../../config/stylesheet';

const { width, height } = Dimensions.get('window');

const deviceWidth = Dimensions
  .get('window')
  .width;
const deviceHeight = Dimensions
  .get('window')
  .height;

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
  logo: {
    width: 120,
    height: 60,
  },
  viewUser: {
    backgroundColor: '#fff',
    width: Style.CARD_WIDTH - 18,
    height: deviceHeight / 3,
    marginLeft: 30,
    marginTop: 15,
    marginBottom: 10,
    shadowColor: '#4F473D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    opacity: 5,
    shadowRadius: 2,
    shadowOpacity: 0.7,
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
  text: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  textName: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  indicator: {
    backgroundColor: '#070707',
    height: 5,
  },
  tabbar: {
    backgroundColor: 'transparent',
  },
  containerTabs: {
    width,
    flex: 1,
    borderColor: '#FFFFFF',
    backgroundColor: 'transparent',
  },
  button: {
    width: deviceWidth - 18,
    height: (deviceHeight + 10) / 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    margin: 6,
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
  scrollView: {
    height: deviceHeight - 70,
    width: deviceWidth - 3,
  },
  containerButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: deviceWidth - 18,
    marginHorizontal: 10,
  },
  containerImage: {
    width: deviceWidth - 18,
    height: (deviceHeight + 10) / 4,
  },
  listitem: {
    opacity: 0.8,
    width: deviceWidth - 18,
    height: (deviceHeight + 10) / 4,
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    opacity: 1,
    zIndex: -1,
  },
  user: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  themes:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Style.CARD_WIDTH - 18,
    backgroundColor: '#fff',
    height: deviceHeight / 5,
    padding: 20,
  },
  cols: {
    borderColor: '#000',
    borderBottomWidth: 1,
  },
  rows: {
    borderColor: '#000',
    borderRightWidth: 1,
  },
  textGrid: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textQuantity:{
    color: '#000000',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textTheme:{
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
  },
  titleButton: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    opacity: 1,
    zIndex: -1,
  },
  textPosition: {
    fontSize: 120,
    color: '#fff',
    fontWeight: 'bold',
    opacity: 1,
    zIndex: -1,
  },
});

export default styles;
