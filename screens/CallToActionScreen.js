import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function CallToActionScreen({ navigation }) {
  const handleCall = () => Linking.openURL('tel:+1234567890');
  const handleEmail = () => Linking.openURL('mailto:info@skilledhands.com?subject=Project Inquiry');
  const handleText = () => Linking.openURL('sms:+1234567890?body=Hi, I\'d like to discuss a project with you.');
  const handleWebsite = () => Linking.openURL('https://skilledhands.com');

  const ContactButton = ({ icon, title, subtitle, onPress, color }) => (
    <TouchableOpacity style={[styles.contactButton, { borderLeftColor: color }]} onPress={onPress}>
      <View style={[styles.contactIcon, { backgroundColor: color + '20' }]}>
        <Ionicons name={icon} size={22} color={color} />
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactTitle}>{title}</Text>
        <Text style={styles.contactSubtitle}>{subtitle}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
    </TouchableOpacity>
  );

  const ServiceCard = ({ icon, title, description }) => (
    <View style={styles.serviceCard}>
      <View style={styles.serviceIcon}>
        <Ionicons name={icon} size={28} color="#FF6B35" />
      </View>
      <Text style={styles.serviceTitle}>{title}</Text>
      <Text style={styles.serviceDescription}>{description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Let's Work Together</Text>
        <Text style={styles.headerSubtitle}>Ready to Start Your Project?</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Free Consultation</Text>
          <Text style={styles.heroDescription}>
            No pressure, no obligation. Let's talk through your ideas and see how I can help.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get in Touch</Text>
          <ContactButton
            icon="call"
            title="Call Now"
            subtitle="Speak directly about your project"
            onPress={handleCall}
            color="#10B981"
          />
          <ContactButton
            icon="mail"
            title="Send Email"
            subtitle="Detailed project inquiry"
            onPress={handleEmail}
            color="#3B82F6"
          />
          <ContactButton
            icon="chatbubble"
            title="Text Message"
            subtitle="Quick questions or scheduling"
            onPress={handleText}
            color="#8B5CF6"
          />
          <ContactButton
            icon="globe"
            title="Visit Website"
            subtitle="Portfolio and testimonials"
            onPress={handleWebsite}
            color="#F59E0B"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services Offered</Text>
          <View style={styles.servicesGrid}>
            <ServiceCard icon="home" title="Home Repairs" description="Quick fixes to renovations" />
            <ServiceCard icon="construct" title="Custom Work" description="Shelving & carpentry" />
            <ServiceCard icon="flash" title="Electrical" description="Outlets, fixtures & more" />
            <ServiceCard icon="water" title="Plumbing" description="Leaks, faucets, toilets" />
          </View>
        </View>

        <View style={styles.guaranteeSection}>
          <View style={styles.guaranteeCard}>
            <Ionicons name="shield-checkmark" size={48} color="#10B981" />
            <Text style={styles.guaranteeTitle}>100% Satisfaction Guarantee</Text>
            <Text style={styles.guaranteeDescription}>
              Not happy? I’ll make it right. Your peace of mind is always a priority.
            </Text>
          </View>
        </View>

        <View style={styles.responseSection}>
          <Text style={styles.responseTitle}>Quick Response Promise</Text>
          <View style={styles.responseStats}>
            <View style={styles.responseStat}>
              <Text style={styles.responseNumber}>{'< 2hrs'}</Text>
              <Text style={styles.responseLabel}>Response Time</Text>
            </View>
            <View style={styles.responseStat}>
              <Text style={styles.responseNumber}>Same Day</Text>
              <Text style={styles.responseLabel}>Emergency Service</Text>
            </View>
            <View style={styles.responseStat}>
              <Text style={styles.responseNumber}>Free</Text>
              <Text style={styles.responseLabel}>Consultations</Text>
            </View>
          </View>
        </View>

        <View style={styles.ctaSection}>
          <TouchableOpacity
            // style={styles.ctaButton}
            onPress={() => navigation.navigate('Home')}
          >
            {/* <Text style={styles.ctaButtonText}>Let’s Get Started</Text> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 30, alignItems: 'center', backgroundColor: '#001f3f' },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  headerSubtitle: { fontSize: 16, color: '#ccc', marginTop: 5, textAlign: 'center' },
  content: { padding: 20 },
  heroSection: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#001f3f',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  section: { marginBottom: 30 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#001f3f',
    marginBottom: 15,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contactIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactInfo: { flex: 1 },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#001f3f',
  },
  contactSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: (width - 60) / 2,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  serviceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF7F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#001f3f',
    textAlign: 'center',
    marginBottom: 6,
  },
  serviceDescription: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 16,
  },
  guaranteeSection: { marginBottom: 30 },
  guaranteeCard: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  guaranteeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001f3f',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  guaranteeDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  responseSection: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  responseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#001f3f',
    textAlign: 'center',
    marginBottom: 20,
  },
  responseStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  responseStat: {
    alignItems: 'center',
  },
  responseNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginBottom: 5,
  },
  responseLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  ctaSection: {
    paddingVertical: 30,
    alignItems: 'center',
  },
  ctaButton: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
