import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 12,
      backgroundColor: 'transparent',
      paddingTop: Constants.statusBarHeight,
    },
    title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '300',
      marginBottom: 20,
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
      borderRadius: 10
    }
  });
  export default styles;