import { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';

const { width } = Dimensions.get('window');

const valueProps = [
  { icon: '⏰', title: 'Always Punctual', description: 'On time, every time' },
  { icon: '💰', title: 'Transparent Pricing', description: 'No hidden costs' },
  { icon: '🔧', title: 'One-Stop Solution', description: 'All skills, one call' },
  { icon: '💡', title: 'Creative Fixes', description: 'Innovative solutions' },
  { icon: '🛡️', title: 'Safety First', description: 'Licensed & insured' },
  { icon: '⭐', title: 'Quality Guaranteed', description: 'Work stands the test' },
];

const testimonials = [
  {
    text: "John fixed our electrical issue that 3 other contractors couldn't solve. His creative approach saved us thousands!",
    author: "Sarah M.",
    service: "Electrical"
  },
  {
    text: "Punctual, professional, and reasonably priced. Built our custom shelving perfectly to fit the space.",
    author: "Mike R.",
    service: "Carpentry"
  },
  {
    text: "Transparent pricing from the start. No surprises, just quality work delivered on time.",
    author: "Lisa K.",
    service: "General Repairs"
  },
  {
    text: "Been using John for 2 years now. Always reliable, always does it right the first time.",
    author: "Tom W.",
    service: "Plumbing"
  }
];

export default function WhyMeScreen({ navigation }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const fadeAnim = useState(new Animated.Value(1))[0];

  const fadeOut = (callback) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fadeOut(() => {
        setCurrentTestimonial((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
        fadeIn();
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTestimonialPress = (index) => {
    if (index !== currentTestimonial) {
      fadeOut(() => {
        setCurrentTestimonial(index);
        fadeIn();
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Why Choose Me?</Text>
        <Text style={styles.headerSubtitle}>
          What sets me apart from the rest
        </Text>
      </View>

      <View style={styles.valuePropsSection}>
        <View style={styles.valuePropsGrid}>
          {valueProps.map((prop, index) => (
            <TouchableOpacity
              key={index}
              style={styles.valuePropCard}
              activeOpacity={0.8}
            >
              <Text style={styles.valuePropIcon}>{prop.icon}</Text>
              <Text style={styles.valuePropTitle}>{prop.title}</Text>
              <Text style={styles.valuePropDescription}>
                {prop.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.testimonialsSection}>
        <Text style={styles.sectionTitle}>What Clients Say</Text>

        <Animated.View style={[styles.testimonialCard, { opacity: fadeAnim }]}>
          <Text style={styles.testimonialText}>
            "{testimonials[currentTestimonial].text}"
          </Text>
          <Text style={styles.testimonialAuthor}>
            — {testimonials[currentTestimonial].author}
          </Text>
          <Text style={styles.testimonialService}>
            {testimonials[currentTestimonial].service}
          </Text>
        </Animated.View>

        <View style={styles.dotsContainer}>
          {testimonials.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dot,
                index === currentTestimonial && styles.activeDot
              ]}
              onPress={() => handleTestimonialPress(index)}
            />
          ))}
        </View>
      </View>

      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>By the Numbers</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>200+</Text>
            <Text style={styles.statLabel}>Projects Completed</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5 Years</Text>
            <Text style={styles.statLabel}>Experience</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>98%</Text>
            <Text style={styles.statLabel}>Client Satisfaction</Text>
          </View>
        </View>
      </View>

      <View style={styles.ctaSection}>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('CallToAction')}
        >
          <Text style={styles.ctaButtonText}>Get Your Free Consultation</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 30, alignItems: 'center', backgroundColor: '#001f3f' },
  headerTitle: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
  headerSubtitle: { fontSize: 16, color: '#ccc', textAlign: 'center' },
  valuePropsSection: { padding: 20, backgroundColor: '#f8f9fa' },
  valuePropsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  valuePropCard: {
    width: (width - 60) / 2,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  valuePropIcon: { fontSize: 36, marginBottom: 10 },
  valuePropTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#001f3f',
    textAlign: 'center',
    marginBottom: 5,
  },
  valuePropDescription: { fontSize: 12, color: '#666', textAlign: 'center' },
  testimonialsSection: { padding: 30, alignItems: 'center' },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#001f3f',
    marginBottom: 20,
    textAlign: 'center',
  },
  testimonialCard: {
    backgroundColor: '#f8f9fa',
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B35',
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 15,
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#001f3f',
    textAlign: 'center',
    marginBottom: 5,
  },
  testimonialService: {
    fontSize: 12,
    color: '#FF6B35',
    textAlign: 'center',
    fontWeight: '500',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FF6B35',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  statsSection: { padding: 30, backgroundColor: '#f8f9fa' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around' },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 28, fontWeight: 'bold', color: '#FF6B35', marginBottom: 5 },
  statLabel: { fontSize: 12, color: '#666', textAlign: 'center' },
  ctaSection: { padding: 30, alignItems: 'center' },
  ctaButton: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  ctaButtonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
