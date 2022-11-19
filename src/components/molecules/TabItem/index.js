import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IcHome,
  IcHomeActive,
  IcJersey,
  IcJerseyActive,
  IcProfile,
  IcProfileActive,
} from '../../../assets';
import {colors} from '../../../utils';

const TabItem = ({index, isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IcHomeActive /> : <IcHome />;
    }
    if (label === 'Jersey') {
      return isFocused ? <IcJerseyActive /> : <IcJersey />;
    }
    if (label === 'Profile') {
      return isFocused ? <IcProfileActive /> : <IcProfile />;
    }
    return <IcHome />;
  };

  return (
    <TouchableOpacity
      key={index}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    color: isFocused ? colors.white : colors.secondary,
    fontSize: 11,
    marginTop: 4,
  }),
});
