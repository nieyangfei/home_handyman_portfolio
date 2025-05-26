import { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Database from '../Database';

const { width } = Dimensions.get('window');

export default function ShoppingCartScreen({ navigation }) {
    const [services, setServices] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');

    useEffect(() => {
        const initialize = async () => {
            try {
                await Database.initializeDatabase();
                const servicesData = await Database.getServices();
                const cartData = await Database.getCartItems();
                console.log('Loaded services:', servicesData);
                console.log('Loaded cart items:', cartData);
                setServices(servicesData);
                setCartItems(cartData);
            } catch (error) {
                console.error('Error initializing database in ShoppingCartScreen:', error);
                Alert.alert('Error', 'Failed to load services. Please try again.');
            }
        };
        initialize();
    }, []);

    const addToCart = async (serviceId) => {
        if (!phoneNumber || !billingAddress) {
            Alert.alert('Error', 'Please provide phone number and billing address.');
            return;
        }
        try {
            await Database.addToCart(serviceId, phoneNumber, billingAddress, shippingAddress);
            const updatedCart = await Database.getCartItems();
            setCartItems(updatedCart);
            Alert.alert('Success', 'Service added to cart!');
        } catch (error) {
            console.error('Error adding to cart:', error);
            Alert.alert('Error', 'Failed to add service to cart.');
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            await Database.removeFromCart(itemId);
            const updatedCart = await Database.getCartItems();
            setCartItems(updatedCart);
            Alert.alert('Success', 'Item removed from cart!');
        } catch (error) {
            console.error('Error removing from cart:', error);
            Alert.alert('Error', 'Failed to remove item from cart.');
        }
    };

    const placeOrder = async () => {
        if (cartItems.length === 0) {
            Alert.alert('Error', 'Your cart is empty.');
            return;
        }
        try {
            await Database.clearCart();
            setCartItems([]);
            Alert.alert('Success', 'Order placed successfully!');
            setPhoneNumber('');
            setBillingAddress('');
            setShippingAddress('');
        } catch (error) {
            console.error('Error placing order:', error);
            Alert.alert('Error', 'Failed to place order.');
        }
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Service Request Cart</Text>
                <Text style={styles.headerSubtitle}>Select services and submit your request</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Available Services</Text>
                {services.length === 0 ? (
                    <Text style={styles.emptyText}>No services available.</Text>
                ) : (
                    services.map((service) => (
                        <View key={service.id} style={styles.serviceCard}>
                            <Text style={styles.serviceTitle}>{service.title}</Text>
                            <Text style={styles.serviceDescription}>{service.description}</Text>
                            <Text style={styles.servicePrice}>${service.price.toFixed(2)}</Text>
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={() => addToCart(service.id)}
                            >
                                <Text style={styles.addButtonText}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                )}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Customer Details</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Billing Address"
                    value={billingAddress}
                    onChangeText={setBillingAddress}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Shipping Address (Optional)"
                    value={shippingAddress}
                    onChangeText={setShippingAddress}
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Your Cart</Text>
                {cartItems.length === 0 ? (
                    <Text style={styles.emptyCart}>Your cart is empty.</Text>
                ) : (
                    cartItems.map((item, index) => (
                        <View key={index} style={styles.cartItem}>
                            <Text style={styles.cartItemTitle}>{item.title}</Text>
                            <Text style={styles.cartItemPrice}>${item.totalPrice.toFixed(2)}</Text>
                            <TouchableOpacity
                                style={styles.removeButton}
                                onPress={() => removeFromCart(item.id)}
                            >
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                )}
                <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
                <TouchableOpacity
                    style={[styles.placeOrderButton, { opacity: cartItems.length === 0 ? 0.5 : 1 }]}
                    onPress={placeOrder}
                    disabled={cartItems.length === 0}
                >
                    <Text style={styles.placeOrderButtonText}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { padding: 30, alignItems: 'center', backgroundColor: '#001f3f' },
    headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
    headerSubtitle: { fontSize: 16, color: '#ccc', marginTop: 5, textAlign: 'center' },
    section: { padding: 20 },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#001f3f',
        marginBottom: 15,
    },
    serviceCard: {
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
    serviceTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#001f3f',
        marginBottom: 5,
    },
    serviceDescription: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 10,
    },
    servicePrice: {
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
    input: {
        backgroundColor: '#f8f9fa',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
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
    emptyCart: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#001f3f',
        textAlign: 'right',
        marginVertical: 10,
    },
    placeOrderButton: {
        backgroundColor: '#FF6B35',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 10,
    },
    placeOrderButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});