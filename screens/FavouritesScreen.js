import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Meal from "../components/Meal";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from "../components/CustomHeaderButton";
import { useSelector } from "react-redux";

export default function FavouritesScreen(props) {

    const favouriteMeals = useSelector(state => state.meals.favouriteMeals)

    const renderMealItem = (data) => {
        return (
            <Meal data={data} navigation={props.navigation} />
        )
    }


    useEffect(() => {
        props.navigation.setOptions
            ({
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title="Menu"
                            iconName='ios-menu'
                            onPress={() => {
                                props.navigation.toggleDrawer();
                            }}
                        />
                    </HeaderButtons>
                ),
            });
    }, [props.navigation])

    return (
        favouriteMeals && favouriteMeals.length
            ?
            (
                <FlatList
                    data={favouriteMeals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMealItem}
                    style={{ width: "100%" }}
                />
            ) :
            <View style={styles.screen}>
                <Text>No favourites selected ...</Text>
            </View>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});