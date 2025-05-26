import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const plumbingServices = [
    {
        title: 'Leak Repairs',
        description: 'Fix pipe leaks, faucet drips, and toilet leaks quickly.',
        price: 'From $80',
        icon: 'water-outline',
    },
    {
        title: 'Faucet Installation',
        description: 'Install new kitchen and bathroom faucets professionally.',
        price: 'From $120',
        icon: 'options-outline',
    },
    {
        title: 'Toilet Repair & Install',
        description:
            'Complete toilet repairs, replacements, and installations.',
        price: 'From $150',
        icon: 'home-outline',
    },
    {
        title: 'Drain Cleaning',
        description: 'Unclog drains and clear blockages in sinks and tubs.',
        price: 'From $100',
        icon: 'funnel-outline',
    },
    {
        title: 'Pipe Installation',
        description: 'New pipe installation and replacement services.',
        price: 'From $200',
        icon: 'git-branch-outline',
    },
    {
        title: 'Water Heater Service',
        description: 'Water heater maintenance, repair, and installation.',
        price: 'From $250',
        icon: 'flame-outline',
    },
];

const PlumbingScreen = ({ navigation }) => {
    const renderService = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() =>
                navigation.navigate('ServiceRequest', {
                    serviceType: `Plumbing - ${item.title}`,
                    serviceId: 3,
                })
            }
        >
            <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                    <Ionicons name={item.icon} size={24} color="#3B82F6" />
                </View>
                <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
            <TouchableOpacity style={styles.requestButton}>
                <Text style={styles.requestButtonText}>Request Quote</Text>
                <Ionicons name="arrow-forward" size={16} color="#fff" />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerSection}>
                <Text style={styles.heading}>Plumbing Services</Text>
                <Image
                    source={require('../assets/services/plumbing.jpg')}
                    style={styles.headerImage}
                />
                <View style={styles.professionalInfo}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.credentials}>
                        Licensed Plumber · 8+ Years Experience
                    </Text>
                    <Text style={styles.bio}>
                        Professional plumbing services for residential and
                        commercial properties. Specializing in leak repairs,
                        installations, and emergency plumbing services.
                    </Text>
                </View>
            </View>

            {/* Services Section */}
            <View style={styles.servicesSection}>
                <Text style={styles.subheading}>Available Services</Text>
                <FlatList
                    data={plumbingServices}
                    renderItem={renderService}
                    keyExtractor={(item) => item.title}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    contentContainerStyle={styles.serviceList}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            {/* Emergency Notice */}
            <View style={styles.emergencyNotice}>
                <Ionicons name="warning" size={24} color="#EF4444" />
                <View style={styles.emergencyText}>
                    <Text style={styles.emergencyTitle}>
                        24/7 Emergency Service
                    </Text>
                    <Text style={styles.emergencyDesc}>
                        Plumbing emergencies can't wait. Call anytime for urgent
                        repairs.
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default PlumbingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerSection: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#001f3f',
        marginBottom: 15,
    },
    headerImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
        borderWidth: 3,
        borderColor: '#3B82F6',
    },
    professionalInfo: {
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: '#001f3f',
        marginBottom: 5,
    },
    credentials: {
        fontSize: 14,
        color: '#3B82F6',
        fontWeight: '500',
        marginBottom: 10,
    },
    bio: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
        paddingHorizontal: 20,
    },
    servicesSection: {
        flex: 1,
        padding: 20,
    },
    subheading: {
        fontSize: 22,
        fontWeight: '600',
        color: '#001f3f',
        marginBottom: 20,
    },
    serviceList: {
        paddingBottom: 20,
    },
    row: {
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        width: '47%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderLeftWidth: 4,
        borderLeftColor: '#3B82F6',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#EBF4FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardPrice: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#10B981',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#001f3f',
        marginBottom: 8,
    },
    cardDesc: {
        fontSize: 12,
        color: '#666',
        lineHeight: 16,
        marginBottom: 15,
    },
    requestButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B82F6',
        paddingVertical: 8,
        borderRadius: 15,
        gap: 5,
    },
    requestButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    emergencyNotice: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FEF2F2',
        padding: 15,
        margin: 20,
        borderRadius: 10,
        borderLeftWidth: 4,
        borderLeftColor: '#EF4444',
        gap: 12,
    },
    emergencyText: {
        flex: 1,
    },
    emergencyTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#EF4444',
        marginBottom: 2,
    },
    emergencyDesc: {
        fontSize: 12,
        color: '#666',
        lineHeight: 16,
    },
});
