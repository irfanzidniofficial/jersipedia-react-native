import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {BannerSlider, HeaderComponent} from '../../components';
export class Home extends Component {
  render() {
    return (
      <View>
        <HeaderComponent />
        <BannerSlider />
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;
