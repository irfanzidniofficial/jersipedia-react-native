import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Gap = ({height, width}) => {
  return (
    <View>
      <Text style={{height: height, width: width}}></Text>
    </View>
  );
};

export default Gap;

const styles = StyleSheet.create({});
