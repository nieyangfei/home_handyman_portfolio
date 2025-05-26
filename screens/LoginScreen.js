import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    Image,
    Alert,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const storedPassword = await AsyncStorage.getItem(email);
        if (storedPassword === password) {
            Alert.alert("Success", "Login successful!");
            navigation.replace('Home');
        } else {
            Alert.alert("Error", "Invalid email or password");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.title}>Home Handyman</Text>
                <Text style={styles.subtitle}>Login to book expert home services</Text>
            </View>

            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#888"
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#888"
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.linkText}>
                    Don’t have an account? <Text style={styles.bold}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 20, justifyContent: 'center', backgroundColor: '#f4f6f8' },
    logoContainer: { alignItems: 'center', marginBottom: 30 },
    logo: { width: 80, height: 80, marginBottom: 10, resizeMode: 'contain' },
    title: { fontSize: 24, fontWeight: 'bold', color: '#004d40' },
    subtitle: { fontSize: 14, color: '#555', marginTop: 4, textAlign: 'center' },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#00796b',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5,
    },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    linkText: { marginTop: 20, textAlign: 'center', color: '#00796b' },
    bold: { fontWeight: 'bold' }
});
