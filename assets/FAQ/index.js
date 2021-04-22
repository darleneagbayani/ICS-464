import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { Divider, List } from 'react-native-paper';

function FAQ() {
  return (
      <ScrollView>
      <View style={styles.outerContainer}>
        <Text style={styles.mainHeader}>Frequently Asked Questions</Text>
        <Text style={styles.mainDescription}>Get your answers to the most commonly asked question. Note: Answers are updated frequently!</Text>
        <Divider/>
        {/*question number 1 linkToInfo: https://www.cdc.gov/coronavirus/2019-ncov/faq.html#Basics */}
        <List.Accordion theme={{ colors: { primary: 'tomato'}}} style={styles.question} title='What is COVID-19?'>
          <List.Item
              style={styles.listStyle}
              title='COVID-19'
              description={<Text>COVID-19 is a new disease, caused by a novel (or new) coronavirus that has not previously been seen in humans. Because it is a new virus, scientists are learning more each day. Although most people who have COVID-19 have mild symptoms, COVID-19 can also cause severe illness and even death. Some groups, including older adults and people who have certain underlying medical conditions, are at increased risk of severe illness.</Text>}
              descriptionStyle={styles.descriptionStyle}
              descriptionNumberOfLines={100}
              titleStyle={styles.titleStyle}
              left={props => <List.Icon {...props} icon="equal" />}/>
        </List.Accordion>
        {/*question number 2 linkToInfo: https://www.avert.org/coronavirus/faqs?gclid=EAIaIQobChMIhe-W3NyR8AIVVh6tBh2iHw_2EAAYAiAAEgLUvfD_BwE */}
        <List.Accordion theme={{ colors: { primary: 'tomato'}}} style={styles.question} title='What are the common symptoms?'>
          <List.Item
              style={styles.listStyle}
              title='Common Symptoms'
              description={<Text>The main symptoms of COVID-19 are fever, dry cough, tiredness, and loss of taste or smell.

Some people experience other flu-like symptoms, including: nasal congestion, conjunctivitis (red eyes), sore throat, headache, muscle or joint pain, skin rash, nausea or vomiting, diarrhoea, chills or dizziness. These symptoms can be managed at home.

Not everyone who has COVID-19 will have symptoms. You can still pass COVID-19 on even if you don’t have symptoms. That’s why it’s important to follow advice to stop the virus from spreading.</Text>}
              descriptionStyle={styles.descriptionStyle}
              descriptionNumberOfLines={100}
              titleStyle={styles.titleStyle}
              left={props => <List.Icon {...props} icon="equal" />}/>
        </List.Accordion>
        {/*question 3 linkToInfo: https://www.google.com/search?q=how+to+protect+yourself+from+covid&rlz=1C1VDKB_enUS938US938&oq=how+to+protect+yourself+from+covid&aqs=chrome..69i57j0i131i433j0l8.6136j0j7&sourceid=chrome&ie=UTF-8 */}
        <List.Accordion theme={{ colors: { primary: 'tomato'}}} style={styles.question} title='How can I protect myself?'>
          <List.Item
              style={styles.listStyle}
              title='Protection'
              description={

                  <Text>To help prevent the spread of COVID-19:
                    Get a COVID-19 vaccine when it’s available to you.
                    Wear a mask to protect yourself and others and stop the spread of COVID-19.
                    Stay at least 6 feet (about 2 arm lengths) from others who don’t live with you.
                    Avoid crowds and poorly ventilated spaces. The more people you are in contact with, the more likely you are to be exposed to COVID-19.
                    Clean your hands often, either with soap and water for 20 seconds or a hand sanitizer that contains at least 60% alcohol.
                    Avoid close contact with people who are sick.
                    Cover your cough or sneeze with a tissue, then throw the tissue in the trash.
                    Clean and disinfect frequently touched objects and surfaces daily.
                    Monitor your health daily.</Text>
              }
              descriptionStyle={styles.descriptionStyle}
              descriptionNumberOfLines={100}
              titleStyle={styles.titleStyle}
              left={props => <List.Icon {...props} icon="equal" />}/>
        </List.Accordion>
        {/*question 4 linkToInfo: https://www.avert.org/coronavirus/faqs?gclid=EAIaIQobChMIhe-W3NyR8AIVVh6tBh2iHw_2EAAYAiAAEgLUvfD_BwE*/}
        <List.Accordion theme={{ colors: { primary: 'tomato'}}} style={styles.question} title='When do symptoms start to appear?'>
          <List.Item
              style={styles.listStyle}
              title='Symptom development'
              description={<Text>'The average time for symptoms of COVID-19 to develop is five to six days, but it can take up to 14 days for people to show symptoms.'</Text>}
              descriptionStyle={styles.descriptionStyle}
              descriptionNumberOfLines={100}
              titleStyle={styles.titleStyle}
              left={props => <List.Icon {...props} icon="equal" />}/>
        </List.Accordion>
        {/*question 5 linkToInfo: https://www.avert.org/coronavirus/faqs?gclid=EAIaIQobChMIhe-W3NyR8AIVVh6tBh2iHw_2EAAYAiAAEgLUvfD_BwE */}
        <List.Accordion theme={{ colors: { primary: 'tomato'}}} style={styles.question} title='What should I do if I think I have COVID-19?'>
          <List.Item
              style={styles.listStyle}
              title='COVID-19'
              description={<Text>If you think you have COVID-19, stay at home and self-isolate – even if your symptoms are mild.

                Call your local health service for advice. They will give you advice and tell you what to do, including if you need to take a COVID-19 test and how to do it. Do not visit your clinic as you could pass the virus onto others.

                The people you live with will also need to stay home for at least 14 days from when you first developed symptoms. Avoid close contact with others in your household while you’re ill. Stay one metre apart, or in another room if possible. If you live with someone who’s more vulnerable, try to arrange for them to stay elsewhere. You can also wear a medical mask to reduce the risk of infection.

                Do not leave your home for any reason, including going to work or school while you are self-isolating. Ask friends or neighbours to bring what you need, and leave it outside. Do not invite other people to come to your home to help look after you, as you will be putting them at risk of getting the virus.

                If you have difficulty breathing and/or persistent pain in your chest, call your local health service immediately.

                Most people will recover from COVID-19 by themselves, without the need for hospital treatment.</Text>}
              descriptionStyle={styles.descriptionStyle}
              descriptionNumberOfLines={100}
              titleStyle={styles.titleStyle}
              left={props => <List.Icon {...props} icon="equal" />}/>
        </List.Accordion>
        {/*question 6 linkToInfo: https://www.avert.org/coronavirus/faqs?gclid=EAIaIQobChMIhe-W3NyR8AIVVh6tBh2iHw_2EAAYAiAAEgLUvfD_BwE */}
        <List.Accordion theme={{ colors: { primary: 'tomato'}}} style={styles.question} title='Who is more vulnerable to COVID-19?'>
          <List.Item
              style={styles.listStyle}
              title='COVID-19'
              description={<Text>Anyone can get COVID-19 and become seriously ill. The likelihood becoming severely ill is higher for people over 60 and those with certain underlying health issues, including high blood pressure, heart or lung problems, diabetes, obesity or cancer.

                People with a weakened immune system – for example if they are having chemotherapy treatment for cancer, or have a low CD4 count as a result of HIV – are also at a higher risk of serious illness.</Text>}
              descriptionStyle={styles.descriptionStyle}
              descriptionNumberOfLines={100}
              titleStyle={styles.titleStyle}
              left={props => <List.Icon {...props} icon="equal" />}/>
        </List.Accordion>
        {/*question 7 linkToInfo: ^^same as above*/}
        <List.Accordion theme={{ colors: { primary: 'tomato'}}} style={styles.question} title='Is COVID-19 passed on more easily indoors?'>
          <List.Item
              style={styles.listStyle}
              title='COVID-19'
              description={<Text>There is evidence that COVID-19 is passed on more easily in indoor, crowded and poorly ventilated places where people are closer together for long periods of time. This includes restaurants, gyms, nightclubs, offices and places of worship.</Text>}
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

export default FAQ;
