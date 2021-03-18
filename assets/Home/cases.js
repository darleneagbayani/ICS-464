import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { Text, Linking } from 'react-native';
import styles from './styles';

const Cases = () => (
    <ScrollView>
    <Card style={styles.card}>
        <Card.Cover style={styles.cardIndividual} source={{ uri: 'https://www.khon2.com/wp-content/uploads/sites/8/2020/07/Coronavirus-Update.jpg?w=1280' }} />
        <Text style={styles.descriptionTitle}>69 New COVID Cases Reported in Hawaii; No Additional Deaths</Text>
        <Text style={styles.descriptionCaption}>
        <Text>Of the new cases, 38 were on Oahu, 23 on Maui, and four on the Big Island. Three residents were diagnosed out-of-state... </Text>
        <Text style={{color: 'tomato'}} onPress={() => { Linking.openURL('https://www.hawaiinewsnow.com/2021/03/17/new-covid-cases-reported-hawaii-no-additional-deaths/'); }}>
        Read More</Text>
        </Text>
    </Card>
    </ScrollView>
);

export default Cases;