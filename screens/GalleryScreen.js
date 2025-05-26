import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    Modal,
    StatusBar,
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const galleryData = [
    {
        id: 1,
        title: 'Kitchen Cabinet Installation',
        category: 'Carpentry',
        beforeImage: require('../assets/gallery/before_kitchen_1.jpg'),
        afterImage: require('../assets/gallery/after_kitchen_1.jpg'),
        description:
            'Complete kitchen cabinet installation with custom modifications for optimal storage.',
        duration: '3 days',
        client: 'Toronto Residence',
    },
    {
        id: 2,
        title: 'Bathroom Electrical Upgrade',
        category: 'Electrical',
        beforeImage: require('../assets/gallery/before_electrical_1.jpg'),
        afterImage: require('../assets/gallery/after_electrical_1.jpg'),
        description:
            'Updated bathroom lighting with GFCI outlets and modern fixtures for safety and style.',
        duration: '1 day',
        client: 'Markham Home',
    },
    {
        id: 3,
        title: 'Plumbing Leak Repair',
        category: 'Plumbing',
        beforeImage: require('../assets/gallery/before_plumbing_1.jpg'),
        afterImage: require('../assets/gallery/after_plumbing_1.jpg'),
        description:
            'Emergency pipe repair and wall restoration. Quick response prevented major water damage.',
        duration: '4 hours',
        client: 'Scarborough Condo',
    },
    {
        id: 4,
        title: 'Living Room Drywall Repair',
        category: 'General',
        beforeImage: require('../assets/gallery/before_drywall_1.jpg'),
        afterImage: require('../assets/gallery/after_drywall_1.jpg'),
        description:
            'Professional drywall patching and painting to restore wall after furniture damage.',
        duration: '2 days',
        client: 'North York House',
    },
    {
        id: 5,
        title: 'Custom Built-in Shelving',
        category: 'Carpentry',
        beforeImage: require('../assets/gallery/before_shelving_1.jpg'),
        afterImage: require('../assets/gallery/after_shelving_1.jpg'),
        description:
            'Built-in entertainment center with custom shelving to maximize space efficiency.',
        duration: '5 days',
        client: 'Etobicoke Townhouse',
    },
    {
        id: 6,
        title: 'Outdoor Electrical Installation',
        category: 'Electrical',
        beforeImage: require('../assets/gallery/before_outdoor_1.jpg'),
        afterImage: require('../assets/gallery/after_outdoor_1.jpg'),
        description:
            'Weather-resistant outdoor lighting and outlet installation for backyard entertainment.',
        duration: '1 day',
        client: 'Mississauga Home',
    },
];

const categoryColors = {
    Electrical: '#F59E0B',
    Carpentry: '#10B981',
    Plumbing: '#3B82F6',
    General: '#8B5CF6',
};

export default function GalleryScreen({ navigation }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageType, setCurrentImageType] = useState('before');

    const categories = [
        'All',
        'Electrical',
        'Carpentry',
        'Plumbing',
        'General',
    ];

    const filteredProjects =
        selectedCategory === 'All'
            ? galleryData
            : galleryData.filter(
                  (project) => project.category === selectedCategory,
              );

    const openProjectModal = (project) => {
        setSelectedProject(project);
        setCurrentImageType('before');
        setModalVisible(true);
    };

    const CategoryFilter = () => (
        <View style={styles.categoryFilterContainer}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryFilterContent}
            >
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={[
                            styles.categoryButton,
                            selectedCategory === category &&
                                styles.categoryButtonActive,
                            selectedCategory === category &&
                                category !== 'All' && {
                                    backgroundColor: categoryColors[category],
                                },
                        ]}
                        onPress={() => setSelectedCategory(category)}
                    >
                        <Text
                            style={[
                                styles.categoryButtonText,
                                selectedCategory === category &&
                                    styles.categoryButtonTextActive,
                            ]}
                        >
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );

    const ProjectCard = ({ project }) => (
        <TouchableOpacity
            style={styles.projectCard}
            onPress={() => openProjectModal(project)}
        >
            <View style={styles.projectImages}>
                <View style={styles.beforeImageContainer}>
                    <Image
                        source={project.beforeImage}
                        style={styles.projectImage}
                    />
                    <View style={styles.imageLabel}>
                        <Text style={styles.imageLabelText}>BEFORE</Text>
                    </View>
                </View>
                <View style={styles.afterImageContainer}>
                    <Image
                        source={project.afterImage}
                        style={styles.projectImage}
                    />
                    <View style={[styles.imageLabel, styles.afterLabel]}>
                        <Text style={styles.imageLabelText}>AFTER</Text>
                    </View>
                </View>
            </View>

            <View style={styles.projectInfo}>
                <View style={styles.projectHeader}>
                    <Text style={styles.projectTitle}>{project.title}</Text>
                    <View
                        style={[
                            styles.categoryTag,
                            {
                                backgroundColor:
                                    categoryColors[project.category],
                            },
                        ]}
                    >
                        <Text style={styles.categoryTagText}>
                            {project.category}
                        </Text>
                    </View>
                </View>

                <Text style={styles.projectDescription} numberOfLines={2}>
                    {project.description}
                </Text>

                <View style={styles.projectFooter}>
                    <View style={styles.projectDetail}>
                        <Ionicons name="time-outline" size={16} color="#666" />
                        <Text style={styles.projectDetailText}>
                            {project.duration}
                        </Text>
                    </View>
                    <View style={styles.projectDetail}>
                        <Ionicons
                            name="location-outline"
                            size={16}
                            color="#666"
                        />
                        <Text style={styles.projectDetailText}>
                            {project.client}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    const ProjectModal = () => (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalContainer}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="rgba(0,0,0,0.9)"
                />
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Ionicons name="close" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    {selectedProject && (
                        <>
                            <View style={styles.modalImageContainer}>
                                <Image
                                    source={
                                        currentImageType === 'before'
                                            ? selectedProject.beforeImage
                                            : selectedProject.afterImage
                                    }
                                    style={styles.modalImage}
                                />
                                <View style={styles.imageToggle}>
                                    <TouchableOpacity
                                        style={[
                                            styles.toggleButton,
                                            currentImageType === 'before' &&
                                                styles.toggleButtonActive,
                                        ]}
                                        onPress={() =>
                                            setCurrentImageType('before')
                                        }
                                    >
                                        <Text
                                            style={[
                                                styles.toggleButtonText,
                                                currentImageType === 'before' &&
                                                    styles.toggleButtonTextActive,
                                            ]}
                                        >
                                            BEFORE
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[
                                            styles.toggleButton,
                                            currentImageType === 'after' &&
                                                styles.toggleButtonActive,
                                        ]}
                                        onPress={() =>
                                            setCurrentImageType('after')
                                        }
                                    >
                                        <Text
                                            style={[
                                                styles.toggleButtonText,
                                                currentImageType === 'after' &&
                                                    styles.toggleButtonTextActive,
                                            ]}
                                        >
                                            AFTER
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.modalInfo}>
                                <Text style={styles.modalTitle}>
                                    {selectedProject.title}
                                </Text>
                                <Text style={styles.modalDescription}>
                                    {selectedProject.description}
                                </Text>

                                <View style={styles.modalDetails}>
                                    <View style={styles.modalDetailItem}>
                                        <Ionicons
                                            name="construct"
                                            size={20}
                                            color="#FF6B35"
                                        />
                                        <Text style={styles.modalDetailText}>
                                            {selectedProject.category}
                                        </Text>
                                    </View>
                                    <View style={styles.modalDetailItem}>
                                        <Ionicons
                                            name="time"
                                            size={20}
                                            color="#FF6B35"
                                        />
                                        <Text style={styles.modalDetailText}>
                                            {selectedProject.duration}
                                        </Text>
                                    </View>
                                    <View style={styles.modalDetailItem}>
                                        <Ionicons
                                            name="location"
                                            size={20}
                                            color="#FF6B35"
                                        />
                                        <Text style={styles.modalDetailText}>
                                            {selectedProject.client}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </>
                    )}
                </View>
            </View>
        </Modal>
    );

    return (
        <SafeAreaView style={styles.container} edges={['bottom']}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Before & After Gallery</Text>
                <Text style={styles.headerSubtitle}>
                    See the transformation of real projects
                </Text>
            </View>

            <CategoryFilter />

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.projectsContainer}>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </View>
                <View style={styles.footer}>
                    <View style={styles.footerCard}>
                        <Ionicons name="camera" size={32} color="#FF6B35" />
                        <Text style={styles.footerTitle}>
                            Your Project Could Be Next!
                        </Text>
                        <Text style={styles.footerText}>
                            Every project tells a story of transformation. Let's
                            create your success story together.
                        </Text>
                        <TouchableOpacity
                            style={styles.footerButton}
                            onPress={() => navigation.navigate('CallToAction')}
                        >
                            <Text style={styles.footerButtonText}>
                                Start Your Project
                            </Text>
                            <Ionicons
                                name="arrow-forward"
                                size={16}
                                color="#fff"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>

            <ProjectModal />
        </SafeAreaView>
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
    },
    categoryFilter: {
        backgroundColor: '#f8f9fa',
        paddingBottom: 20,
    },
    categoryFilterContent: {
        paddingHorizontal: 20,
        gap: 10,
    },
    categoryButton: {
        paddingHorizontal: 16,
        paddingVertical: 6, // Reduced from 8 to 6
        borderRadius: 16, // Slightly smaller radius to match
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        minHeight: 32, // Set a fixed minimum height
        justifyContent: 'center', // Center the text vertically
        alignItems: 'center', // Center the text horizontally
    },
    categoryButtonActive: {
        backgroundColor: '#FF6B35',
        borderColor: '#FF6B35',
    },
    categoryButtonText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
        textAlign: 'center', // Ensure text is centered
        lineHeight: 16, // Control line height to prevent extra space
    },
    categoryButtonTextActive: {
        color: '#fff',
    },
    content: {
        flex: 1,
    },
    projectsContainer: {
        padding: 20,
        gap: 25,
    },
    projectCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        overflow: 'hidden',
    },
    projectImages: {
        flexDirection: 'row',
        height: 180,
    },
    beforeImageContainer: {
        flex: 1,
        position: 'relative',
    },
    afterImageContainer: {
        flex: 1,
        position: 'relative',
    },
    projectImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    imageLabel: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    afterLabel: {
        backgroundColor: 'rgba(16, 185, 129, 0.9)',
    },
    imageLabelText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    projectInfo: {
        padding: 20,
    },
    projectHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#001f3f',
        flex: 1,
        marginRight: 10,
    },
    categoryTag: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
    },
    categoryTagText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '600',
    },
    projectDescription: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 15,
    },
    projectFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    projectDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    projectDetailText: {
        fontSize: 12,
        color: '#666',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
    },
    modalContent: {
        flex: 1,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 20,
        paddingTop: 50,
    },
    closeButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    modalImage: {
        width: width - 40,
        height: (width - 40) * 0.75,
        borderRadius: 15,
        resizeMode: 'cover',
    },
    imageToggle: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
        padding: 5,
    },
    toggleButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        flex: 1,
        alignItems: 'center',
    },
    toggleButtonActive: {
        backgroundColor: '#FF6B35',
    },
    toggleButtonText: {
        color: '#ccc',
        fontSize: 14,
        fontWeight: '600',
    },
    toggleButtonTextActive: {
        color: '#fff',
    },
    modalInfo: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#001f3f',
        marginBottom: 10,
    },
    modalDescription: {
        fontSize: 16,
        color: '#666',
        lineHeight: 22,
        marginBottom: 20,
    },
    modalDetails: {
        gap: 15,
    },
    modalDetailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    modalDetailText: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
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
        textAlign: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 20,
    },
    footerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF6B35',
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 20,
        gap: 8,
    },
    footerButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
});
