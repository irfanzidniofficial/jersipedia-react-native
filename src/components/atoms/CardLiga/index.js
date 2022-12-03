import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

const CardLiga = ({liga}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={liga.image} style={styles.logo} />
    </TouchableOpacity>
  );
};

export default CardLiga;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    padding: 10,
    borderRadius: 10,
  },
  logo: {
    width: responsiveWidth(57),
    height: responsiveHeight(70),
  },
});
