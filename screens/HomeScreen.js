import React from 'react';
import {
    ScrollView,
    View,
    Text,
    ImageBackground,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

// Static image imports
const heroImage = require('../assets/hero-background.jpg');
const serviceGeneral = require('../assets/services/general.jpg');
const serviceElectrical = require('../assets/services/electrical.jpg');
const serviceCarpentry = require('../assets/services/carpentry.png');
const galleryImages = [
    require('../assets/gallery/image1.jpg'),
    require('../assets/gallery/image2.jpg'),
    require('../assets/gallery/image3.jpg'),
];

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Welcome Section */}
            <ImageBackground source={heroImage} style={styles.welcomeSection}>
                <Text style={styles.welcomeText}>
                    Welcome to John Doe's Portfolio
                </Text>
            </ImageBackground>

            {/* Services Overview */}
            <View style={styles.servicesSection}>
                <Text style={styles.sectionTitle}>Our Services</Text>
                <View style={styles.servicesList}>
                    <View style={styles.serviceItem}>
                        <Image
                            source={serviceGeneral}
                            style={styles.serviceIcon}
                        />
                        <Text style={styles.serviceLabel}>General Repairs</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Image
                            source={serviceElectrical}
                            style={styles.serviceIcon}
                        />
                        <Text style={styles.serviceLabel}>Electrical</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Image
                            source={serviceCarpentry}
                            style={styles.serviceIcon}
                        />
                        <Text style={styles.serviceLabel}>Carpentry</Text>
                    </View>
                </View>
            </View>

            {/* Why Choose Me */}
            <View style={styles.whySection}>
                <Text style={styles.sectionTitle}>Why Choose Me?</Text>
                <Text style={styles.whyText}>
                    Experienced, reliable, and detail-oriented handyman services
                    to keep your home in top condition.
                </Text>
            </View>

            {/* Gallery */}
            <View style={styles.gallerySection}>
                <Text style={styles.sectionTitle}>Gallery</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.galleryScroll}
                >
                    {galleryImages.map((img, index) => (
                        <Image
                            key={index}
                            source={img}
                            style={styles.galleryImage}
                        />
                    ))}
                </ScrollView>
            </View>

            {/* Testimonials */}
            <View style={styles.testimonialsSection}>
                <Text style={styles.sectionTitle}>Testimonials</Text>
                <View style={styles.testimonialItem}>
                    <Text style={styles.testimonialText}>
                        "John was prompt, professional, and did an outstanding
                        job!" — Jane Smith
                    </Text>
                </View>
            </View>

            {/* Service Area */}
            <View style={styles.areaSection}>
                <Text style={styles.sectionTitle}>Service Area</Text>
                <Text style={styles.areaText}>
                    Serving Toronto and surrounding areas.
                </Text>
            </View>

            {/* Contact Details */}
            <View style={styles.contactSection}>
                <Text style={styles.sectionTitle}>Contact</Text>
                <Text style={styles.contactText}>
                    Email: john.doe@example.com
                </Text>
                <Text style={styles.contactText}>Phone: (123) 456-7890</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    welcomeSection: {
        width,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001f3f',
    },
    welcomeText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#001f3f',
        marginBottom: 10,
    },
    servicesSection: { padding: 20, backgroundColor: '#f8f9fa' },
    servicesList: { flexDirection: 'row', justifyContent: 'space-between' },
    serviceItem: { alignItems: 'center', width: width / 3 - 20 },
    serviceIcon: { width: 50, height: 50, marginBottom: 8 },
    serviceLabel: { fontSize: 14, textAlign: 'center' },
    whySection: { padding: 20 },
    whyText: { fontSize: 16, lineHeight: 22, color: '#333' },
    gallerySection: { paddingVertical: 20, backgroundColor: '#f8f9fa' },
    galleryScroll: { paddingLeft: 20 },
    galleryImage: { width: 200, height: 120, borderRadius: 8, marginRight: 15 },
    testimonialsSection: { padding: 20 },
    testimonialItem: { marginBottom: 15 },
    testimonialText: { fontStyle: 'italic', color: '#555' },
    areaSection: { padding: 20, backgroundColor: '#f8f9fa' },
    areaText: { fontSize: 16, color: '#333' },
    contactSection: { padding: 20 },
    contactText: { fontSize: 16, color: '#333', marginBottom: 5 },
});
