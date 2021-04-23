import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { Text, Linking, View } from 'react-native';
import styles from './styles';
import Queens from '../images/queens.jpeg';
import Straub from '../images/straub.jpeg';

function Testing() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Testing Locations</Text>
        <ScrollView>
            <Card style={styles.card}>
                <Card.Cover style={styles.cardIndividual} source={Queens} />
                <Text style={styles.descriptionTitle}>The Queen's Medical Center</Text>
                <Text style={styles.descriptionCaption}>
                <Text>Address: 1301 Punchbowl St, Honolulu, HI 96813</Text>
                {"\n"}
                <Text>Phone Number: (808) 691-1000</Text>
                {"\n"}
                <Text style={{color: 'tomato'}} 
                onPress={() => { Linking.openURL('https://www.queens.org/the-queens-medical-center/queens-medical-center'); }}>
                Website</Text>
                </Text>

                <Card.Cover style={styles.cardIndividual} source={Straub} />
                <Text style={styles.descriptionTitle}>Straub Medical Center</Text>
                <Text style={styles.descriptionCaption}>
                <Text>Address: 888 S King St, Honolulu, HI 96813</Text>
                {"\n"}
                <Text>Phone Number: (808) 522-4000</Text>
                {"\n"}
                <Text style={{color: 'tomato'}} 
                onPress={() => { Linking.openURL('https://www.hawaiipacifichealth.org/straub/'); }}>
                Website</Text>
                </Text>
            </Card>
        </ScrollView>
        </View>
    );
  }

  export default Testing;