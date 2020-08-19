import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const constants = {
  shape: require('../assets/images/shape.png'),
  width: width,
  height: height,
};

export default constants;
