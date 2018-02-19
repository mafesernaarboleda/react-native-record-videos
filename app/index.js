/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  StackNavigator,
} from 'react-navigation';

import SignInContainer from './screens/signIn';
import SettingsContainer from './screens/settings';
import RegisterContainer from './screens/register';
import HomeContainer from './screens/home';
import VideoRecorderContainer from './screens/videoRecorder';
import VideoReviewContainer from './screens/videoReview';
import VideoPlayerContainer from './screens/videoPlayer';
import ScoreBoardContainer from './screens/scoreBoard';
import VideoPlayerScore from './screens/scoreBoard/videoPlayerScore';
import ProfileContainer from './screens/profile';
import TermsPage from './screens/settings/termsPage';
import PrivacyPage from './screens/settings/privacyPage';


const App = StackNavigator({
  SignIn: {
    screen: SignInContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  Register: {
    screen: RegisterContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  Settings: {
    screen: SettingsContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  TermsPage: {
    screen: TermsPage,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  PrivacyPage: {
    screen: PrivacyPage,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  Home: {
    screen: HomeContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  Video: {
    screen: VideoRecorderContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  Review: {
    screen: VideoReviewContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  VideoPlayer: {
    screen: VideoPlayerContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  ScoreBoard: {
    screen: ScoreBoardContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  VideoPlayerScore: {
    screen: VideoPlayerScore,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  Profile: {
    screen: ProfileContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
}, {
  transitionConfig: () => ({
    screenInterpolator: sceneProps => {
      const {
        layout,
        position,
        scene,
      } = sceneProps;
      const {
        index,
      } = scene;
      const translateX = position.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0],
      });
      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
        outputRange: [0, 1, 1, 0.3, 0],
      });
      return {
        opacity,
        transform: [{
          translateX,
        }],
      };
    },
  })
});

export default App;
