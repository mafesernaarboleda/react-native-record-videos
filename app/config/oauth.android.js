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
    callback_url: 'http://localhost/google',
    client_id: '998199710985-fgqtpar3ajpg1hinaf1hnpuin2mbf7tj.apps.googleusercontent.com',
    client_secret: '1PAYUd62Pftx6HgC5rtkWJ0I',
  },
};
// Create the manager
const manager = new OAuthManager('BuzzCuts');
// configure the manager
export default manager.configure(config);
