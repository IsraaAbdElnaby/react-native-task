import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Dimensions} from 'react-native';

const CustomButton = props => (
    <TouchableOpacity onPress = {props.onPress}>
        <View style={[
            styles.button,
            {backgroundColor: props.color},
            props.disabled ? styles.disabled : null,
            { width: Dimensions.get("window").width * 0.8 }
            ]}>
            <Text style={[{fontWeight: "bold"},styles.btnText,props.disabled ? null: styles.notDisabledTextColor]}>{props.children}</Text>
        </View>
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
    disabled: {
        backgroundColor: '#eee',
        borderColor: '#eee',
        width: "80%",
    },
    notDisabledTextColor: {
        color: "#fff"
    }

});
export default CustomButton;