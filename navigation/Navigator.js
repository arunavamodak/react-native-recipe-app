import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from "../screens/CategoryScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../assets/colors";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import FilterScreen from "../screens/FilterScreen";
import { CustomHeaderButton } from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const Tab = createBottomTabNavigator();
const StackFavourite = createStackNavigator();
const StackMeal = createStackNavigator();
const StackFilter = createStackNavigator();
const Drawer = createDrawerNavigator();


function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: ({ focused, color }) => {
          return (
            <Text style={{ fontSize: 12, color: color, fontWeight: focused ? 'bold' : 'normal' }}>
              {route.name}
            </Text>
          )
        },
        tabBarIcon: (tabInfo) => {
          let iconName;

          if (route.name === 'Meals') {
            iconName = tabInfo.focused
              ? 'ios-restaurant'
              : 'ios-restaurant-outline';
          } else if (route.name === 'Favourite') {
            iconName = tabInfo.focused
              ? 'ios-star'
              : 'ios-star-outline';
          }

          return <Ionicons name={iconName} size={tabInfo.size} color={tabInfo.color} />;
        },

        tabBarActiveTintColor: Colors.accentColor,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Meals" component={MealsStack} />
      <Tab.Screen name="Favourite" component={FavouriteStack} />
    </Tab.Navigator >
  );
}

function FilterStack() {
  return (
    <StackFilter.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}
    >
      <StackFilter.Screen
        options={{
          title: "Filter Meals"
        }}
        name="Filters" component={FilterScreen}
      />
    </StackFilter.Navigator>
  );
}

function FavouriteStack() {
  return (
    <StackFavourite.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}
    >
      <StackFavourite.Screen name="Favourites" component={FavouritesScreen} />
      <StackFavourite.Screen name="MealDetail" component={MealDetailScreen} />
    </StackFavourite.Navigator>
  );
}

function MealsStack() {
  return (
    <StackMeal.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}
    >
      <StackMeal.Screen name="Category" component={CategoryScreen} />
      <StackMeal.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <StackMeal.Screen name="MealDetail" component={MealDetailScreen} />
    </StackMeal.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        drawerLabel: ({ focused, color }) => {
          return (
            <Text style={{ fontSize: 14, color: color, fontWeight: focused ? 'bold' : 'normal', fontFamily: "open-sans-bold" }}>
              {route.name === "MealsOuter" ? "Meals" : "Filters"}
            </Text>
          )
        },
        drawerActiveTintColor: Colors.accentColor,
        drawerStyle: {
          width: 220,
          paddingTop: 0
        },
        drawerItemStyle: {
          marginHorizontal: 0,
          borderRadius: 0,
          paddingHorizontal: 4
        }
      })}
      initialRouteName="MealsOuter" >
      <Drawer.Screen
        name="MealsOuter"
        component={TabNavigator}
      />
      <Drawer.Screen name="FiltersOuter" component={FilterStack} />
    </Drawer.Navigator >
  )
}