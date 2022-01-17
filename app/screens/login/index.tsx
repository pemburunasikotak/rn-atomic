import React from "react";
import { View, Text } from "react-native";
// import styles from "screens/demo/styles";
import styles from './Styless';

const LoginScreen = () =>{
    return (
        <View style = {styles.viewContainer}>
            <Text style= {styles.text}> Halaman Login </Text>
        </View>
    )
}
export default LoginScreen;