import { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView, View } from 'react-native';
import TestimonialCard from '../components/TestimonialCard';
import { getTestimonials } from '../database/Database';
import PageHeader from '../components/PageHeader';

export default function TestimonialsScreen() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        loadTestimonials();
    }, []);

    const loadTestimonials = async () => {
        try {
            const items = await getTestimonials();
            setTestimonials(items);
        } catch (error) {
            console.error('Error loading testimonials items:', error);
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <PageHeader title={'Customer Testimonials'} description={'Hear what clients have to say about working with me.'} />
                {testimonials.map((t, index) => (
                    <TestimonialCard key={index} name={t.name} quote={t.quote} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    //content: { padding: 20 },
});
