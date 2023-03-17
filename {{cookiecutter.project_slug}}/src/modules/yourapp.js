import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import CustomIcon from '../utils/CutomIcon';

const YourApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to your brand new app!</Text>
      <FontAwesomeIcon name="pied-piper-alt" size={30} color="#010" />
      <CustomIcon name={'bomb'} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
  },
  text: {
    fontSize: 20,
  },
});

export const YourAppModule = {
  name: 'YourApp',
  path: './',
  package: '@modules',
  value: {
    title: 'Your App',
    navigator: YourApp,
  },
};
