import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import  Home  from '../Home';
import  About from '../About';
import Testing  from '../Testing';
import  FAQ  from '../FAQ';

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </DrawerContentScrollView>
    );
  }

const DrawerNav = createDrawerNavigator();
  
  function DrawerNavHeader() {
    return (
      <DrawerNav.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <DrawerNav.Screen name="Home" component={Home}/>
        <DrawerNav.Screen name="About" component={About} />
        <DrawerNav.Screen name="Testing Locations" component={Testing} />
        <DrawerNav.Screen name="FAQ" component={FAQ} />
      </DrawerNav.Navigator>
    );
  }
  
  export default DrawerNavHeader;



