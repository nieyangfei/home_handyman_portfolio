import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ServiceCard({ service, onAddToCart }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{service.title}</Text>
            <Text style={styles.description}>{service.description}</Text>
            <Text style={styles.price}>${service.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(service.id)}>
                <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#001f3f',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6B35',
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#FF6B35',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
});
