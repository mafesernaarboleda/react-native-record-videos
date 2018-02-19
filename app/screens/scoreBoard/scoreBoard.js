/**
 * @author Maria Fernanda Serna
 */

import React, { Component, PropTypes } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './style';
import SpinnerComponent from './../../components/spinner';

class ScoreBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videosByTheme: [],
      theme: {},
    };
  }

  componentWillMount() {
    const { state } = this.props.navigation;
    const params = state.params ? state.params : '';
    this.state.theme = params.theme;
    if (params.theme.videos) {
      this.state.videosByTheme = params.theme.videos.sort((a, b) => { return a.likes < b.likes });
    }
  }

  onSwipeDown() {
    this.backPress();
  }

  backPress() {
    this.props.navigation
               .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home'})
                    ]
                  }));
  }

  handleVideo(video, position) {
    this
      .props
      .navigation
      .navigate('VideoPlayerScore', { video, position, theme: this.state.theme});
  }

  render() {
    const { loading } = this.props;
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    if (this.state.videosByTheme.length > 0) {
      return (
        <GestureRecognizer
        onSwipeDown={(state) => this.onSwipeDown(state)}
        config={config}
        style={styles.container}>
          <View style={styles.container}>
            <StatusBar animated hidden/>
          <View style={styles.header}>
          <Text
            style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: this.state.theme.color ? this.state.theme.color : '#fff',
            marginBottom: 8
          }}>{this.state.theme.title ? this.state.theme.title.toUpperCase() : ''}</Text>
          <Text
            style={{
            fontWeight: 'bold',
            fontSize: 23,
            marginBottom: 8,
            color: this.state.theme.color ? this.state.theme.color : '#fff',
          }}>{this.state.theme.description ? this.state.theme.description : ''}</Text>
          <Text
            style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#FFF'
          }}>SCOREBOARD</Text>
        </View>
        <View style={styles.topHeight}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.containerButton}>
              { this.state.videosByTheme.map((videoTheme, index) => {
                  return (
                    <TouchableOpacity style={styles.button} key={videoTheme.id} onPress={() => this.handleVideo(videoTheme, index + 1)}>
                      <Image
                        source={{ uri: videoTheme.url }}
                        style={styles.containerImage}>
                        <View
                          style={[
                          styles.listitem, {
                            backgroundColor: this.state.theme.color ? this.state.theme.color : '#fff',
                          }
                        ]}>
                          <Text style={styles.titleButton}>{videoTheme
                              .user
                              .name
                              .toUpperCase()}</Text>
                          <View
                            style={{
                            flex: 1,
                            alignItems: 'flex-end'
                          }}>
                            <Text style={styles.textNumber}>{index + 1}</Text>
                          </View>
                          <Text style={styles.titleButton}>{videoTheme.likes} pts</Text>
                        </View>
                      </Image>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </ScrollView>
        </View>
          { loading
            ? <SpinnerComponent loading={loading} color={"#000"}/>
            : null}
      </View>
        </GestureRecognizer>
        );
      } else {
        return (
          <TouchableOpacity style={styles.containerNoVideo} onPress={() => this.backPress()}>
            <View style={[styles.emptyVideo]}>
              <Text style={styles.textNextVideo}>no videos for topic,</Text>
              <Text style={styles.textNextVideo}>come back to home tap now</Text>
            </View>
          </TouchableOpacity>
        );
      }
  }
}

ScoreBoard.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default ScoreBoard;
