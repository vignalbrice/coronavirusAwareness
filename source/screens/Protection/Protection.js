import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from './ProtectionStyles';
import IconCaugh from '../../assets/images/icon-caugh.svg';
import IconWashHands from '../../assets/images/icon-wash-hands.svg';

const Protection = () => {
  return (
    <View style={styles.view}>
      <View style={styles.headlineView}>
        <Text style={styles.headlineTitle}>Protection</Text>
        <Text style={styles.headlineSubtitle}>Covid-19 Disease</Text>
        <View style={styles.headlineTextView}>
          <Text style={styles.text}>
            There’s currently no vaccine to prevent this disease. You can
            protect yourself and help prevent spreading the virus if you :
          </Text>
        </View>
      </View>
      <View style={styles.firstAdviceView}>
        <IconCaugh style={{width: 92, height: 84}} />
        <Text style={styles.adviceTitle}>Cover you caugh</Text>
        <Text style={styles.text}>
          Cover your nose and mouth with a disposable tissue
        </Text>
      </View>
      <View style={styles.secondAdviceView}>
        <IconWashHands style={{width: 92, height: 84}} />
        <Text style={styles.adviceTitle}>Wash you hands</Text>
        <Text style={styles.adviceWashHandText}>
          With soap & water or alcohol- based hand rub
        </Text>
      </View>
    </View>
  );
};

export default Protection;
