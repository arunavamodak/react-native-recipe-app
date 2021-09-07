import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground } from 'react-native';

export default function Meal({ data, navigation }) {
    return (
        <View style={styles.mealItem}>
            <TouchableNativeFeedback
                onPress={() => {
                    navigation.navigate('MealDetail', { item: data.item });
                }}
            >
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: data.item.imageUrl }} style={styles.bgImage}>
                            <Text style={styles.mealTitle}>{data.item.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDescription }}>
                        <Text>{data.item.duration} Min</Text>
                        <Text>{data.item.affordability.toUpperCase()}</Text>
                        <Text>{data.item.complexity.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDescription: {
        justifyContent: "space-between",
        paddingHorizontal: 10,
        height: '15%',
        alignItems: 'center'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealTitle: {
        color: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: 'rgba(0,0,0,0.5)',
        fontSize: 18
    }
});
