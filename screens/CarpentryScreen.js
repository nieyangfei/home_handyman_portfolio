import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const carpentryServices = [
    {
        title: 'Furniture Assembly',
        description: 'Efficiently assemble beds, wardrobes, tables and more.',
        price: 'From $40',
    },
    {
        title: 'Door Installation',
        description: 'Expert fitting and alignment for all door types.',
        price: 'From $60',
    },
    {
        title: 'Cabinet Repair',
        description: 'Repair broken hinges, shelves, or replace worn-out cabinets.',
        price: 'From $50',
    },
    {
        title: 'Wooden Flooring',
        description: 'Precision installation and polishing of hardwood floors.',
        price: 'From $100',
    },
];

const CarpentryScreen = () => {
    const renderService = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => Alert.alert(item.title, `${item.description}\n\n${item.price}`)}
        >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Portfolio Section */}
            <View style={styles.introSection}>
                <Text style={styles.heading}>Carpentry Portfolio</Text>
                <Image
                    source={require('../assets/services/carpentry.png')}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.years}>Master Carpenter · 12+ Years of Experience</Text>
                <Text style={styles.bio}>
                    Specialized in fine woodworking, cabinetry, and structural carpentry. Certified in
                    advanced wood joinery and green building techniques. I bring a passion for craftsmanship
                    and a commitment to client satisfaction in every project.
                </Text>
                <Text style={styles.mission}>
                    My mission is to create functional, durable, and beautifully crafted wood solutions
                    tailored to each client's vision.
                </Text>
            </View>

            {/* Service Section */}
            <Text style={styles.subheading}>Services Offered</Text>
            <FlatList
                data={carpentryServices}
                renderItem={renderService}
                keyExtractor={(item) => item.title}
                contentContainerStyle={styles.serviceList}
            />
        </View>
    );
};

export default CarpentryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    introSection: {
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 16,
        backgroundColor: '#f0f0f0',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    profileImage: {
        width: 100,
        height: 100,
        marginVertical: 16,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#ccc',
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2c3e50',
    },
    years: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    bio: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        lineHeight: 20,
        marginVertical: 6,
    },
    mission: {
        fontSize: 13,
        fontStyle: 'italic',
        color: '#777',
        textAlign: 'center',
        marginTop: 6,
    },
    subheading: {
        fontSize: 20,
        fontWeight: '600',
        color: '#001f3f',
        marginVertical: 16,
        marginLeft: 16,
    },
    serviceList: {
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    cardDesc: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
    cardPrice: {
        fontSize: 14,
        color: '#2e7d32',
        marginTop: 8,
        fontWeight: '600',
    },
});
