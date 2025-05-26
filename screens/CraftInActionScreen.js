import { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { getPortfolioItems } from '../database/Database';
import PageHeader from '../components/PageHeader';
import BeforeAfterCard from '../components/BeforeAfterCard';  // Import the new reusable component

const { width } = Dimensions.get('window');

export default function GalleryScreen() {
    const [portfolioItems, setPortfolioItems] = useState([]);

    useEffect(() => {
        loadPortfolioItems();
    }, []);

    const loadPortfolioItems = async () => {
        try {
            const items = await getPortfolioItems();
            setPortfolioItems(items);
        } catch (error) {
            console.error('Error loading portfolio items:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <PageHeader title={'Craft in Action'} description={'Before & After Transformations'} />

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {portfolioItems.map((item) => (
                    <BeforeAfterCard key={item.title} item={item} />
                ))}

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
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    ctaSection: {
        paddingVertical: 30,
        alignItems: 'center',
    },
});
