import { View, Text, StyleSheet } from 'react-native';

export default function PageHeader({ title, description }) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
            <Text style={styles.headerSubtitle}>
                {description}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: { padding: 30, alignItems: 'center', backgroundColor: '#001f3f' },
    headerTitle: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
    headerSubtitle: { fontSize: 16, color: '#ccc', textAlign: 'center' },
});