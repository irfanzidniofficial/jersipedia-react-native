import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Ilustrasi, Logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000);
  });
  return (
    <View style={styles.pages}>
      <Logo />
      <View style={styles.ilustrasi}>
        <Ilustrasi />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  ilustrasi: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
