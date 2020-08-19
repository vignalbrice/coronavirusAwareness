import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
} from '@react-navigation/native';
import constants from '../constants/constants';
import IconProfile from '../assets/images/profile.svg';
import IconSearch from '../assets/images/icon-search.svg';
import IconMenu from '../assets/images/icon-menu.svg';

const {width, height} = Dimensions.get('window');

export default function CustomTabView({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) {
  const {state, navigation, descriptors} = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  });
  const {routes, index} = state;
  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.tabContainer}>
          <View style={{position: 'absolute', top: height / 18}}>
            <TouchableOpacity>
              <IconMenu style={{width: 20, height: 20}} />
            </TouchableOpacity>
            <TouchableOpacity style={{position: 'absolute', top: height / 13}}>
              <IconSearch style={{width: 18, height: 19}} />
            </TouchableOpacity>
          </View>
          {state.routes.map((route, tabIndex) => {
            const color =
              tabIndex === index
                ? 'rgba(237,102,114, 1)'
                : 'rgba(237,102,114, 0.5)';
            const fontSize = tabIndex === index ? 18 : 16;
            const fontWeight = tabIndex === index ? '700' : '500';
            return (
              <TouchableOpacity
                key={route.key}
                onPress={() => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!event.defaultPrevented) {
                    navigation.dispatch({
                      ...TabActions.jumpTo(route.name),
                      target: state.key,
                    });
                  }
                }}>
                <Text style={[{color, fontSize, fontWeight}, styles.tabTitle]}>
                  {route.name}
                </Text>
                {tabIndex === index && (
                  <View
                    style={{
                      backgroundColor: 'rgba(237,102,114, 1)',
                      width: 6,
                      height: 6,
                      borderRadius: 30,
                      position: 'absolute',
                      left: 70,
                      bottom: 50,
                    }}
                  />
                )}
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity style={{position: 'absolute', bottom: height / 18}}>
            <IconProfile style={styles.profilePicture} />
          </TouchableOpacity>
        </View>
        <View style={[{flex: 1}, contentStyle]}>
          {descriptors[state.routes[state.index].key].render()}
        </View>
      </SafeAreaView>
    </NavigationHelpersContext.Provider>
  );
}

const styles = StyleSheet.create({
  header: {position: 'absolute', top: 0},
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    margin: 5,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    paddingHorizontal: 20,
  },
  tabTitle: {
    fontFamily: 'DMSans-Medium',
    transform: [{rotate: '-90deg'}],
    width: 100,
    marginTop: 50,
    marginBottom: 50,
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: width / 5,
    backgroundColor: '#FCEEEF',
  },
  profilePicture: {
    width: 34,
    height: 34,
  },
});
export const createMyNavigator = createNavigatorFactory(CustomTabView);
