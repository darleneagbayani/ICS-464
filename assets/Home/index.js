import * as React from 'react';
import { View } from 'react-native';
import Trending from './trending';
import Cases from './cases';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles';

const Tab = createMaterialTopTabNavigator();
function Home() {
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
      <Tab.Screen name="Trending News" component={Trending} />
      <Tab.Screen name="New Cases" component={Cases} />
    </Tab.Navigator>
    );
  }

export default Home;
