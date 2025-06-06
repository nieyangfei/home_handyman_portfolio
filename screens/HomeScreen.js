import { useEffect, useLayoutEffect } from 'react';
import {
  ScrollView, View, Text, ImageBackground, Image, StyleSheet,
  Dimensions, TouchableOpacity, Pressable, Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Database from "../database/Database";

const { width } = Dimensions.get('window');

// Static image imports
const heroImage = require('../assets/hero-background.jpg');
const serviceGeneral = require('../assets/services/general.jpg');
const serviceElectrical = require('../assets/services/electrical.jpg');
const serviceCarpentry = require('../assets/services/carpentry.png');
const galleryImages = [
  require('../assets/gallery/image1.jpg'),
  require('../assets/gallery/image2.jpg'),
  require('../assets/gallery/image3.jpg'),
];

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    Database.initializeDatabase();
  }, []);

  const nav = useNavigation();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout", style: "destructive", onPress: () => {
          nav.replace('Login');
        }
      }
    ]);
  };

  useLayoutEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: 100 }}>
          {/* Cart Icon */}
          <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
            <Ionicons name="cart-outline" size={24} color="#FF6B35" />
          </TouchableOpacity>

          {/* Logout Icon */}
          <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
            <Ionicons name="log-out-outline" size={24} color="#FF6B35" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [nav]);


  return (
    <ScrollView style={styles.container}>
      {/* Welcome Section */}
      <ImageBackground source={heroImage} style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>
          Welcome to John Doe's Portfolio
        </Text>
      </ImageBackground>

      {/* Services Overview */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <View style={styles.servicesList}>
          <View style={styles.serviceItem}>
            <Image source={serviceGeneral} style={styles.serviceIcon} />
            <Text style={styles.serviceLabel}>General Repairs</Text>
          </View>
          <View style={styles.serviceItem}>
            <Pressable onPress={() => navigation.navigate('ElectricalService')}>
              <Image source={serviceElectrical} style={styles.serviceIcon} />
              <Text style={styles.serviceLabel}>Electrical</Text>
            </Pressable>
          </View>
          <View style={styles.serviceItem}>
            <Pressable onPress={() => navigation.navigate('Carpentry')}>
              <Image source={serviceCarpentry} style={styles.serviceIcon} />
              <Text style={styles.serviceLabel}>Carpentry</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Why Choose Me */}
      <View style={styles.whySection}>
        <Text style={styles.sectionTitle}>Why Choose Me?</Text>
        <Text style={styles.whyText}>
          Experienced, reliable, and detail-oriented handyman services
          to keep your home in top condition.
        </Text>
        <TouchableOpacity
          style={styles.whyButton}
          onPress={() => navigation.navigate('WhyMe')}
        >
          <Text style={styles.whyButtonText}>Learn More About Me</Text>
        </TouchableOpacity>
      </View>

      {/* Gallery (My Work) */}
      <View style={styles.areaSection}>
        <Text style={styles.sectionTitle}>Check out my work</Text>
        <Text style={styles.areaText}>
          My craft in action.
        </Text>
        <TouchableOpacity
          style={styles.whyButton}
          onPress={() => navigation.navigate('CraftInActionScreen')}
        >
          <Text style={styles.whyButtonText}>Take a look</Text>
        </TouchableOpacity>
      </View>

      {/* Testimonials */}
      <View style={styles.testimonialsSection}>
        <Text style={styles.sectionTitle}>Testimonials</Text>
        <View style={styles.testimonialItem}>
          <Text style={styles.testimonialText}>
            Check out what client says about my work!
          </Text>
          <TouchableOpacity
            style={styles.whyButton}
            onPress={() => navigation.navigate('Testimonials')}
          >
            <Text style={styles.whyButtonText}>See All Testimonials</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Service Area */}
      <View style={styles.areaSection}>
        <Text style={styles.sectionTitle}>Service Area</Text>
        <Text style={styles.areaText}>
          Serving Toronto and surrounding areas.
        </Text>
      </View>

      {/* Contact Section */}
      <View style={styles.whySection}>
        <Text style={styles.sectionTitle}>Want to connect with me?</Text>
        <Text style={styles.whyText}>
          It is very simple, click below and choose your preferred way!
        </Text>
        <TouchableOpacity
          style={styles.whyButton}
          onPress={() => navigation.navigate('CallToAction')}
        >
          <Text style={styles.whyButtonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  welcomeSection: {
    width,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001f3f',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#001f3f',
    marginBottom: 10,
  },
  servicesSection: { padding: 20, backgroundColor: '#f8f9fa' },
  servicesList: { flexDirection: 'row', justifyContent: 'space-between' },
  serviceItem: { alignItems: 'center', width: width / 3 - 20 },
  serviceIcon: { width: 50, height: 50, marginBottom: 8 },
  serviceLabel: { fontSize: 14, textAlign: 'center' },
  whySection: { padding: 20 },
  whyText: { fontSize: 16, lineHeight: 22, color: '#333' },
  whyButton: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 15,
    alignSelf: 'flex-start',
  },
  whyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  gallerySection: { paddingVertical: 20, backgroundColor: '#f8f9fa' },
  galleryScroll: { paddingLeft: 20 },
  galleryImage: { width: 200, height: 120, borderRadius: 8, marginRight: 15 },
  testimonialsSection: { padding: 20 },
  testimonialItem: { marginBottom: 15 },
  testimonialText: { fontStyle: 'italic', color: '#555' },
  areaSection: { padding: 20, backgroundColor: '#f8f9fa' },
  areaText: { fontSize: 16, color: '#333' },
});
