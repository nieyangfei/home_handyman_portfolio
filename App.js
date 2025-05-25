import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CallToActionScreen from './screens/CallToActionScreen';
import ElectricalService from './screens/ElectricalServiceScreen';
import HomeScreen from './screens/HomeScreen';
import WhyMeScreen from './screens/WhyMeScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: '#001f3f',
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //   },
      // }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Skilled Hands' }} />
        <Stack.Screen name="ElectricalService" component={ElectricalService} options={{ title: 'Electrical Services' }} />
        <Stack.Screen name="WhyMe" component={WhyMeScreen} options={{ title: 'Why?' }} />
        <Stack.Screen name="CallToAction" component={CallToActionScreen} options={{ title: "Want me to work?" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;