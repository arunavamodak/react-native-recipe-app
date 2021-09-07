import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Animated } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from "../components/CustomHeaderButton";


export default function MealDetailScreen(props) {

    const data = props.route.params.item;

    useEffect(() => {
        props.navigation.setOptions
            ({
                title: data.title,
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title="Fav"
                            iconName='ios-star'
                            onPress={() => {
                                console.log("Fav");
                            }}
                        />
                    </HeaderButtons>
                ),
            });
    }, [props.navigation, props.route.params])

    return (
        <>
            <Image source={{ uri: data.imageUrl }} style={styles.bannerImage} />
            <ScrollView>
                <View style={styles.details}>
                    <Text>{data.duration} Min</Text>
                    <Text>{data.affordability.toUpperCase()}</Text>
                    <Text>{data.complexity.toUpperCase()}</Text>
                </View>
                <View style={styles.pointsContainer}>
                    <Text style={styles.title}>Ingredients : </Text>
                    {
                        data.ingredients.map(item => {
                            return (
                                <Text key={item} style={styles.detailPoint}>-&nbsp;&nbsp;{item}</Text>
                            )
                        })
                    }
                </View>
                <View style={styles.pointsContainer}>
                    <Text style={styles.title}>Steps : </Text>
                    {
                        data.steps.map(item => {
                            return (
                                <Text key={item} style={styles.detailPoint}>-&nbsp;&nbsp;{item}</Text>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </>
    )
};


const styles = StyleSheet.create({
    bannerImage: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 12,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: 10
    },
    detailPoint: {
        marginHorizontal: 20,
        padding: 5,
        fontSize: 15,
        fontFamily: 'open-sans',
        lineHeight: 20
    },
    pointsContainer: {
        marginVertical: 20
    }
});