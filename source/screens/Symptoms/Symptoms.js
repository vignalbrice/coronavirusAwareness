import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './SymptomsStyles';
import constants from '../../constants/constants';
import Illustration from '../../assets/images/illustration.svg';

const frameWidth = constants.width;
const columnWidth = frameWidth / 3;

const Symptoms = () => {
  const [btnGroup, setBtnGroup] = React.useState([
    'Fever',
    'Runny Nose',
    'Cough',
    'Sore Throat',
    'Headache',
    'Cough',
    'Fatigue',
    'Dyspnoea',
  ]);
  const [btnActive, setBtnActive] = React.useState('');
  const onPressSymptoms = (value) => {
    if (btnActive.includes(value)) {
      setBtnActive(btnActive.filter((b) => b !== value));
    } else {
      setBtnActive([...btnActive, value]);
    }
  };
  return (
    // Try setting `justifyContent` to `center`.
    // Try setting `flexDirection` to `row`.
    <View style={styles.view}>
      <View style={styles.headlineView}>
        <Text style={styles.headlineTitle}>Symptoms</Text>
        <Text style={styles.headlineSubtitle}>Covid-19 Disease</Text>
        <View style={styles.headlineTextView}>
          <Text style={styles.text}>
            People may be sick with the virus for 1 to 14 days developing any
            symptoms.
          </Text>
        </View>
      </View>
      <View>
        <Illustration />
      </View>
      <View style={styles.symptomsView}>
        <Text style={styles.adviceTitle}>What symptoms do you experience?</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: frameWidth / 1.7,
          }}>
          {btnGroup.map((btn, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={{
                  padding: 12,
                  backgroundColor: btnActive.includes(btn)
                    ? '#ED6672'
                    : '#FFE8E9',
                  borderRadius: 4,
                  margin: 5,
                }}
                onPress={() => onPressSymptoms(btn)}>
                <Text
                  style={{
                    color: btnActive.includes(btn) ? '#FFF' : '#9D1E1E',
                    fontFamily: 'DM-Sans-Medium',
                    fontSize: 12,
                  }}>
                  {btn}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Symptoms;
