import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from "../components/CustomHeaderButton";
import FilterSwitch from "../components/FilterSwitch";
import { useDispatch } from "react-redux";
import { filterMeals } from "../store/actions/mealsAction";


export default function FilterScreen(props) {

    const [isGlutenFree, setGlutenFree] = useState(null);
    const [isVegan, setVegan] = useState(null);
    const [isVegetarian, setVegetarian] = useState(null);
    const [isLactoseFree, setLactoseFree] = useState(null);

    const dispatch = useDispatch();

    const saveFilters = () => {
        dispatch(filterMeals({
            isGlutenFree: isGlutenFree,
            isVegan: isVegan,
            isVegetarian: isVegetarian,
            isLactoseFree: isLactoseFree
        }));
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
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title="Apply"
                            iconName='ios-save'
                            onPress={() => {
                                if (props.route.params != undefined)
                                    props.route.params.saveFilter();
                            }}
                        />
                    </HeaderButtons>
                ),
            });
    }, [props.navigation, props.route.params]);


    useEffect(() => {
        props.navigation.setParams({ saveFilter: saveFilters });
    }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

    return (
        <View style={styles.screen}>
            <View style={styles.switchContainer}>
                <Text style={styles.filterText}>Gluten Free</Text>
                <FilterSwitch value={isGlutenFree} statusUpdate={(status) => {
                    setGlutenFree(status);
                }} />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.filterText}>Lactose Free</Text>
                <FilterSwitch value={isLactoseFree} statusUpdate={(status) => {
                    setLactoseFree(status);
                }} />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.filterText}>Vegan</Text>
                <FilterSwitch value={isVegan} statusUpdate={(status) => {
                    setVegan(status);
                }} />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.filterText}>Vegetarian</Text>
                <FilterSwitch value={isVegetarian} statusUpdate={(status) => {
                    setVegetarian(status);
                }} />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: "center"
    },
    switchContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 8
    },
    filterText: {
        fontSize: 18,
        fontFamily: 'open-sans'
    }
});