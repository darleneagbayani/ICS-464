import {StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  outerContainer: {

  },

  mainHeader: {
    alignItems: 'center',
    padding: 10,
    paddingTop: 60,
    fontSize: 22,
  },

  descriptionStyle: {
    padding: 10,
    fontSize: 14,
  },

  question: {
    padding: 10,
    fontSize: 14,
  },

  listStyle: {
    fontSize: 12,
  },

  titleStyle: {
    fontSize: 16,
  },

  mainDescription: {
    fontSize: 16,
    padding: 12,
  }
});

export default styles
