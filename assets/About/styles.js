import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 12,
      backgroundColor: 'transparent',
      paddingTop: 0,
    },
    title: {
      alignItems: 'center',
      padding: 10,
      paddingTop: 60,
      fontSize: 22,
    },
    header: {
      backgroundColor: '#ffffff',
      padding: 10,
    },
    headerText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
    },
    content: {
      padding: 20,
      backgroundColor: '#ffffff'
    },
    active: {
      backgroundColor: '#ffffff', // The content that drops down after press
      borderWidth: 2,
      borderRadius: 10
    },
    inactive: { // The dropdown box itself
      backgroundColor: 'white',
      borderWidth: 2,
      borderRadius: 2
    }
  });
  export default styles;