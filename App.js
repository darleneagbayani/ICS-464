import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './assets/Navigation';
import {Platform} from ‘react-native’; 

import {Platform} from ‘react-native’;componentWillMount(){
   // get expo push token
  const token = await Expo.Notifications.getExpoPushTokenAsync();fetch('https://exp.host/--/api/v2/push/send', {       
         method: 'POST', 
         headers: {
               Accept: 'application/json',  
              'Content-Type': 'application/json', 
              'accept-encoding': 'gzip, deflate',   
              'host': 'exp.host'      
          }, 
        body: JSON.stringify({                 
              to: token,                        
              title: 'New Notification',                  
              body: 'The notification worked!',             
              priority: "high",            
              sound:"default",              
              channelId:"default",   
                  }),        
      }).then((response) => response.json())   
               .then((responseJson) => {  })
                      .catch((error) => { console.log(error) });
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
