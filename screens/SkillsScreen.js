import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const skillsData = [
    {
        id: 1,
        category: 'Electrical Work',
        icon: 'flash',
        color: '#F59E0B',
        gradient: ['#FEF3C7', '#FCD34D'],
        image: require('../assets/services/electrical.jpg'),
        experience: '10+ Years',
        certifications: ['Licensed Electrician', 'Code Compliant'],
        skills: [
            'Outlet Installation & Repair',
            'Light Fixture Installation',
            'Circuit Breaker Replacement',
            'Wiring & Rewiring',
            'Electrical Panel Upgrades',
            'GFCI Installation',
            'Ceiling Fan Installation',
            'Smart Home Wiring',
        ],
        specialties: [
            'Troubleshooting electrical issues',
            'Code compliance and safety',
            'Energy-efficient solutions',
            'Smart home integration',
        ],
        tools: [
            'Multimeter',
            'Wire Strippers',
            'Voltage Tester',
            'Conduit Bender',
        ],
        safety: 'Always follow electrical codes and safety protocols. Licensed and insured for your protection.',
    },
    {
        id: 2,
        category: 'Carpentry & Woodwork',
        icon: 'hammer',
        color: '#10B981',
        gradient: ['#D1FAE5', '#34D399'],
        image: require('../assets/services/carpentry.png'),
        experience: '12+ Years',
        certifications: ['Master Carpenter', 'Fine Woodworking'],
        skills: [
            'Custom Furniture Building',
            'Kitchen Cabinet Installation',
            'Trim & Molding Work',
            'Door & Window Installation',
            'Deck Construction',
            'Flooring Installation',
            'Built-in Shelving',
            'Furniture Repair & Restoration',
        ],
        specialties: [
            'Precision joinery techniques',
            'Custom design solutions',
            'Antique furniture restoration',
            'Sustainable wood practices',
        ],
        tools: ['Table Saw', 'Router', 'Chisels', 'Measuring Tools'],
        safety: 'Quality materials and precise craftsmanship ensure lasting results.',
    },
    {
        id: 3,
        category: 'Plumbing Services',
        icon: 'water',
        color: '#3B82F6',
        gradient: ['#DBEAFE', '#60A5FA'],
        image: require('../assets/services/plumbing.jpg'),
        experience: '8+ Years',
        certifications: ['Licensed Plumber', 'Backflow Certified'],
        skills: [
            'Pipe Installation & Repair',
            'Faucet & Fixture Installation',
            'Toilet Repair & Replacement',
            'Drain Cleaning & Unclogging',
            'Water Heater Service',
            'Leak Detection & Repair',
            'Garbage Disposal Installation',
            'Pipe Insulation',
        ],
        specialties: [
            'Emergency leak repairs',
            'Water efficiency solutions',
            'Pipe corrosion prevention',
            'Modern fixture installations',
        ],
        tools: ['Pipe Wrench', 'Snake Auger', 'Pipe Cutter', 'Torch Kit'],
        safety: '24/7 emergency service available. Water damage prevention is our priority.',
    },
    {
        id: 4,
        category: 'General Repairs',
        icon: 'construct',
        color: '#8B5CF6',
        gradient: ['#EDE9FE', '#A78BFA'],
        image: require('../assets/services/general.jpg'),
        experience: '12+ Years',
        certifications: ['General Contractor', 'Safety Certified'],
        skills: [
            'Drywall Repair & Patching',
            'Interior & Exterior Painting',
            'Tile Installation & Repair',
            'Weather Sealing & Caulking',
            'Minor Roof Repairs',
            'Gutter Cleaning & Repair',
            'Pressure Washing',
            'Home Maintenance Inspections',
        ],
        specialties: [
            'Complete home maintenance',
            'Preventive care solutions',
            'Multi-trade problem solving',
            'Cost-effective repairs',
        ],
        tools: ['Power Drill', 'Level', 'Paintbrushes', 'Caulk Gun'],
        safety: 'Comprehensive approach to home maintenance keeps your property in top condition.',
    },
];

export default function SkillsScreen({ navigation }) {
    const [expandedSkill, setExpandedSkill] = useState(null);

    const toggleExpanded = (skillId) => {
        setExpandedSkill(expandedSkill === skillId ? null : skillId);
    };

    const SkillCard = ({ skill }) => {
        const isExpanded = expandedSkill === skill.id;

        return (
            <View style={styles.skillCard}>
                <TouchableOpacity
                    style={styles.skillHeader}
                    onPress={() => toggleExpanded(skill.id)}
                >
                    <LinearGradient
                        colors={skill.gradient}
                        style={styles.skillHeaderGradient}
                    >
                        <View style={styles.skillHeaderContent}>
                            <View style={styles.skillHeaderLeft}>
                                <View
                                    style={[
                                        styles.skillIconContainer,
                                        { backgroundColor: skill.color },
                                    ]}
                                >
                                    <Ionicons
                                        name={skill.icon}
                                        size={28}
                                        color="#fff"
                                    />
                                </View>
                                <View style={styles.skillHeaderText}>
                                    <Text style={styles.skillCategory}>
                                        {skill.category}
                                    </Text>
                                    <Text style={styles.skillExperience}>
                                        {skill.experience} Experience
                                    </Text>
                                </View>
                            </View>
                            <Ionicons
                                name={
                                    isExpanded ? 'chevron-up' : 'chevron-down'
                                }
                                size={24}
                                color={skill.color}
                            />
                        </View>
                    </LinearGradient>
                </TouchableOpacity>

                {isExpanded && (
                    <View style={styles.skillContent}>
                        <Image source={skill.image} style={styles.skillImage} />

                        <View style={styles.certificationsContainer}>
                            <Text style={styles.sectionTitle}>
                                Certifications
                            </Text>
                            <View style={styles.certificationsList}>
                                {skill.certifications.map((cert, index) => (
                                    <View
                                        key={index}
                                        style={styles.certificationItem}
                                    >
                                        <Ionicons
                                            name="shield-checkmark"
                                            size={16}
                                            color="#10B981"
                                        />
                                        <Text style={styles.certificationText}>
                                            {cert}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={styles.skillsListContainer}>
                            <Text style={styles.sectionTitle}>Core Skills</Text>
                            <View style={styles.skillsGrid}>
                                {skill.skills.map((skillItem, index) => (
                                    <View key={index} style={styles.skillItem}>
                                        <Ionicons
                                            name="checkmark-circle"
                                            size={16}
                                            color={skill.color}
                                        />
                                        <Text style={styles.skillItemText}>
                                            {skillItem}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={styles.specialtiesContainer}>
                            <Text style={styles.sectionTitle}>Specialties</Text>
                            {skill.specialties.map((specialty, index) => (
                                <Text key={index} style={styles.specialtyText}>
                                    • {specialty}
                                </Text>
                            ))}
                        </View>

                        <View style={styles.toolsContainer}>
                            <Text style={styles.sectionTitle}>
                                Professional Tools
                            </Text>
                            <View style={styles.toolsList}>
                                {skill.tools.map((tool, index) => (
                                    <View
                                        key={index}
                                        style={[
                                            styles.toolItem,
                                            { borderColor: skill.color },
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                styles.toolText,
                                                { color: skill.color },
                                            ]}
                                        >
                                            {tool}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={styles.safetyContainer}>
                            <Ionicons
                                name="shield-outline"
                                size={20}
                                color="#666"
                            />
                            <Text style={styles.safetyText}>
                                {skill.safety}
                            </Text>
                        </View>
                    </View>
                )}
            </View>
        );
    };

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Skills & Expertise</Text>
                <Text style={styles.headerSubtitle}>
                    Over a decade of professional experience across multiple
                    trades
                </Text>
            </View>

            <View style={styles.content}>
                {skillsData.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                ))}
            </View>

            <View style={styles.footer}>
                <View style={styles.footerCard}>
                    <Ionicons name="star" size={32} color="#FFD700" />
                    <Text style={styles.footerTitle}>Quality Guaranteed</Text>
                    <Text style={styles.footerText}>
                        Every project is backed by years of experience, proper
                        licensing, and a commitment to excellence. Your
                        satisfaction is guaranteed.
                    </Text>
                    <TouchableOpacity
                        style={styles.footerButton}
                        onPress={() => navigation.navigate('CallToAction')}
                    >
                        <Text style={styles.footerButtonText}>
                            Get a Free Consultation
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ height: 100 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#001f3f',
        marginBottom: 8,
        textAlign: 'center',
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 22,
    },
    content: {
        padding: 20,
        gap: 20,
    },
    skillCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        overflow: 'hidden',
    },
    skillHeader: {
        overflow: 'hidden',
    },
    skillHeaderGradient: {
        padding: 20,
    },
    skillHeaderContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    skillHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    skillIconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    skillHeaderText: {
        flex: 1,
    },
    skillCategory: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#001f3f',
        marginBottom: 4,
    },
    skillExperience: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    skillContent: {
        padding: 20,
    },
    skillImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 20,
        resizeMode: 'cover',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#001f3f',
        marginBottom: 10,
    },
    certificationsContainer: {
        marginBottom: 20,
    },
    certificationsList: {
        gap: 8,
    },
    certificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    certificationText: {
        fontSize: 14,
        color: '#333',
    },
    skillsListContainer: {
        marginBottom: 20,
    },
    skillsGrid: {
        gap: 8,
    },
    skillItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 2,
    },
    skillItemText: {
        fontSize: 14,
        color: '#333',
        flex: 1,
    },
    specialtiesContainer: {
        marginBottom: 20,
    },
    specialtyText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
        lineHeight: 20,
    },
    toolsContainer: {
        marginBottom: 20,
    },
    toolsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    toolItem: {
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    toolText: {
        fontSize: 12,
        fontWeight: '500',
    },
    safetyContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#f8f9fa',
        padding: 15,
        borderRadius: 10,
        gap: 10,
    },
    safetyText: {
        fontSize: 13,
        color: '#666',
        lineHeight: 18,
        flex: 1,
    },
    footer: {
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    footerCard: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    footerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#001f3f',
        marginTop: 10,
        marginBottom: 10,
    },
    footerText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 20,
    },
    footerButton: {
        backgroundColor: '#FF6B35',
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 20,
    },
    footerButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
});
