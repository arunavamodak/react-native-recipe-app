import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from "../components/CustomHeaderButton";

import { CATEGORIES } from "../data/dummy-data";

export default function CategoryScreen({ navigation }) {

    useEffect(() => {
        navigation.setOptions
            ({
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title="Menu"
                            iconName='ios-menu'
                            onPress={() => {
                                navigation.toggleDrawer();
                            }}
                        />
                    </HeaderButtons>
                ),
            });


    }, [navigation])


    let TouchableComp = TouchableOpacity;

    if (Platform.OS === "android") {
        TouchableComp = TouchableNativeFeedback
    }

    const categoryRender = ({ item }) => {
        return (
            <View style={styles.categoryItem}>
                <TouchableComp
                    onPress={() => {
                        navigation.navigate('CategoryMeals', { item: item });
                    }}
                    style={{ flex: 1 }}
                >
                    <View style={{ ...styles.categoryContainer, backgroundColor: item.color }}>
                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                    </View>
                </TouchableComp>
            </View>
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            renderItem={categoryRender}
            keyExtractor={item => item.id}
        />
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryItem: {
        flex: 1,
        height: 150,
        margin: 15,
    },
    categoryContainer: {
        flex: 1,
        borderRadius: 12,
        padding: 15,
        elevation: 8,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 18,
        fontFamily: 'open-sans-bold',
        textAlign: 'right'
    }
});