import { View, Text, StyleSheet } from 'react-native';

export default function TestimonialCard({ name, quote }) {
    return (
        <View style={styles.content}>
            <View style={styles.card}>
                <Text style={styles.quote}>"{quote}"</Text>
                <Text style={styles.author}>— {name}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    content: { paddingTop: 5, paddingHorizontal: 20 },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
    },
    quote: {
        fontStyle: 'italic',
        fontSize: 16,
        color: '#374151',
        marginBottom: 10,
    },
    author: {
        fontWeight: '600',
        color: '#FF6B35',
        fontSize: 14,
        textAlign: 'right',
    },
});