import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const generalServices = [
    {
        title: 'Drywall Repair',
        description: 'Patch holes, cracks, and damage in walls and ceilings.',
        price: 'From $60',
        icon: 'square-outline',
    },
    {
        title: 'Painting Services',
        description: 'Interior and exterior painting with quality finishes.',
        price: 'From $200',
        icon: 'brush-outline',
    },
    {
        title: 'Door & Window Repair',
        description: 'Fix sticky doors, broken locks, and window issues.',
        price: 'From $80',
        icon: 'home-outline',
    },
    {
        title: 'Fixture Installation',
        description: 'Install lights, fans, shelving, and home fixtures.',
        price: 'From $50',
        icon: 'bulb-outline',
    },
    {
        title: 'Tile & Flooring',
        description: 'Repair and install various flooring materials.',
        price: 'From $150',
        icon: 'grid-outline',
    },
    {
        title: 'Weather Sealing',
        description: 'Caulking, weatherstripping, and draft prevention.',
        price: 'From $40',
        icon: 'shield-outline',
    },
];

const GeneralRepairsScreen = ({ navigation }) => {
    const renderService = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() =>
                navigation.navigate('ServiceRequest', {
                    serviceType: `General Repairs - ${item.title}`,
                    serviceId: 4,
                })
            }
        >
            <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                    <Ionicons name={item.icon} size={24} color="#10B981" />
                </View>
                <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
            <TouchableOpacity style={styles.requestButton}>
                <Text style={styles.requestButtonText}>Get Quote</Text>
                <Ionicons name="arrow-forward" size={16} color="#fff" />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {/* Header Section */}
            <View style={styles.headerSection}>
                <Text style={styles.heading}>
                    General Repairs & Maintenance
                </Text>
                <Image
                    source={require('../assets/services/general.jpg')}
                    style={styles.headerImage}
                />
                <View style={styles.professionalInfo}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.credentials}>
                        General Contractor · 12+ Years Experience
                    </Text>
                    <Text style={styles.bio}>
                        Complete home maintenance and repair services. From
                        small fixes to major improvements, I handle all your
                        general contracting needs with professional expertise.
                    </Text>
                </View>
            </View>

            {/* Services Grid */}
            <View style={styles.servicesSection}>
                <Text style={styles.subheading}>Services Available</Text>
                <FlatList
                    data={generalServices}
                    renderItem={renderService}
                    keyExtractor={(item) => item.title}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    scrollEnabled={false}
                    contentContainerStyle={styles.serviceList}
                />
            </View>

            {/* Why Choose Section */}
            <View style={styles.whyChooseSection}>
                <Text style={styles.subheading}>
                    Why Choose Our General Services?
                </Text>
                <View style={styles.benefitsList}>
                    <View style={styles.benefitItem}>
                        <Ionicons
                            name="checkmark-circle"
                            size={24}
                            color="#10B981"
                        />
                        <Text style={styles.benefitText}>
                            One call for multiple repairs
                        </Text>
                    </View>
                    <View style={styles.benefitItem}>
                        <Ionicons
                            name="checkmark-circle"
                            size={24}
                            color="#10B981"
                        />
                        <Text style={styles.benefitText}>
                            Quality materials and workmanship
                        </Text>
                    </View>
                    <View style={styles.benefitItem}>
                        <Ionicons
                            name="checkmark-circle"
                            size={24}
                            color="#10B981"
                        />
                        <Text style={styles.benefitText}>
                            Fair, upfront pricing
                        </Text>
                    </View>
                    <View style={styles.benefitItem}>
                        <Ionicons
                            name="checkmark-circle"
                            size={24}
                            color="#10B981"
                        />
                        <Text style={styles.benefitText}>
                            Clean, professional service
                        </Text>
                    </View>
                </View>
            </View>

            {/* Process Section */}
            <View style={styles.processSection}>
                <Text style={styles.subheading}>How It Works</Text>
                <View style={styles.processSteps}>
                    <View style={styles.processStep}>
                        <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>1</Text>
                        </View>
                        <Text style={styles.stepTitle}>Contact Us</Text>
                        <Text style={styles.stepDesc}>
                            Describe your repair needs
                        </Text>
                    </View>
                    <View style={styles.processStep}>
                        <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>2</Text>
                        </View>
                        <Text style={styles.stepTitle}>Free Estimate</Text>
                        <Text style={styles.stepDesc}>
                            Get a detailed quote
                        </Text>
                    </View>
                    <View style={styles.processStep}>
                        <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>3</Text>
                        </View>
                        <Text style={styles.stepTitle}>Quality Work</Text>
                        <Text style={styles.stepDesc}>
                            Professional completion
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ height: 100 }} />
        </ScrollView>
    );
};

export default GeneralRepairsScreen;

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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#001f3f',
        marginBottom: 15,
        textAlign: 'center',
    },
    headerImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
        borderWidth: 3,
        borderColor: '#10B981',
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
        color: '#10B981',
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
        padding: 20,
    },
    subheading: {
        fontSize: 22,
        fontWeight: '600',
        color: '#001f3f',
        marginBottom: 20,
    },
    serviceList: {
        paddingBottom: 10,
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
        borderLeftColor: '#10B981',
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
        backgroundColor: '#F0FDF4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardPrice: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#059669',
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
        backgroundColor: '#10B981',
        paddingVertical: 8,
        borderRadius: 15,
        gap: 5,
    },
    requestButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    whyChooseSection: {
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    benefitsList: {
        gap: 15,
    },
    benefitItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    benefitText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
    },
    processSection: {
        padding: 20,
    },
    processSteps: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    processStep: {
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
    },
    stepNumber: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#10B981',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    stepNumberText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    stepTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#001f3f',
        marginBottom: 5,
        textAlign: 'center',
    },
    stepDesc: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        lineHeight: 16,
    },
});
