import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.pages}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
