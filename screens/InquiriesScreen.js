import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    RefreshControl,
    Alert,
} from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Database from '../Database';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InquiriesScreen() {
    const [inquiries, setInquiries] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const loadInquiries = async () => {
        try {
            const data = await Database.getServiceRequests();
            setInquiries(data);
        } catch (error) {
            console.error('Error loading inquiries:', error);
        }
    };

    useEffect(() => {
        loadInquiries();
    }, []);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await loadInquiries();
        setRefreshing(false);
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return '#F59E0B';
            case 'confirmed':
                return '#10B981';
            case 'in_progress':
                return '#3B82F6';
            case 'completed':
                return '#6B7280';
            case 'cancelled':
                return '#EF4444';
            default:
                return '#6B7280';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'pending':
                return 'time-outline';
            case 'confirmed':
                return 'checkmark-circle-outline';
            case 'in_progress':
                return 'construct-outline';
            case 'completed':
                return 'checkmark-done-outline';
            case 'cancelled':
                return 'close-circle-outline';
            default:
                return 'help-circle-outline';
        }
    };

    const getUrgencyColor = (urgency) => {
        switch (urgency) {
            case 'emergency':
                return '#EF4444';
            case 'urgent':
                return '#F59E0B';
            case 'normal':
                return '#10B981';
            case 'flexible':
                return '#6B7280';
            default:
                return '#6B7280';
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return (
            date.toLocaleDateString() +
            ' ' +
            date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        );
    };

    const handleInquiryPress = (inquiry) => {
        Alert.alert(
            inquiry.serviceType,
            `Status: ${inquiry.status.toUpperCase()}\n\nDescription: ${inquiry.description}\n\nAddress: ${inquiry.address}\n\nPhone: ${inquiry.phone}${inquiry.email ? `\nEmail: ${inquiry.email}` : ''}`,
            [{ text: 'OK' }],
        );
    };

    const renderInquiry = ({ item }) => (
        <TouchableOpacity
            style={styles.inquiryCard}
            onPress={() => handleInquiryPress(item)}
        >
            <View style={styles.inquiryHeader}>
                <View style={styles.serviceInfo}>
                    <Text style={styles.serviceType}>{item.serviceType}</Text>
                    <Text style={styles.inquiryDate}>
                        {formatDate(item.createdAt)}
                    </Text>
                </View>

                <View style={styles.statusContainer}>
                    <Ionicons
                        name={getStatusIcon(item.status)}
                        size={16}
                        color={getStatusColor(item.status)}
                    />
                    <Text
                        style={[
                            styles.statusText,
                            { color: getStatusColor(item.status) },
                        ]}
                    >
                        {item.status.replace('_', ' ').toUpperCase()}
                    </Text>
                </View>
            </View>

            <Text style={styles.customerName}>{item.name}</Text>
            <Text style={styles.inquiryDescription} numberOfLines={2}>
                {item.description}
            </Text>

            <View style={styles.inquiryFooter}>
                <View style={styles.urgencyBadge}>
                    <View
                        style={[
                            styles.urgencyDot,
                            { backgroundColor: getUrgencyColor(item.urgency) },
                        ]}
                    />
                    <Text style={styles.urgencyText}>
                        {item.urgency.charAt(0).toUpperCase() +
                            item.urgency.slice(1)}
                    </Text>
                </View>

                <TouchableOpacity style={styles.phoneButton}>
                    <Ionicons name="call" size={16} color="#FF6B35" />
                    <Text style={styles.phoneText}>{item.phone}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    const renderEmptyState = () => (
        <View style={styles.emptyState}>
            <Ionicons name="document-text-outline" size={64} color="#ccc" />
            <Text style={styles.emptyTitle}>No Service Requests</Text>
            <Text style={styles.emptyText}>
                Your service requests will appear here once you submit them.
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Service Requests</Text>
                <Text style={styles.headerSubtitle}>
                    Track your inquiries and appointments
                </Text>
            </View>

            <FlatList
                data={inquiries}
                renderItem={renderInquiry}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                ListEmptyComponent={renderEmptyState}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
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
    listContainer: {
        padding: 20,
        paddingBottom: 100,
    },
    inquiryCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderLeftWidth: 4,
        borderLeftColor: '#FF6B35',
    },
    inquiryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    serviceInfo: {
        flex: 1,
    },
    serviceType: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#001f3f',
        marginBottom: 2,
    },
    inquiryDate: {
        fontSize: 12,
        color: '#666',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        gap: 4,
    },
    statusText: {
        fontSize: 10,
        fontWeight: '600',
    },
    customerName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 8,
    },
    inquiryDescription: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 15,
    },
    inquiryFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    urgencyBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    urgencyDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    urgencyText: {
        fontSize: 12,
        color: '#666',
        fontWeight: '500',
    },
    phoneButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    phoneText: {
        fontSize: 12,
        color: '#FF6B35',
        fontWeight: '500',
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#001f3f',
        marginTop: 20,
        marginBottom: 10,
    },
    emptyText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
        paddingHorizontal: 40,
    },
});
