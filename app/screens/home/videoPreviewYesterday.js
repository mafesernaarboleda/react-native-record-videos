import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import styles from './style';

class VideoPreviewYesterday extends Component {

  themes = [];

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'yesterday',
    };
  }

  componentWillMount() {
    const { themesYesterdayList, date, index } = this.props;
    this.state.activeTab = 'yesterday';
    themesYesterdayList();
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.successThemesYesterdayList) {
      this.themes = await nextProps.themesYesterday;
    }
  }

  getTime(time) {
    const diffTime = moment(moment.utc(time).format('MM/DD/YYYY')).diff(moment());
    const durationTime = moment.duration(diffTime);
    return durationTime.hours() > 1 ? durationTime.hours() + 'HR LEFT' : (durationTime.minutes() > 0 ? durationTime.minutes() + 'MIN LEFT' : 'ENDED');
  }

  handlerScoreBoard = (theme) => {
    this.props.navigation.navigate('ScoreBoard', { theme });
  };

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.themeContainer}>
          {this
            .themes
            .map((theme) => {
                return (
                  <TouchableOpacity {...this.props}  style={styles.button} key={theme._id}
                    onPress={() => this.handlerScoreBoard(theme)}
                  >
                    <Image source={{ uri: theme.image }} style={styles.containerImage}>
                      <View
                        style={[styles.listitem, { backgroundColor: theme.color }]}>
                        <Text style={styles.textButton}>{theme.title.toUpperCase()}</Text>
                        <Text style={[styles.textButton]}>{theme.description}</Text>
                        <Text style={[styles.textButton]}>{this.getTime(theme.endDate)}</Text>
                      </View>
                    </Image>
                  </TouchableOpacity>
                );
            })}
        </View>
        <View style={{ height: 80 }}></View>
      </ScrollView>
    );
  }
}

export default VideoPreviewYesterday;
