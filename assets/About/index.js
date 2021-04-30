// Adapted from: https://github.com/oblador/react-native-collapsible/blob/master/Example/App.js

import React, { Component } from 'react';
import { Switch, ScrollView, Text, View, TouchableOpacity, } from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

const CONTENT = [
  {
    title: 'Purpose',
    content: 'test',
  },
  {
    title: 'Features',
    content: 'test',
  },
  {
    title: 'Third',
    content: 'test',
  }
];
export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>About the App</Text>
        <ScrollView contentContainerStyle={{ paddingTop: 18 }}>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
}