// components/BeforeAfterCard.js
import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, PanResponder } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BeforeAfterCard({ item }) {
    const [showAfter, setShowAfter] = useState(false);

    // Set up pan responder for swipe gestures
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dx > 50) {
                    setShowAfter(false);
                } else if (gestureState.dx < -50) {
                    setShowAfter(true);
                }
            },
        })
    ).current;

    return (
        <View style={styles.portfolioCard}>
            <View style={styles.imageContainer} {...panResponder.panHandlers}>
                <Image
                    source={{ uri: showAfter ? item.after_image : item.before_image }}
                    style={styles.portfolioImage}
                />
                <View style={styles.imageLabel}>
                    <Text style={styles.imageLabelText}>
                        {showAfter ? 'AFTER' : 'BEFORE'}
                    </Text>
                </View>
            </View>

            <View style={styles.portfolioInfo}>
                <Text style={styles.portfolioTitle}>{item.title}</Text>
                <Text style={styles.portfolioSkills}>{item.skills_used}</Text>
                <Text style={styles.portfolioDescription}>{item.description}</Text>

                <TouchableOpacity
                    style={styles.toggleButton}
                    onPress={() => setShowAfter(!showAfter)}
                >
                    <Ionicons name="swap-horizontal" size={20} color="#FF6B35" />
                    <Text style={styles.toggleButtonText}>Swipe or Tap to Compare</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    portfolioCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginBottom: 20,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    imageContainer: {
        position: 'relative',
        height: 250,
    },
    portfolioImage: {
        width: '100%',
        height: '100%',
    },
    imageLabel: {
        position: 'absolute',
        top: 15,
        left: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    imageLabelText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    portfolioInfo: {
        padding: 20,
    },
    portfolioTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 8,
    },
    portfolioSkills: {
        fontSize: 14,
        color: '#FF6B35',
        fontWeight: '600',
        marginBottom: 8,
    },
    portfolioDescription: {
        fontSize: 16,
        color: '#6B7280',
        lineHeight: 22,
        marginBottom: 15,
    },
    toggleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
    toggleButtonText: {
        marginLeft: 8,
        color: '#FF6B35',
        fontSize: 14,
        fontWeight: '600',
    },
});