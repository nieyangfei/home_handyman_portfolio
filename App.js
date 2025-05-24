import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ElectricalService from './screens/ElectricalServiceScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ElectricalService" component={ElectricalService} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;
