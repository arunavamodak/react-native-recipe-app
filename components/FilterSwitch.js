import React from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import Colors from "../assets/colors";


export default function FilterSwitch({ statusUpdate, value }) {
    return (
        <View>
            <Switch
                value={value}
                onValueChange={newState => {
                    statusUpdate(newState);
                }}
                trackColor={{ true: Colors.accentColor, false: "#c1c1c1" }}
                thumbColor={Colors.primaryColor}
            />
        </View>
    )
}


const styles = StyleSheet.create({

})