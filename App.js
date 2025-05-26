import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import InquiriesScreen from './screens/InquiriesScreen';
import ProfileScreen from './screens/ProfileScreen';
import SkillsScreen from './screens/SkillsScreen';
import GalleryScreen from './screens/GalleryScreen';
import ElectricalServiceScreen from './screens/ElectricalServiceScreen';
import CarpentryScreen from './screens/CarpentryScreen';
import PlumbingScreen from './screens/PlumbingScreen';
import GeneralRepairsScreen from './screens/GeneralRepairsScreen';
import ServiceRequestScreen from './screens/ServiceRequestScreen';
import CallToActionScreen from './screens/CallToActionScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ServicesStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#001f3f' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="ServicesMain"
                component={ServicesScreen}
                options={{ title: 'Our Services' }}
            />
            <Stack.Screen
                name="ElectricalService"
                component={ElectricalServiceScreen}
                options={{ title: 'Electrical Services' }}
            />
            <Stack.Screen
                name="Carpentry"
                component={CarpentryScreen}
                options={{ title: 'Carpentry Services' }}
            />
            <Stack.Screen
                name="Plumbing"
                component={PlumbingScreen}
                options={{ title: 'Plumbing Services' }}
            />
            <Stack.Screen
                name="GeneralRepairs"
                component={GeneralRepairsScreen}
                options={{ title: 'General Repairs' }}
            />
            <Stack.Screen
                name="ServiceRequest"
                component={ServiceRequestScreen}
                options={{ title: 'Request Service' }}
            />
        </Stack.Navigator>
    );
};

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#001f3f' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="HomeMain"
                component={HomeScreen}
                options={{ title: 'Skilled Hands' }}
            />
            <Stack.Screen
                name="Skills"
                component={SkillsScreen}
                options={{ title: 'My Skills & Expertise' }}
            />
            <Stack.Screen
                name="Gallery"
                component={GalleryScreen}
                options={{ title: 'Before & After Gallery' }}
            />
            <Stack.Screen
                name="CallToAction"
                component={CallToActionScreen}
                options={{ title: 'Contact Me' }}
            />
        </Stack.Navigator>
    );
};

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Services') {
                        iconName = focused ? 'construct' : 'construct-outline';
                    } else if (route.name === 'Inquiries') {
                        iconName = focused
                            ? 'document-text'
                            : 'document-text-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                tabBarActiveTintColor: '#FF6B35',
                tabBarInactiveTintColor: '#8E8E93',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: '#E5E5EA',
                    paddingBottom: 5,
                    paddingTop: 5,
                    height: 85, // Increased height to accommodate safe area
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Services" component={ServicesStack} />
            <Tab.Screen name="Inquiries" component={InquiriesScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
