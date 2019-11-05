import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';

const CustomButton = props => (
    <TouchableOpacity onPress={props.onPress}>
        <LinearGradient
            start={{ x: 0.0, y: 1 }}
            end={{ x: 1, y: 0.75 }}
         
            colors={props.disabled ?['#eee', '#e5e5d8']:['#F6813A', '#FAC858']}
            style={[
                styles.button,
                { width: Dimensions.get("window").width * 0.8 }
            ]}>

            <Text style={[{ fontWeight: "bold" }, styles.btnText, props.disabled ? null : styles.notDisabledTextColor]}>{props.children}</Text>

        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 5,
        alignContent: "center",
        marginTop: 170,
        height: 50,
        marginBottom: 10
    },
    btnText: {
        textAlign: "center",
        padding: 10
    },
    notDisabledTextColor: {
        color: "#fff",
        
    }

});
export default CustomButton;