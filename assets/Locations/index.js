import * as React from 'react';
import Testing from './testing';
import Vaccine from './vaccine';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles';

const Tab = createMaterialTopTabNavigator();
function Locations() {
    return (
    <Tab.Navigator 
      style={styles.tabContainer}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        indicatorStyle: '#ffffff',
        indicatorStyle: {
          borderBottomColor: 'tomato',
          borderBottomWidth: 2,
        },
      labelStyle: {
        paddingTop: 35,
        fontSize: 12,
        },
      }}>
      <Tab.Screen name="Vaccine" component={Vaccine} />
      <Tab.Screen name="Testing" component={Testing} />
    </Tab.Navigator>
    );
  }

export default Locations;