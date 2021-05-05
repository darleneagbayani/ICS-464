import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { Divider, List } from 'react-native-paper';

function About() {
  return (
      <ScrollView>
      <View style={styles.outerContainer}>
        <Text style={styles.mainHeader}>About the App</Text>
        <Text style={styles.mainDescription}>Find information about trending news updates, COVID-19 case updates,
        testing locations, and answers to frequently asked questions.
        </Text>
        <Divider/>
        {/*question number 1 linkToInfo: https://www.cdc.gov/coronavirus/2019-ncov/faq.html#Basics */}
        <List.Accordion theme={{ colors: { primary: 'tomato'}}} style={styles.question} title='Trending news and case updates'>
          <List.Item
              style={styles.listStyle}
              title='Home'
              description={<Text>The home tab features live news updates with links to their 
                relevant articles. As new case reports are released, the app will update the information under "new cases"
                to reflect this.
              </Text>}
              descriptionStyle={styles.descriptionStyle}
              descriptionNumberOfLines={100}
              titleStyle={styles.titleStyle}
              left={props => <List.Icon {...props} icon="equal" />}/>
        </List.Accordion>
        {/*question number 2 linkToInfo: https://www.avert.org/coronavirus/faqs?gclid=EAIaIQobChMIhe-W3NyR8AIVVh6tBh2iHw_2EAAYAiAAEgLUvfD_BwE */}
        <List.Accordion theme={{ colors: { primary: 'tomato'}}} style={styles.question} title='Where can I find testing centers?'>
          <List.Item
              style={styles.listStyle}
              title='Testing Locations'
              description={<Text>
                Find information for testing centers such as locations, times, and appointment scheduling.
              </Text>}
              descriptionStyle={styles.descriptionStyle}
              descriptionNumberOfLines={100}
              titleStyle={styles.titleStyle}
              left={props => <List.Icon {...props} icon="equal" />}/>
        </List.Accordion>
        {/*question 3 linkToInfo: https://www.google.com/search?q=how+to+protect+yourself+from+covid&rlz=1C1VDKB_enUS938US938&oq=how+to+protect+yourself+from+covid&aqs=chrome..69i57j0i131i433j0l8.6136j0j7&sourceid=chrome&ie=UTF-8 */}
        <List.Accordion theme={{ colors: { primary: 'tomato'}}} style={styles.question} title='Answers to frequently asked questions'>
          <List.Item
              style={styles.listStyle}
              title='FAQ'
              description={

                  <Text>
                    Find answers to frequently asked questions without spending time to search for them.
                  </Text>
              }
              descriptionStyle={styles.descriptionStyle}
              descriptionNumberOfLines={100}
              titleStyle={styles.titleStyle}
              left={props => <List.Icon {...props} icon="equal" />}/>
        </List.Accordion>
        {/*question 4 linkToInfo: https://www.avert.org/coronavirus/faqs?gclid=EAIaIQobChMIhe-W3NyR8AIVVh6tBh2iHw_2EAAYAiAAEgLUvfD_BwE*/}
        <List.Accordion theme={{ colors: { primary: 'tomato'}}} style={styles.question} title='About the app'>
          <List.Item
              style={styles.listStyle}
              title='CoronUH'
              description={<Text>
                With information for COVID-19 constantly changing, it's difficult to find up-to-date and relevant
                sources. Many people are trying to remain informed about the current state of COVID-19 in Hawaii,
                but they simply do not have the time to constantly search for the latest news updates. CoronUH is
                an all in one user convenience application that allows individuals to remain informed with the latest
                information, find testing locations, and get answers to FAQ material, without searching for any of it.
              </Text>}
              descriptionStyle={styles.descriptionStyle}
              descriptionNumberOfLines={100}
              titleStyle={styles.titleStyle}
              left={props => <List.Icon {...props} icon="equal" />}/>
        </List.Accordion>
        <Divider/>
      </View>
        <View>
          {/*<Text>ending title</Text>*/}
        </View>
      </ScrollView>
  );
}

export default About;
