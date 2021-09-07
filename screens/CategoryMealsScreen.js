import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Meal from "../components/Meal";
import { useSelector } from "react-redux";

export default function CategoryMealScreen(props) {

    const data = props.route.params.item;

    const filteredMeals = useSelector(state => state.meals.filteredMeals);

    const categoryMeals = filteredMeals.filter((meal) => meal.categoryIds.includes(data.id));

    useEffect(() => {
        props.navigation.setOptions({ title: data.title })
    }, [props.navigation, props.route.params])

    const renderMealItem = (data) => {
        return (
            <Meal data={data} navigation={props.navigation} />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={categoryMeals}
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
    },
});