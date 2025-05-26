import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Linking,
    Dimensions,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function CallToActionScreen({ navigation }) {
    const handleCall = () => Linking.openURL('tel:+14161234567');
    const handleEmail = () =>
        Linking.openURL('mailto:john@skilledhands.com?subject=Service Inquiry');
    const handleText = () =>
        Linking.openURL(
            "sms:+14161234567?body=Hi John, I'd like to discuss a project with you.",
        );
    const handleWebsite = () => Linking.openURL('https://skilledhands.com');

    const emergencyCall = () => {
        Alert.alert(
            'Emergency Service',
            'This will call John directly for emergency service. Emergency rates may apply.',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Call Now', onPress: handleCall },
            ],
        );
    };

    const ContactButton = ({
        icon,
        title,
        subtitle,
        onPress,
        color,
        emergency = false,
    }) => (
        <TouchableOpacity
            style={[
                styles.contactButton,
                { borderLeftColor: color },
                emergency && styles.emergencyButton,
            ]}
            onPress={onPress}
        >
            <View
                style={[styles.contactIcon, { backgroundColor: `${color}20` }]}
            >
                <Ionicons name={icon} size={22} color={color} />
            </View>
            <View style={styles.contactInfo}>
                <Text
                    style={[
                        styles.contactTitle,
                        emergency && styles.emergencyTitle,
                    ]}
                >
                    {title}
                </Text>
                <Text style={styles.contactSubtitle}>{subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </TouchableOpacity>
    );

    const ServiceHighlight = ({ icon, title, description }) => (
        <View style={styles.serviceHighlight}>
            <View style={styles.serviceHighlightIcon}>
                <Ionicons name={icon} size={24} color="#FF6B35" />
            </View>
            <Text style={styles.serviceHighlightTitle}>{title}</Text>
            <Text style={styles.serviceHighlightDesc}>{description}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Let's Connect</Text>
                    <Text style={styles.headerSubtitle}>
                        Ready to start your project?
                    </Text>
                </View>

                {/* Emergency Section */}
                <View style={styles.emergencySection}>
                    <ContactButton
                        icon="flash"
                        title="Emergency Service"
                        subtitle="24/7 available for urgent repairs"
                        onPress={emergencyCall}
                        color="#EF4444"
                        emergency={true}
                    />
                </View>

                {/* Contact Methods */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Get in Touch</Text>
                    <ContactButton
                        icon="call"
                        title="Call Now"
                        subtitle="Speak directly about your project"
                        onPress={handleCall}
                        color="#10B981"
                    />
                    <ContactButton
                        icon="chatbubble"
                        title="Text Message"
                        subtitle="Quick questions or scheduling"
                        onPress={handleText}
                        color="#8B5CF6"
                    />
                    <ContactButton
                        icon="mail"
                        title="Send Email"
                        subtitle="Detailed project inquiry"
                        onPress={handleEmail}
                        color="#3B82F6"
                    />
                    <ContactButton
                        icon="globe"
                        title="Visit Website"
                        subtitle="Portfolio and testimonials"
                        onPress={handleWebsite}
                        color="#F59E0B"
                    />
                </View>

                {/* Service Highlights */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>What I Offer</Text>
                    <View style={styles.serviceHighlightsGrid}>
                        <ServiceHighlight
                            icon="flash"
                            title="Electrical"
                            description="Safe, code-compliant work"
                        />
                        <ServiceHighlight
                            icon="hammer"
                            title="Carpentry"
                            description="Custom woodwork & repairs"
                        />
                        <ServiceHighlight
                            icon="water"
                            title="Plumbing"
                            description="Leaks, installs & repairs"
                        />
                        <ServiceHighlight
                            icon="construct"
                            title="General"
                            description="All home maintenance"
                        />
                    </View>
                </View>

                {/* Guarantee Section */}
                <View style={styles.guaranteeSection}>
                    <View style={styles.guaranteeCard}>
                        <Ionicons
                            name="shield-checkmark"
                            size={48}
                            color="#10B981"
                        />
                        <Text style={styles.guaranteeTitle}>
                            Service Promise
                        </Text>
                        <Text style={styles.guaranteeDescription}>
                            ✓ Free consultations & estimates{'\n'}✓ Upfront,
                            honest pricing{'\n'}✓ Licensed & fully insured{'\n'}
                            ✓ 100% satisfaction guarantee
                        </Text>
                    </View>
                </View>

                {/* Response Promise */}
                <View style={styles.responseSection}>
                    <Text style={styles.responseTitle}>
                        Quick Response Promise
                    </Text>
                    <View style={styles.responseStats}>
                        <View style={styles.responseStat}>
                            <Text style={styles.responseNumber}>
                                {'< 2hrs'}
                            </Text>
                            <Text style={styles.responseLabel}>
                                Response Time
                            </Text>
                        </View>
                        <View style={styles.responseStat}>
                            <Text style={styles.responseNumber}>Same Day</Text>
                            <Text style={styles.responseLabel}>
                                Emergency Service
                            </Text>
                        </View>
                        <View style={styles.responseStat}>
                            <Text style={styles.responseNumber}>Free</Text>
                            <Text style={styles.responseLabel}>
                                Consultations
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Service Areas */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Service Areas</Text>
                    <View style={styles.serviceAreasContainer}>
                        <Text style={styles.serviceAreasText}>
                            Proudly serving Toronto and the Greater Toronto
                            Area:
                        </Text>
                        <View style={styles.areasList}>
                            <Text style={styles.areaItem}>
                                • Downtown Toronto
                            </Text>
                            <Text style={styles.areaItem}>• North York</Text>
                            <Text style={styles.areaItem}>• Scarborough</Text>
                            <Text style={styles.areaItem}>• Etobicoke</Text>
                            <Text style={styles.areaItem}>• Mississauga</Text>
                            <Text style={styles.areaItem}>• Markham</Text>
                        </View>
                        <Text style={styles.serviceAreasNote}>
                            Outside these areas? Call to discuss - I may still
                            be able to help!
                        </Text>
                    </View>
                </View>

                {/* CTA Section */}
                <View style={styles.ctaSection}>
                    <TouchableOpacity
                        style={styles.ctaButton}
                        onPress={() =>
                            navigation.navigate('Services', {
                                screen: 'ServiceRequest',
                                params: { serviceType: 'General Consultation' },
                            })
                        }
                    >
                        <Text style={styles.ctaButtonText}>
                            Request Free Consultation
                        </Text>
                        <Ionicons name="arrow-forward" size={20} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.secondaryCta}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Text style={styles.secondaryCtaText}>
                            View My Profile
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 50 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
    },
    header: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#001f3f',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#ccc',
        textAlign: 'center',
    },
    emergencySection: {
        padding: 20,
        backgroundColor: '#FEF2F2',
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#001f3f',
        marginBottom: 15,
    },
    contactButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderLeftWidth: 4,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    emergencyButton: {
        backgroundColor: '#FEF2F2',
        borderWidth: 2,
        borderColor: '#EF4444',
    },
    contactIcon: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    contactInfo: {
        flex: 1,
    },
    contactTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#001f3f',
    },
    emergencyTitle: {
        color: '#EF4444',
    },
    contactSubtitle: {
        fontSize: 13,
        color: '#6B7280',
        marginTop: 2,
    },
    serviceHighlightsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    serviceHighlight: {
        width: (width - 60) / 2,
        backgroundColor: '#f8f9fa',
        padding: 20,
        borderRadius: 12,
        marginBottom: 15,
        alignItems: 'center',
    },
    serviceHighlightIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF7F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    serviceHighlightTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#001f3f',
        textAlign: 'center',
        marginBottom: 5,
    },
    serviceHighlightDesc: {
        fontSize: 11,
        color: '#666',
        textAlign: 'center',
        lineHeight: 14,
    },
    guaranteeSection: {
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    guaranteeCard: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    guaranteeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#001f3f',
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
    },
    guaranteeDescription: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        lineHeight: 24,
    },
    responseSection: {
        backgroundColor: '#fff',
        padding: 25,
        margin: 20,
        borderRadius: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    responseTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#001f3f',
        textAlign: 'center',
        marginBottom: 20,
    },
    responseStats: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    responseStat: {
        alignItems: 'center',
    },
    responseNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF6B35',
        marginBottom: 5,
    },
    responseLabel: {
        fontSize: 12,
        color: '#6B7280',
        textAlign: 'center',
    },
    serviceAreasContainer: {
        backgroundColor: '#f8f9fa',
        padding: 20,
        borderRadius: 12,
    },
    serviceAreasText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
        fontWeight: '500',
    },
    areasList: {
        marginBottom: 15,
    },
    areaItem: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
        lineHeight: 20,
    },
    serviceAreasNote: {
        fontSize: 12,
        color: '#666',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    ctaSection: {
        padding: 20,
        alignItems: 'center',
    },
    ctaButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF6B35',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        gap: 10,
        marginBottom: 15,
    },
    ctaButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    secondaryCta: {
        paddingHorizontal: 30,
        paddingVertical: 12,
    },
    secondaryCtaText: {
        color: '#FF6B35',
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
});
