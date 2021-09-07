import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { MEALS } from "../data/dummy-data";
import Meal from "../components/Meal";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from "../components/CustomHeaderButton";

export default function FavouritesScreen(props) {

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
        <View style={styles.screen}>
            <FlatList
                data={MEALS}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
                style={{ width: "100%" }}
            />
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