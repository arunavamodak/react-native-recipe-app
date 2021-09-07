import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from "./navigation/Navigator";
import { enableScreens } from "react-native-screens";
import Colors from "./assets/colors";

enableScreens();

export default function App() {

  const [loaded, setLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/roboto/Roboto-Medium.ttf')
    })
  }


  if (!loaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setLoaded(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    )
  }

  return (
    <>
      <StatusBar
        animated={true}
        hidden={false}
        backgroundColor={Colors.primaryColor}
        barStyle="light-content" // Here is where you change the font-color
      />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </>
  );
}

