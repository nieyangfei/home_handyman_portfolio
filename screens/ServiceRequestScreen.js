import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Database from '../Database';

export default function ServiceRequestScreen({ route, navigation }) {
    const { serviceType = 'General Service', serviceId = 1 } =
        route.params || {};

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        description: '',
        urgency: 'normal',
        preferredDate: '',
        preferredTime: '',
    });

    const urgencyOptions = [
        { value: 'emergency', label: 'Emergency (Same Day)', color: '#EF4444' },
        { value: 'urgent', label: 'Urgent (Within 2 Days)', color: '#F59E0B' },
        { value: 'normal', label: 'Normal (Within a Week)', color: '#10B981' },
        { value: 'flexible', label: 'Flexible Timeline', color: '#6B7280' },
    ];

    const handleSubmit = async () => {
        // Validate required fields
        if (
            !formData.name ||
            !formData.phone ||
            !formData.address ||
            !formData.description
        ) {
            Alert.alert(
                'Missing Information',
                'Please fill in all required fields.',
            );
            return;
        }

        try {
            await Database.addServiceRequest({
                serviceId,
                serviceType,
                ...formData,
                status: 'pending',
                createdAt: new Date().toISOString(),
            });

            Alert.alert(
                'Request Submitted!',
                "Your service request has been submitted successfully. We'll contact you within 2 hours.",
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.navigate('Inquiries'),
                    },
                ],
            );
        } catch (error) {
            console.error('Error submitting request:', error);
            Alert.alert('Error', 'Failed to submit request. Please try again.');
        }
    };

    const updateFormData = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <SafeAreaView style={styles.container} edges={['bottom']}>
            <KeyboardAvoidingView
                style={styles.keyboardView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <Ionicons
                            name="document-text"
                            size={40}
                            color="#FF6B35"
                        />
                        <Text style={styles.headerTitle}>Request Service</Text>
                        <Text style={styles.headerSubtitle}>{serviceType}</Text>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                Contact Information
                            </Text>

                            <View style={styles.inputGroup}>
                                <Text style={styles.inputLabel}>
                                    Full Name *
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChangeText={(value) =>
                                        updateFormData('name', value)
                                    }
                                />
                            </View>

                            <View style={styles.inputGroup}>
                                <Text style={styles.inputLabel}>
                                    Phone Number *
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="(416) 123-4567"
                                    value={formData.phone}
                                    onChangeText={(value) =>
                                        updateFormData('phone', value)
                                    }
                                    keyboardType="phone-pad"
                                />
                            </View>

                            <View style={styles.inputGroup}>
                                <Text style={styles.inputLabel}>
                                    Email Address
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChangeText={(value) =>
                                        updateFormData('email', value)
                                    }
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                Service Location
                            </Text>

                            <View style={styles.inputGroup}>
                                <Text style={styles.inputLabel}>Address *</Text>
                                <TextInput
                                    style={[styles.input, styles.textArea]}
                                    placeholder="Enter complete address including unit number"
                                    value={formData.address}
                                    onChangeText={(value) =>
                                        updateFormData('address', value)
                                    }
                                    multiline
                                    numberOfLines={3}
                                />
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                Service Details
                            </Text>

                            <View style={styles.inputGroup}>
                                <Text style={styles.inputLabel}>
                                    Describe the work needed *
                                </Text>
                                <TextInput
                                    style={[styles.input, styles.textArea]}
                                    placeholder="Please provide detailed description of the work required, any specific issues, and your expectations"
                                    value={formData.description}
                                    onChangeText={(value) =>
                                        updateFormData('description', value)
                                    }
                                    multiline
                                    numberOfLines={5}
                                />
                            </View>

                            <View style={styles.inputGroup}>
                                <Text style={styles.inputLabel}>
                                    Urgency Level
                                </Text>
                                <View style={styles.urgencyContainer}>
                                    {urgencyOptions.map((option) => (
                                        <TouchableOpacity
                                            key={option.value}
                                            style={[
                                                styles.urgencyOption,
                                                formData.urgency ===
                                                    option.value &&
                                                    styles.urgencySelected,
                                                { borderColor: option.color },
                                            ]}
                                            onPress={() =>
                                                updateFormData(
                                                    'urgency',
                                                    option.value,
                                                )
                                            }
                                        >
                                            <View
                                                style={[
                                                    styles.urgencyDot,
                                                    {
                                                        backgroundColor:
                                                            option.color,
                                                    },
                                                ]}
                                            />
                                            <Text
                                                style={[
                                                    styles.urgencyText,
                                                    formData.urgency ===
                                                        option.value &&
                                                        styles.urgencyTextSelected,
                                                ]}
                                            >
                                                {option.label}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                Preferred Scheduling
                            </Text>

                            <View style={styles.inputRow}>
                                <View
                                    style={[
                                        styles.inputGroup,
                                        styles.halfWidth,
                                    ]}
                                >
                                    <Text style={styles.inputLabel}>
                                        Preferred Date
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="MM/DD/YYYY"
                                        value={formData.preferredDate}
                                        onChangeText={(value) =>
                                            updateFormData(
                                                'preferredDate',
                                                value,
                                            )
                                        }
                                    />
                                </View>

                                <View
                                    style={[
                                        styles.inputGroup,
                                        styles.halfWidth,
                                    ]}
                                >
                                    <Text style={styles.inputLabel}>
                                        Preferred Time
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Morning/Afternoon"
                                        value={formData.preferredTime}
                                        onChangeText={(value) =>
                                            updateFormData(
                                                'preferredTime',
                                                value,
                                            )
                                        }
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.submitSection}>
                            <View style={styles.guaranteeNotice}>
                                <Ionicons
                                    name="shield-checkmark"
                                    size={24}
                                    color="#10B981"
                                />
                                <Text style={styles.guaranteeText}>
                                    Free consultation • No obligation • Response
                                    within 2 hours
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={styles.submitButton}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.submitButtonText}>
                                    Submit Request
                                </Text>
                                <Ionicons
                                    name="arrow-forward"
                                    size={20}
                                    color="#fff"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    keyboardView: {
        flex: 1,
    },
    header: {
        padding: 30,
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#001f3f',
        marginTop: 10,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    form: {
        padding: 20,
        paddingBottom: 100, // Extra padding for bottom tab bar
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#001f3f',
        marginBottom: 15,
    },
    inputGroup: {
        marginBottom: 15,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        color: '#333',
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
    },
    halfWidth: {
        flex: 1,
    },
    urgencyContainer: {
        gap: 10,
    },
    urgencyOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    urgencySelected: {
        backgroundColor: '#f0f9ff',
    },
    urgencyDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 10,
    },
    urgencyText: {
        fontSize: 14,
        color: '#666',
        flex: 1,
    },
    urgencyTextSelected: {
        color: '#001f3f',
        fontWeight: '500',
    },
    submitSection: {
        marginTop: 20,
    },
    guaranteeNotice: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f9ff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        gap: 10,
    },
    guaranteeText: {
        fontSize: 14,
        color: '#666',
        flex: 1,
        lineHeight: 20,
    },
    submitButton: {
        backgroundColor: '#FF6B35',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        borderRadius: 25,
        gap: 10,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});
