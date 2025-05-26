// ElectricalService.js
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Button,
    Alert,
} from 'react-native';

// Static image imports
const solarTracker = require('../assets/services/Solar-tracker.jpg');
const residentialElectrician = require('../assets/services/Residential_Electrician.jpg');

export default function ElectricalService({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>
                Hi, I'm a Professional Electrician ⚡
            </Text>

            <Image source={residentialElectrician} style={styles.image} />
            <Text style={styles.text}>
                I specialize in safe, efficient electrical work for homes,
                businesses, and solar systems.
            </Text>

            <Image source={solarTracker} style={styles.image} />
            <Text style={styles.text}>
                I also work with modern solar power systems and smart energy
                solutions.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
});
