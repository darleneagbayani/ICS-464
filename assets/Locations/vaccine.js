import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { Text, Linking } from 'react-native';
import styles from './styles';
import Times from '../images/times.jpeg';
import Longs from '../images/longs.jpeg';

function Vaccine() {
    return (
        <ScrollView>
            <Card style={styles.card}>
                <Card.Cover style={styles.cardIndividual} source={Times} />
                <Text style={styles.descriptionTitle}>Kahala TIMES Super Market</Text>
                <Text style={styles.descriptionCaption}>
                <Text>Address: 1173 21st Avenue, Honolulu, 96816 (1.3mi)</Text>
                {"\n"}
                <Text>Phone Number: (808) 733-2466</Text>
                {"\n"}
                <Text style={{color: 'tomato'}} 
                onPress={() => { Linking.openURL('https://www.timessupermarkets.com/store/kahala-times'); }}>
                Website</Text>
                </Text>

                <Card.Cover style={styles.cardIndividual} source={Longs} />
                <Text style={styles.descriptionTitle}>Longs Kahala (CVS)</Text>
                <Text style={styles.descriptionCaption}>
                <Text>Address: 4211 Waialae Avenue, Honolulu, HI 96816 (1.5mi)</Text>
                {"\n"}
                <Text>Phone Number: (808) 732-0781</Text>
                {"\n"}
                <Text style={{color: 'tomato'}} 
                onPress={() => { Linking.openURL('https://www.cvs.com/store-locator/honolulu-hi-pharmacies/4211-waialae-ave-honolulu-hi-96816/storeid=9220'); }}>
                Website</Text>
                </Text>
            </Card>
        </ScrollView>
    );
  }

  export default Vaccine;