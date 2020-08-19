import {StyleSheet} from 'react-native';
import constants from '../../constants/constants';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginLeft: constants.width / 8,
  },
  headlineView: {
    marginTop: constants.height / 8.5,
  },
  firstAdviceView: {
    marginTop: constants.height / 30,
  },
  secondAdviceView: {
    marginTop: constants.height / 20,
  },
  headlineTitle: {
    fontSize: 36,
    fontFamily: 'DMSans-Bold',
    color: '#1A1A1A',
  },
  headlineSubtitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: 12,
    color: '#ED6672',
  },
  headlineTextView: {
    marginVertical: 20,
    width: constants.width / 1.8,
  },
  text: {
    fontFamily: 'DMSans-Regular',
    fontSize: 14,
    color: '#9D1E1E',
  },
  adviceTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
    color: '#1A1A1A',
    marginTop: 25,
    marginBottom: 8,
  },
  adviceWashHandText: {
    fontFamily: 'DMSans-Regular',
    fontSize: 14,
    color: '#9D1E1E',
    width: constants.width / 1.75,
  },
});

export default styles;
