/**
 * @author Maria Fernanda Serna
 */

import OAuthManager from 'react-native-oauth';

const config = {
  twitter: {
    consumer_key: 'SOME_CONSUMER_KEY',
    consumer_secret: 'SOME_CONSUMER_SECRET',
  },
  facebook: {
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
  },
  google: {
    callback_url: 'com.googleusercontent.apps.1072106511320-afhil5cdd1j45d0gcbijvc4p8anu53fv:/google',
    client_id: '1072106511320-afhil5cdd1j45d0gcbijvc4p8anu53fv.apps.googleusercontent.com',
  },
};
// Create the manager
const manager = new OAuthManager('BuzzCuts');
// configure the manager
export default manager.configure(config);
