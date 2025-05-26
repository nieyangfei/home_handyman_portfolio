import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';

// Screens
import CallToActionScreen from './screens/CallToActionScreen';
import ElectricalServiceScreen from './screens/ElectricalServiceScreen';
import HomeScreen from './screens/HomeScreen';
import WhyMeScreen from './screens/WhyMeScreen';
import CarpentryScreen from './screens/CarpentryScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#001f3f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        {/* Authentication Screens */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: 'Sign Up' }}
        />

        {/* App Main Screens */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Services' }} />
        <Stack.Screen name="CallToAction" component={CallToActionScreen} />
        <Stack.Screen name="ElectricalService" component={ElectricalServiceScreen} />
        <Stack.Screen name="WhyMe" component={WhyMeScreen} />
        <Stack.Screen name="Carpentry" component={CarpentryScreen} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
