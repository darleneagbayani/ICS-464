import * as React from 'react';
import { View, Text } from 'react-native';
<<<<<<< HEAD
import styles from './styles';
import Collapsible from 'react-collapsible';

function About() {
    return (
      <View style={styles.header}>
        <Collapsible trigger="test">
          <Text style={styles.text1}>About the App</Text>
          <Text style={styles.text2}>Purpose</Text>
          <Text style={styles.text3}>Purpose goes here</Text>
          <Text style={styles.text2}>Features</Text>
          <Text style={styles.text3}>Find trending news updates and available testing sites
          conveniently packed into one lightweight application. Stay alert
          with notifications about reported cases in the State of Hawaii.
        </Text>
        <Text style={styles.text2}>Helping Hawaii</Text>
        <Text style={styles.text3}>Stuff goes here</Text>
        </Collapsible>
        <Collapsible trigger="test2">
          <Text style={styles.text1}>Yay it works</Text>
          <Collapsible trigger="now we just need">
            <Text>some styling</Text>
          </Collapsible>
        </Collapsible>
=======

function About() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About Screen</Text>
>>>>>>> parent of d168525... About Page Mock up
      </View>
    );
  }

  export default About;