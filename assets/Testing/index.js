import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { Text, Linking } from 'react-native';
import styles from './styles';

function Testing() {
    return (
        <ScrollView>
            <Card style={styles.card}>
                <Card.Cover style={styles.cardIndividual} source={{ uri: 'https://media.bizj.us/view/img/8632152/tourism-021916*1200xx2100-1181-0-110.jpg' }} />
                <Text style={styles.descriptionTitle}>Hawaii Sees Busiest Travel Days Since Start of Pandemic as Spring Break Kicks Off</Text>
                <Text style={styles.descriptionCaption}>
                <Text>More tourists traveled to Hawaii on Saturday than the state has seen in a single day since the start of the coronavirus pandemic... </Text>
                <Text style={{color: 'tomato'}} onPress={() => { Linking.openURL('https://www.usatoday.com/story/travel/destinations/2021/03/16/hawaii-spring-break-travel-busiest-day-since-start-covid-pandemic/4723308001/'); }}>
                Read More</Text>
                </Text>

                <Card.Cover style={styles.cardIndividual} source={{ uri: 'https://d1l18ops95qbzp.cloudfront.net/wp-content/2020/12/15122002/COVID19-vaccination-Dr-Lester-Morehead-MD-Ruby-Takahashi-APRN-v2-1024x689.jpg' }} />
                <Text style={styles.descriptionTitle}>Hawaii Advances to Phase 1c, Here’s Where You Can Get Your COVID-19 Vaccine</Text>
                <Text style={styles.descriptionCaption}>
                <Text>The state has expanded COVID-19 vaccine eligibility to qualified individuals in phase 1C. Here is everything you need to know about how and where to get a COVID-19 vaccine.... </Text>
                <Text style={{color: 'tomato'}} onPress={() => { Linking.openURL('https://www.khon2.com/coronavirus/list-hawaii-advances-to-phase-1c-heres-where-you-can-get-your-covid-19-vaccine/'); }}>
                Read More</Text>
                </Text>
            </Card>
        </ScrollView>
    );
  }

  export default Testing;