import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Alert, Dimensions, TouchableOpacity } from 'react-native';
import Database from '../database/Database';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import CartItem from '../components/CartItem';

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
            <PageHeader title={'Service Request'} description={'Select services and submit your request'} />

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Available Services</Text>
                {services.length === 0 ? (
                    <Text style={styles.emptyText}>No services available.</Text>
                ) : (
                    services.map((service) => (
                        <ServiceCard key={service.id} service={service} onAddToCart={addToCart} />
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
                        <CartItem key={index} item={item} onRemove={removeFromCart} />
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
    section: { padding: 20 },
    sectionTitle: { fontSize: 20, fontWeight: '600', color: '#001f3f', marginBottom: 15 },
    input: { backgroundColor: '#f8f9fa', padding: 15, borderRadius: 10, marginBottom: 10, fontSize: 16, borderWidth: 1, borderColor: '#ddd' },
    totalPrice: { fontSize: 18, fontWeight: 'bold', color: '#001f3f', textAlign: 'right', marginVertical: 10 },
    placeOrderButton: { backgroundColor: '#FF6B35', paddingHorizontal: 40, paddingVertical: 15, borderRadius: 25, alignItems: 'center', marginTop: 10 },
    placeOrderButtonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
    emptyCart: { fontSize: 16, color: '#6B7280', textAlign: 'center' },
    emptyText: { fontSize: 16, color: '#6B7280', textAlign: 'center' },
});