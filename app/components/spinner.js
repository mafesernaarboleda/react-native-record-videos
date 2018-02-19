import React from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
    opacity: 0.4,
  },
  centering: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SpinnerComponent = ({loading, size, color}) => (
  <View style={styles.overlay}>
    <View style={styles.centering}>
      <Spinner isVisible={loading} size={30} type={'Circle'} color={color}/>
    </View>
  </View>
);

export default SpinnerComponent;
