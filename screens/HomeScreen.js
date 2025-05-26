import {
    ScrollView,
    View,
    Text,
    ImageBackground,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

// Images imports
const heroImage = require('../assets/hero-background.jpg');
const serviceElectrical = require('../assets/services/electrical.jpg');
const serviceCarpentry = require('../assets/services/carpentry.png');
const galleryImages = [
    require('../assets/gallery/image1.jpg'),
    require('../assets/gallery/image2.jpg'),
    require('../assets/gallery/image3.jpg'),
];

export default function HomeScreen({ navigation }) {
    const quickServices = [
        {
            name: 'Electrical',
            icon: 'flash',
            screen: 'Services',
            params: { service: 'ElectricalService' },
        },
        {
            name: 'Carpentry',
            icon: 'hammer',
            screen: 'Services',
            params: { service: 'Carpentry' },
        },
        {
            name: 'Plumbing',
            icon: 'water',
            screen: 'Services',
            params: { service: 'Plumbing' },
        },
        {
            name: 'General',
            icon: 'construct',
            screen: 'Services',
            params: { service: 'GeneralRepairs' },
        },
    ];

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar barStyle="light-content" backgroundColor="#001f3f" />

            {/* Enhanced Hero Section */}
            <View style={styles.heroContainer}>
                <ImageBackground
                    source={heroImage}
                    style={styles.heroBackground}
                >
                    <LinearGradient
                        colors={['rgba(0,31,63,0.7)', 'rgba(0,31,63,0.9)']}
                        style={styles.heroOverlay}
                    >
                        <View style={styles.heroContent}>
                            <View style={styles.profileSection}>
                                <View style={styles.profileImageContainer}>
                                    <Image
                                        source={require('../assets/profile-placeholder.jpg')}
                                        style={styles.profileImage}
                                    />
                                    <View style={styles.statusIndicator} />
                                </View>
                                <Text style={styles.welcomeText}>John Doe</Text>
                                <Text style={styles.welcomeSubtext}>
                                    Professional Handyman
                                </Text>
                                <View style={styles.ratingContainer}>
                                    {[...Array(5)].map((_, i) => (
                                        <Ionicons
                                            key={i}
                                            name="star"
                                            size={16}
                                            color="#FFD700"
                                        />
                                    ))}
                                    <Text style={styles.ratingText}>
                                        4.9 • 200+ jobs
                                    </Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                style={styles.emergencyButton}
                                onPress={() =>
                                    navigation.navigate('CallToAction')
                                }
                            >
                                <Ionicons name="call" size={20} color="#fff" />
                                <Text style={styles.emergencyText}>
                                    Emergency Service
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>

            {/* Quick Services */}
            <View style={styles.quickServicesSection}>
                <Text style={styles.sectionTitle}>Quick Services</Text>
                <View style={styles.quickServicesGrid}>
                    {quickServices.map((service, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.quickServiceCard}
                            onPress={() =>
                                navigation.navigate(
                                    service.screen,
                                    service.params,
                                )
                            }
                        >
                            <View style={styles.quickServiceIcon}>
                                <Ionicons
                                    name={service.icon}
                                    size={24}
                                    color="#FF6B35"
                                />
                            </View>
                            <Text style={styles.quickServiceText}>
                                {service.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* New Feature Highlights Section */}
            <View style={styles.featuresHighlightSection}>
                <View style={styles.featureHighlightCard}>
                    <TouchableOpacity
                        style={styles.featureHighlight}
                        onPress={() => navigation.navigate('Skills')}
                    >
                        <LinearGradient
                            colors={['#FF6B35', '#FF8C42']}
                            style={styles.featureGradient}
                        >
                            <View style={styles.featureContent}>
                                <Ionicons
                                    name="school"
                                    size={32}
                                    color="#fff"
                                />
                                <View style={styles.featureText}>
                                    <Text style={styles.featureTitle}>
                                        My Skills & Expertise
                                    </Text>
                                    <Text style={styles.featureSubtitle}>
                                        Detailed breakdown of my professional
                                        skills across all trades
                                    </Text>
                                </View>
                                <Ionicons
                                    name="chevron-forward"
                                    size={20}
                                    color="#fff"
                                />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.featureHighlightCard}>
                    <TouchableOpacity
                        style={styles.featureHighlight}
                        onPress={() => navigation.navigate('Gallery')}
                    >
                        <LinearGradient
                            colors={['#10B981', '#059669']}
                            style={styles.featureGradient}
                        >
                            <View style={styles.featureContent}>
                                <Ionicons
                                    name="images"
                                    size={32}
                                    color="#fff"
                                />
                                <View style={styles.featureText}>
                                    <Text style={styles.featureTitle}>
                                        Before & After Gallery
                                    </Text>
                                    <Text style={styles.featureSubtitle}>
                                        See real transformations from my recent
                                        projects
                                    </Text>
                                </View>
                                <Ionicons
                                    name="chevron-forward"
                                    size={20}
                                    color="#fff"
                                />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Why Choose Me */}
            <View style={styles.whySection}>
                <Text style={styles.sectionTitle}>Why Choose Me?</Text>
                <View style={styles.featuresGrid}>
                    <View style={styles.featureItem}>
                        <Ionicons name="time" size={24} color="#10B981" />
                        <Text style={styles.featureItemTitle}>
                            Same Day Service
                        </Text>
                        <Text style={styles.featureDesc}>
                            Available 7 days a week
                        </Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Ionicons
                            name="shield-checkmark"
                            size={24}
                            color="#10B981"
                        />
                        <Text style={styles.featureItemTitle}>
                            Licensed & Insured
                        </Text>
                        <Text style={styles.featureDesc}>
                            Your safety is guaranteed
                        </Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Ionicons name="cash" size={24} color="#10B981" />
                        <Text style={styles.featureItemTitle}>
                            Fair Pricing
                        </Text>
                        <Text style={styles.featureDesc}>No hidden costs</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Ionicons name="thumbs-up" size={24} color="#10B981" />
                        <Text style={styles.featureItemTitle}>
                            100% Satisfaction
                        </Text>
                        <Text style={styles.featureDesc}>Work guaranteed</Text>
                    </View>
                </View>
            </View>

            {/* Recent Work Gallery */}
            <View style={styles.gallerySection}>
                <View style={styles.gallerySectionHeader}>
                    <Text style={styles.sectionTitle}>Recent Work</Text>
                    <TouchableOpacity
                        style={styles.viewAllButton}
                        onPress={() => navigation.navigate('Gallery')}
                    >
                        <Text style={styles.viewAllText}>View All</Text>
                        <Ionicons
                            name="arrow-forward"
                            size={16}
                            color="#FF6B35"
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.galleryScroll}
                    contentContainerStyle={styles.galleryContent}
                >
                    {galleryImages.map((img, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.galleryImageContainer}
                            onPress={() => navigation.navigate('Gallery')}
                        >
                            <Image source={img} style={styles.galleryImage} />
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.6)']}
                                style={styles.galleryOverlay}
                            >
                                <Text style={styles.galleryLabel}>
                                    Project {index + 1}
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Testimonial */}
            <View style={styles.testimonialSection}>
                <Text style={styles.sectionTitle}>What Clients Say</Text>
                <View style={styles.testimonialCard}>
                    <View style={styles.testimonialHeader}>
                        <View style={styles.testimonialStars}>
                            {[...Array(5)].map((_, i) => (
                                <Ionicons
                                    key={i}
                                    name="star"
                                    size={16}
                                    color="#FFD700"
                                />
                            ))}
                        </View>
                    </View>
                    <Text style={styles.testimonialText}>
                        "John was incredible! Fixed our electrical issue that
                        three other contractors couldn't solve. Professional,
                        punctual, and reasonably priced."
                    </Text>
                    <Text style={styles.testimonialAuthor}>
                        — Sarah M., Toronto
                    </Text>
                </View>
            </View>

            {/* CTA Section */}
            <View style={styles.ctaSection}>
                <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
                <Text style={styles.ctaSubtitle}>
                    Get a free consultation today
                </Text>
                <TouchableOpacity
                    style={styles.ctaButton}
                    onPress={() => navigation.navigate('CallToAction')}
                >
                    <Text style={styles.ctaButtonText}>Contact Me Now</Text>
                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heroContainer: {
        height: height * 0.5,
        width: '100%',
    },
    heroBackground: {
        flex: 1,
        width: '100%',
    },
    heroOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    heroContent: {
        alignItems: 'center',
        width: '100%',
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImageContainer: {
        position: 'relative',
        marginBottom: 15,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#fff',
    },
    statusIndicator: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#10B981',
        borderWidth: 3,
        borderColor: '#fff',
    },
    welcomeText: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    welcomeSubtext: {
        color: '#ccc',
        fontSize: 18,
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    ratingText: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 5,
    },
    emergencyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF6B35',
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 25,
        gap: 8,
    },
    emergencyText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    quickServicesSection: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#001f3f',
        marginBottom: 20,
    },
    quickServicesGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    quickServiceCard: {
        width: (width - 60) / 4,
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f8f9fa',
        borderRadius: 15,
        marginBottom: 15,
    },
    quickServiceIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    quickServiceText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#001f3f',
        textAlign: 'center',
    },
    // New Feature Highlights Section
    featuresHighlightSection: {
        padding: 20,
        gap: 15,
    },
    featureHighlightCard: {
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
    },
    featureHighlight: {
        borderRadius: 15,
        overflow: 'hidden',
    },
    featureGradient: {
        padding: 20,
    },
    featureContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    featureText: {
        flex: 1,
    },
    featureTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    featureSubtitle: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.9)',
        lineHeight: 18,
    },
    whySection: {
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    featuresGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    featureItem: {
        width: (width - 60) / 2,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    featureItemTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#001f3f',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 4,
    },
    featureDesc: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    gallerySection: {
        paddingVertical: 20,
    },
    gallerySectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    viewAllButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    viewAllText: {
        fontSize: 16,
        color: '#FF6B35',
        fontWeight: '600',
    },
    galleryScroll: {
        paddingLeft: 20,
    },
    galleryContent: {
        paddingRight: 20,
    },
    galleryImageContainer: {
        position: 'relative',
        marginRight: 15,
        borderRadius: 12,
        overflow: 'hidden',
    },
    galleryImage: {
        width: 200,
        height: 120,
        borderRadius: 12,
    },
    galleryOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        justifyContent: 'flex-end',
        paddingHorizontal: 12,
        paddingBottom: 8,
    },
    galleryLabel: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    testimonialSection: {
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    testimonialCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    testimonialHeader: {
        alignItems: 'center',
        marginBottom: 15,
    },
    testimonialStars: {
        flexDirection: 'row',
        gap: 2,
    },
    testimonialText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 15,
    },
    testimonialAuthor: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        fontWeight: '500',
    },
    ctaSection: {
        padding: 30,
        alignItems: 'center',
        backgroundColor: '#001f3f',
    },
    ctaTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    ctaSubtitle: {
        fontSize: 16,
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 25,
    },
    ctaButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF6B35',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        gap: 10,
    },
    ctaButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});
