import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const services = [
    {
        id: 1,
        title: 'Electrical Services',
        description: 'Wiring, outlets, fixtures, and electrical repairs',
        icon: 'flash',
        image: require('../assets/services/electrical.jpg'),
        screen: 'ElectricalService',
        price: 'From $100',
        popular: true,
    },
    {
        id: 2,
        title: 'Carpentry Work',
        description: 'Custom furniture, shelving, and wood repairs',
        icon: 'hammer',
        image: require('../assets/services/carpentry.png'),
        screen: 'Carpentry',
        price: 'From $150',
        popular: true,
    },
    {
        id: 3,
        title: 'Plumbing Services',
        description: 'Pipes, faucets, toilets, and leak repairs',
        icon: 'water',
        image: require('../assets/services/plumbing.jpg'),
        screen: 'Plumbing',
        price: 'From $120',
        popular: false,
    },
    {
        id: 4,
        title: 'General Repairs',
        description: 'Home maintenance, drywall, and installations',
        icon: 'construct',
        image: require('../assets/services/general.jpg'),
        screen: 'GeneralRepairs',
        price: 'From $80',
        popular: false,
    },
];

export default function ServicesScreen({ navigation }) {
    const renderServiceCard = (service) => (
        <TouchableOpacity
            key={service.id}
            style={styles.serviceCard}
            onPress={() => navigation.navigate(service.screen)}
        >
            {service.popular && (
                <View style={styles.popularBadge}>
                    <Text style={styles.popularText}>Popular</Text>
                </View>
            )}

            <Image source={service.image} style={styles.serviceImage} />

            <View style={styles.serviceContent}>
                <View style={styles.serviceHeader}>
                    <View style={styles.serviceIconContainer}>
                        <Ionicons
                            name={service.icon}
                            size={24}
                            color="#FF6B35"
                        />
                    </View>
                    <Text style={styles.servicePrice}>{service.price}</Text>
                </View>

                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>
                    {service.description}
                </Text>

                <View style={styles.serviceFooter}>
                    <TouchableOpacity
                        style={styles.requestButton}
                        onPress={() =>
                            navigation.navigate('ServiceRequest', {
                                serviceType: service.title,
                                serviceId: service.id,
                            })
                        }
                    >
                        <Text style={styles.requestButtonText}>
                            Request Quote
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.infoButton}>
                        <Ionicons
                            name="information-circle-outline"
                            size={20}
                            color="#666"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Our Services</Text>
                    <Text style={styles.headerSubtitle}>
                        Professional handyman services for your home
                    </Text>
                </View>

                <View style={styles.servicesContainer}>
                    {services.map(renderServiceCard)}
                </View>

                <View style={styles.bottomSection}>
                    <View style={styles.guaranteeCard}>
                        <Ionicons
                            name="shield-checkmark"
                            size={40}
                            color="#10B981"
                        />
                        <Text style={styles.guaranteeTitle}>
                            Service Guarantee
                        </Text>
                        <Text style={styles.guaranteeText}>
                            All work comes with our 30-day satisfaction
                            guarantee. Not happy? We'll make it right.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#001f3f',
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#666',
    },
    servicesContainer: {
        padding: 20,
        gap: 20,
    },
    serviceCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        overflow: 'hidden',
        position: 'relative',
    },
    popularBadge: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: '#FF6B35',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        zIndex: 1,
    },
    popularText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    serviceImage: {
        width: '100%',
        height: 160,
        resizeMode: 'cover',
    },
    serviceContent: {
        padding: 20,
    },
    serviceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    serviceIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFF7F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    servicePrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#10B981',
    },
    serviceTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#001f3f',
        marginBottom: 8,
    },
    serviceDescription: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 15,
    },
    serviceFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    requestButton: {
        backgroundColor: '#FF6B35',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        flex: 1,
        marginRight: 10,
    },
    requestButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
    infoButton: {
        padding: 10,
    },
    bottomSection: {
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    guaranteeCard: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    guaranteeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#001f3f',
        marginTop: 10,
        marginBottom: 10,
    },
    guaranteeText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
    },
});
