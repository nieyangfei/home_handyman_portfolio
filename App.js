import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import CallToActionScreen from './screens/CallToActionScreen';
import ElectricalService from './screens/ElectricalServiceScreen';
import HomeScreen from './screens/HomeScreen';
import WhyMeScreen from './screens/WhyMeScreen';
import CarpentryScreen from './screens/CarpentryScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';

const Stack = createNativeStackNavigator();
// screenOptions={{
//   headerStyle: {
//     backgroundColor: '#001f3f',
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// }}
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#001f3f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShoppingCart')}
              style={{ marginRight: 15 }}
            >
              <Ionicons name="cart-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Skilled Hands' }} />
        <Stack.Screen name="ElectricalService" component={ElectricalService} options={{ title: 'Electrical Services' }} />
        <Stack.Screen name="WhyMe" component={WhyMeScreen} options={{ title: 'Why?' }} />
        <Stack.Screen name="CallToAction" component={CallToActionScreen} options={{ title: 'Want me to work?' }} />
        <Stack.Screen name="Carpentry" component={CarpentryScreen} options={{ title: 'Carpentry Services' }} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} options={{ title: 'Service Request Cart' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

