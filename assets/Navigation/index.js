import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import  Home  from '../Home';
import  About from '../About';
import Testing  from '../Testing';
import  FAQ  from '../FAQ';

  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'Testing') {
            iconName = focused ? 'ios-location' : 'ios-location-outline';
          } else if (route.name === 'FAQ') {
            iconName = focused ? 'md-help-circle' : 'md-help-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Testing" component={Testing} />
      <Tab.Screen name="FAQ" component={FAQ} />
    </Tab.Navigator>
    );
  }
  
  export default MyTabs;



