import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {BannerSlider, HeaderComponent, ListLiga} from '../../components';
import {colors, fonts} from '../../utils';
import {dummyLigas} from '../../data';
export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ligas: dummyLigas,
    };
  }
  render() {
    const {ligas} = this.state;
    return (
      <View style={styles.page}>
        <HeaderComponent />
        <BannerSlider />
        <View style={styles.pilihLiga}>
          <Text style={styles.label}>Pilih Liga</Text>
          <ListLiga ligas={ligas} />
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  pilihLiga: {marginHorizontal: 30, marginTop: 10},
  label: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.primary,
  },
});
