import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Linking,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
    const profileData = {
        name: 'John Doe',
        title: 'Professional Handyman',
        experience: '12+ Years',
        rating: 4.9,
        completedJobs: 200,
        phone: '+1 (416) 123-4567',
        email: 'john@skilledhands.com',
        location: 'Toronto, ON',
        certifications: [
            'Licensed Electrician',
            'Certified Carpenter',
            'Insured & Bonded',
            'Safety Certified',
        ],
        specialties: [
            'Electrical Work',
            'Custom Carpentry',
            'Plumbing Repairs',
            'Home Renovations',
        ],
    };

    const handleCall = () => Linking.openURL(`tel:${profileData.phone}`);
    const handleEmail = () =>
        Linking.openURL(`mailto:${profileData.email}?subject=Service Inquiry`);
    const handleWebsite = () => Linking.openURL('https://skilledhands.com');

    const showFullBio = () => {
        Alert.alert(
            'About John Doe',
            "Professional handyman with over 12 years of experience serving the Toronto area. Specializing in electrical work, custom carpentry, and home repairs. Licensed, insured, and committed to quality workmanship.\n\nI take pride in providing reliable, honest service to every customer. Whether it's a small repair or a major renovation project, I treat every job with the same attention to detail and professionalism.",
            [{ text: 'OK' }],
        );
    };

    const ProfileSection = ({ title, children }) => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {children}
        </View>
    );

    const InfoRow = ({ icon, label, value, onPress, showArrow = false }) => (
        <TouchableOpacity
            style={styles.infoRow}
            onPress={onPress}
            disabled={!onPress}
        >
            <View style={styles.infoLeft}>
                <Ionicons name={icon} size={20} color="#FF6B35" />
                <Text style={styles.infoLabel}>{label}</Text>
            </View>
            <View style={styles.infoRight}>
                <Text style={styles.infoValue}>{value}</Text>
                {showArrow && (
                    <Ionicons name="chevron-forward" size={16} color="#ccc" />
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {/* Profile Header */}
            <View style={styles.header}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={require('../assets/profile-placeholder.jpg')}
                        style={styles.profileImage}
                    />
                    <View style={styles.statusBadge}>
                        <Text style={styles.statusText}>Available</Text>
                    </View>
                </View>

                <Text style={styles.profileName}>{profileData.name}</Text>
                <Text style={styles.profileTitle}>{profileData.title}</Text>

                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>
                            {profileData.rating}
                        </Text>
                        <View style={styles.starsContainer}>
                            {[...Array(5)].map((_, i) => (
                                <Ionicons
                                    key={i}
                                    name="star"
                                    size={12}
                                    color={
                                        i < Math.floor(profileData.rating)
                                            ? '#FFD700'
                                            : '#E5E5EA'
                                    }
                                />
                            ))}
                        </View>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>
                            {profileData.completedJobs}+
                        </Text>
                        <Text style={styles.statLabel}>Jobs Completed</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>
                            {profileData.experience}
                        </Text>
                        <Text style={styles.statLabel}>Experience</Text>
                    </View>
                </View>

                <View style={styles.contactButtons}>
                    <TouchableOpacity
                        style={styles.contactButton}
                        onPress={handleCall}
                    >
                        <Ionicons name="call" size={20} color="#fff" />
                        <Text style={styles.contactButtonText}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.contactButton, styles.emailButton]}
                        onPress={handleEmail}
                    >
                        <Ionicons name="mail" size={20} color="#FF6B35" />
                        <Text
                            style={[
                                styles.contactButtonText,
                                styles.emailButtonText,
                            ]}
                        >
                            Email
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Contact Information */}
            <ProfileSection title="Contact Information">
                <InfoRow
                    icon="call-outline"
                    label="Phone"
                    value={profileData.phone}
                    onPress={handleCall}
                    showArrow
                />
                <InfoRow
                    icon="mail-outline"
                    label="Email"
                    value={profileData.email}
                    onPress={handleEmail}
                    showArrow
                />
                <InfoRow
                    icon="location-outline"
                    label="Service Area"
                    value={profileData.location}
                />
                <InfoRow
                    icon="globe-outline"
                    label="Website"
                    value="skilledhands.com"
                    onPress={handleWebsite}
                    showArrow
                />
            </ProfileSection>

            {/* About */}
            <ProfileSection title="About">
                <TouchableOpacity
                    style={styles.bioContainer}
                    onPress={showFullBio}
                >
                    <Text style={styles.bioText}>
                        Professional handyman with over 12 years of experience
                        serving the Toronto area. Specializing in electrical
                        work, custom carpentry, and home repairs...
                    </Text>
                    <Text style={styles.readMore}>Read More</Text>
                </TouchableOpacity>
            </ProfileSection>

            {/* Certifications & Licenses */}
            <ProfileSection title="Certifications & Licenses">
                <View style={styles.badgesContainer}>
                    {profileData.certifications.map((cert, index) => (
                        <View key={index} style={styles.certBadge}>
                            <Ionicons
                                name="shield-checkmark"
                                size={16}
                                color="#10B981"
                            />
                            <Text style={styles.certText}>{cert}</Text>
                        </View>
                    ))}
                </View>
            </ProfileSection>

            {/* Service Specialties */}
            <ProfileSection title="Service Specialties">
                <View style={styles.specialtiesContainer}>
                    {profileData.specialties.map((specialty, index) => (
                        <View key={index} style={styles.specialtyTag}>
                            <Text style={styles.specialtyText}>
                                {specialty}
                            </Text>
                        </View>
                    ))}
                </View>
            </ProfileSection>

            {/* Service Hours */}
            <ProfileSection title="Service Hours">
                <View style={styles.hoursContainer}>
                    <InfoRow
                        icon="time-outline"
                        label="Monday - Friday"
                        value="8:00 AM - 6:00 PM"
                    />
                    <InfoRow
                        icon="time-outline"
                        label="Saturday"
                        value="9:00 AM - 4:00 PM"
                    />
                    <InfoRow
                        icon="time-outline"
                        label="Sunday"
                        value="Emergency Only"
                    />
                    <InfoRow
                        icon="flash-outline"
                        label="Emergency Service"
                        value="24/7 Available"
                    />
                </View>
            </ProfileSection>

            {/* Bottom Spacing */}
            <View style={{ height: 100 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { alignItems: 'center', padding: 30, backgroundColor: '#001f3f' },
    profileImageContainer: { position: 'relative', marginBottom: 15 },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#fff',
    },
    statusBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#10B981',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
    },
    statusText: { color: '#fff', fontSize: 10, fontWeight: '600' },
    profileName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    profileTitle: { fontSize: 16, color: '#ccc', marginBottom: 20 },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    statItem: { alignItems: 'center', paddingHorizontal: 20 },
    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 2,
    },
    statLabel: { fontSize: 12, color: '#ccc' },
    starsContainer: { flexDirection: 'row', gap: 2 },
    statDivider: { width: 1, height: 30, backgroundColor: '#334155' },
    contactButtons: { flexDirection: 'row', gap: 15 },
    contactButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF6B35',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        gap: 8,
    },
    emailButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#FF6B35',
    },
    contactButtonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
    emailButtonText: { color: '#FF6B35' },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#001f3f',
        marginBottom: 15,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
    },
    infoLeft: { flexDirection: 'row', alignItems: 'center', flex: 1, gap: 12 },
    infoLabel: { fontSize: 14, color: '#333' },
    infoRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    infoValue: { fontSize: 14, color: '#666', fontWeight: '500' },
    bioContainer: { backgroundColor: '#f8f9fa', padding: 15, borderRadius: 10 },
    bioText: { fontSize: 14, color: '#333', lineHeight: 20, marginBottom: 8 },
    readMore: { fontSize: 14, color: '#FF6B35', fontWeight: '500' },
    badgesContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
    certBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f9ff',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        gap: 6,
    },
    certText: { fontSize: 12, color: '#10B981', fontWeight: '500' },
    specialtiesContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
    specialtyTag: {
        backgroundColor: '#FF6B35',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
    },
    specialtyText: { fontSize: 12, color: '#fff', fontWeight: '500' },
    hoursContainer: {
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        padding: 5,
    },
});
