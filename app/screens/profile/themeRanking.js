import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import moment from 'moment';

class ThemeRanking extends Component {

  themesRankingsList = [];

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'yesterday',
    };
  }

  componentDidMount() {
    const { themesRankings } = this.props;
    this.state.activeTab = 'yesterday';
    themesRankings();
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.successThemesRankings) {
      this.themesRankingsList = await nextProps.themesRankingsList;
    }
  }

  getTimeAgo(time) {
    return moment(moment.utc(time).format('MM/DD/YYYY')).fromNow();
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.containerButton}>
        {this
            .themesRankingsList
            .map((themeRanking) => {
                return (
                  <TouchableOpacity {...this.props} style={styles.button}>
                    <Image source={{ uri: themeRanking.theme.image }} style={styles.containerImage}>
                    <View style={[styles.listitem, { backgroundColor: themeRanking.theme.color }]}>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center'}}>
                          <Text style={styles.textButton}>{themeRanking.theme.title.toUpperCase()}</Text>
                          <Text style={[styles.textButton]}>{themeRanking.theme.description}</Text>
                          <Text style={[styles.textButton]}>{this.getTimeAgo(themeRanking.theme.endDate)}</Text>
                        </View>
                        <View style={{ flex:1, alignItems: 'flex-end', justifyContent: 'center'}}>
                          <Text style={styles.textPosition}>{themeRanking.position}</Text>
                          <Text style={styles.titleButton}>{themeRanking.score} pts</Text>
                        </View>
                      </View>
                    </Image>
                  </TouchableOpacity>
                );
            })}
        </View>
      </ScrollView>
    );
  }
}

export default ThemeRanking;
