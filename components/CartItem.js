import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CartItem({ item, onRemove }) {
    return (
        <View style={styles.cartItem}>
            <Text style={styles.cartItemTitle}>{item.title}</Text>
            <Text style={styles.cartItemPrice}>${item.totalPrice.toFixed(2)}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(item.id)}>
                <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignItems: 'center',
    },
    cartItemTitle: {
        fontSize: 16,
        color: '#001f3f',
        flex: 1,
    },
    cartItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6B35',
        marginRight: 10,
    },
    removeButton: {
        backgroundColor: '#FF6B35',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    removeButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
});
