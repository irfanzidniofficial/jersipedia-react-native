import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveHeight} from '../../../utils';
import {IcSearch} from '../../../assets';
import {Button, Gap} from '../../atoms';

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <View style={styles.searchSection}>
          <IcSearch />
          <TextInput placeholder="Cari jersey..." style={styles.input} />
        </View>
        <Gap width={10} />

        <Button icon="cart" padding={10} />
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(125),
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  searchSection: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.primary.regular,
  },
});
