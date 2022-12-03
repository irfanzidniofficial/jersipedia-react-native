import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {Slider1, Slider2} from '../../../assets';
import {SliderBox} from 'react-native-image-slider-box';

export class BannerSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [Slider1, Slider2],
    };
  }
  render() {
    return (
      <View>
        <SliderBox images={this.state.images} autoplay circleloop />
      </View>
    );
  }
}

export default BannerSlider;