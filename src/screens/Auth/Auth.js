import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import backgroundImage from '../../assets/Home-repair.png';

class Auth extends Component {
    loginHandler = () => {
        startMainTabs();
    }
    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="البريد الالكتروني" placeholderTextColor={"#848484"} style={styles.input} />
                        <TextInput placeholder="كلمة المرور" placeholderTextColor={"#848484"} style={styles.input} />
                    </View>
                    <Button title="تسجيل الدخول" onPress={this.loginHandler}  color="#FAC858" />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(0.5,0.5,0.5,0.5)'
        
    },
    backgroundImage: {
        width: "100%",
        flex: 1,
        backgroundColor: "black"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        width: "100%",
        padding: 5,
        margin: 8,
        borderBottomColor: "#848484"
    }
})

export default Auth;