import * as React from 'react';
import {createMyNavigator} from './CustomTabView';
import {routes} from './Routes';

const Sidebar = createMyNavigator();

const MainNavigator = () => {
  return (
    <Sidebar.Navigator initialRouteName="Loading">
      {routes.map((route) => (
        <Sidebar.Screen
          name={route.name}
          component={route.component}
          key={route.key}
          options={{
            headerShown: route.header,
          }}
        />
      ))}
    </Sidebar.Navigator>
  );
};
export default MainNavigator;
