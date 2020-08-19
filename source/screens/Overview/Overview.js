import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from './OverviewStyles';
import constants from '../../constants/constants';
import Chart from '../../assets/images/chart.svg';
import IconInfo from '../../assets/images/icon-info.svg';

const Overview = () => {
  return (
    <View style={styles.view}>
      <View style={styles.headlineView}>
        <Text style={styles.headlineTitle}>Overview</Text>
        <Text style={styles.headlineSubtitle}>Covid-19 Disease</Text>
        <View style={styles.headlineTextView}>
          <Text style={styles.text}>
            Coronavirus disease is an infectious disease caused by a newly
            discovered coronavirus.
          </Text>
        </View>
      </View>
      <View>
        <Chart width={226} height={156} />
      </View>
      <View style={{marginTop: 30}}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'DMSans-Regular',
            color: 'rgba(157,30,30,0.5)',
          }}>
          Covid-19 Cases
        </Text>
        <Text
          style={{
            fontSize: 36,
            fontFamily: 'DMSans-Bold',
            color: '#ED6672',
            marginTop: 5,
            marginBottom: 8,
          }}>
          737,204
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', marginRight: 50}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'DMSans-Regular',
                color: 'rgba(157,30,30,0.5)',
              }}>
              Deaths
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'DMSans-Bold',
                color: '#1A1A1A',
                marginVertical: 10,
              }}>
              35,020
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'DMSans-Regular',
                color: 'rgba(157,30,30,0.5)',
              }}>
              Recovered
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'DMSans-Bold',
                color: '#73D7B0',
                marginVertical: 10,
              }}>
              156,263
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#ED6672',
          width: 226,
          height: 80,
          flexDirection: 'row',
          padding: 20,
          marginTop: 20,
          borderRadius: 4,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            width: 130,
            color: '#FFF',
            fontFamily: 'DMSans-Medium',
            fontSize: 14,
          }}>
          Please, stay home if you are sick
        </Text>
        <IconInfo width={20} height={20} style={{marginTop: 10}} />
      </View>
    </View>
  );
};

export default Overview;
