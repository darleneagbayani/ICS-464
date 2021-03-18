import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './assets/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}
