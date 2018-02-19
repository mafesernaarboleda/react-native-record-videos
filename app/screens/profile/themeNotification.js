import React, { PropTypes, Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import moment from 'moment';

class ThemeNotification extends Component {

  themes = [];

  constructor(props) {
    super(props);
    this.themes = [{id: 1}, {id: 2}];
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.containerButton}>
                 <TouchableOpacity {...this.props}  style={styles.button} >
                    <Image source={{ uri: 'https://wallpaperbrowse.com/media/images/_88615878_976x1024n0037151.jpg' }} style={styles.containerImage}>
                      <View
                        style={[styles.listitem ]}>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center'}}>
                          <Text style={styles.textButton}>SPORTS</Text>
                          <Text style={[styles.textButton]}>Celtics Wooping</Text>
                          <Text style={[styles.textButton]}>22:54 left</Text>
                        </View>
                        <View style={{ flex:1, alignItems: 'flex-end', justifyContent: 'center'}}>
                          <Text style={styles.textPosition}>1</Text>
                          <Text style={styles.titleButton}>450 pts</Text>
                        </View>
                      </View>
                    </Image>
                  </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default ThemeNotification;
